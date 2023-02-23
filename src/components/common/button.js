import { forwardRef, memo } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import Spinner from "../common/spinner";

const Button = memo(
	forwardRef(
		(
			{
				loader = false,
				disabled,
				className,
				primary,
				secondary,
				warning,
				danger,
				success,
				text,
				link,
				border,
				micro,
				small,
				large,
				style,
				onClick,
				tooltip,
				children,
				ripple,
				controlRef,
				block,
				upperCase,
				rounded,
				iconLeft,
			},
			ref
		) => {
			const isDisabled = loader ? true : disabled ? true : false;
			let extraClass = "round-none flex items-center justify-center relative focus:outline-none rounded-lg";
			if (!!upperCase) {
				extraClass += " uppercase";
			}
			if (micro) {
				extraClass += " h-5 px-6 text-xs";
			} else if (small) {
				extraClass += "  h-7  px-6 text-base";
			} else if (large) {
				extraClass += " h-10  px-7";
			} else {
				extraClass += " h-8 px-6 text-base";
			}
			if (text) {
				extraClass += " text-gray-dark";
			} else {
				if (primary) {
					if (link) {
						extraClass += " bg-transparent text-primary";
					} else if (border) {
						extraClass += " bg-transparent text-primary border border-primary";
					} else {
						extraClass += " bg-primary text-white";
					}
				} else if (secondary) {
					if (link) {
						extraClass += " bg-transparent text-secondary";
					} else if (border) {
						extraClass += " bg-transparent text-secondary border border-secondary";
					} else {
						extraClass += " bg-secondary text-white";
					}
				} else if (warning) {
					if (link) {
						extraClass += " bg-transparent text-warning";
					} else if (border) {
						extraClass += " bg-transparent text-warning border border-warning";
					} else {
						extraClass += " bg-warning text-white";
					}
				} else if (danger) {
					if (link) {
						extraClass += " bg-transparent text-danger";
					} else if (border) {
						extraClass += " bg-transparent text-danger border border-danger";
					} else {
						extraClass += " bg-danger text-white";
					}
				} else if (success) {
					if (link) {
						extraClass += " bg-transparent text-success";
					} else if (border) {
						extraClass += " bg-transparent text-success border border-success";
					} else {
						extraClass += " bg-success text-white";
					}
				} else {
					if (link) {
						extraClass += " bg-transparent text-primary";
					} else if (border) {
						extraClass += " bg-transparent text-gray-medium border border-gray-dark";
					} else {
						extraClass += " bg-gray-lightest text-gray-medium";
					}
				}
			}
			if (block) {
				extraClass += " w-full";
			} else {
				extraClass += " block";
			}
			if (disabled) {
				extraClass += " opacity-50 cursor-not-allowed";
			}
			if (rounded) {
				extraClass += " rounded-full";
			}
			if (className) {
				extraClass += ` ${className}`;
			}

			return (
				<button
					onClick={onClick || null}
					disabled={isDisabled}
					className={twMerge(extraClass)}
					ref={controlRef}
					title={tooltip}
					style={{ position: loader ? "relative" : "", ...(style || {}) }}
				>
					<div className="flex flex-row items-center justify-center text-center">
						{children}
						{!loader ? null : micro ? (
							<Spinner
								className="absolute"
								style={{ width: "12px", height: "12px", top: "4px", right: "5px" }}
							/>
						) : !loader ? null : small ? (
							<Spinner
								className="absolute"
								style={{ width: "15px", height: "15px", top: "6px", right: "5px" }}
							/>
						) : large ? (
							<Spinner
								className="absolute"
								style={{ width: "18px", height: "18px", top: "11px", right: "5px" }}
							/>
						) : (
							<Spinner
								className="absolute"
								style={{ width: "16px", height: "16px", top: "8px", right: "5px" }}
							/>
						)}
					</div>
				</button>
			);
		}
	)
);

export const IconButton = ({ children, onClick, className }) => {
	const createWave = (event) => {
		const icon_button_class = event.currentTarget.classList;

		if (icon_button_class.contains("custom_shadow_click")) icon_button_class.remove("custom_shadow_click");

		// -> triggering reflow /* The actual magic */
		// without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
		// Oops! This won't work in strict mode
		// element.offsetWidth = element.offsetWidth;
		// Do this instead:
		void event.currentTarget.offsetWidth;

		icon_button_class.add("custom_shadow_click");

		onClick && onClick(event);
	};
	return (
		<>
			<div
				className={twMerge("custom_shadow_hover relative flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-full", className)}
				onClick={createWave}
			>
				<div className="pointer-events-none">{children}</div>
			</div>
		</>
	);
};

Button.displayName = "Button";
export default Button;

Button.propTypes = {
	/** True make loader visible  */
	loader: PropTypes.bool,
	/** True disabled button  */
	disabled: PropTypes.bool,
	/** Extra class for button  */
	className: PropTypes.string,
	/** Primary make button with main color  */
	primary: PropTypes.bool,
	/** warning make button orange type  */
	warning: PropTypes.bool,
	/** true make error type button  */
	danger: PropTypes.bool,
	/** True make small button default is medium*/
	micro: PropTypes.bool,
	small: PropTypes.bool,
	/** True make large button default is medium  */
	large: PropTypes.bool,
	/** inline style object  */
	style: PropTypes.object,
	/** onClick accept function  */
	onClick: PropTypes.func,
	/** toolTip string type show tooltip  */
	tooltip: PropTypes.string,
};
