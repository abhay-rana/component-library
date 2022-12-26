import React from "react";
import { twMerge } from "tailwind-merge";

const Divider = ({ className, vertical, children, gap, textAlign, marginLeft, marginRight, color, textColor, marginTop, marginBottom }) => {
	let extra_class = {
		left: "",
		right: "",
		top: "",
		bottom: "",
		gap: "",
		marginLRTB: {},
		width: "",
		color: "",
		textColor: "",
		direction: "flex-row",
		border: "border-t-1",
	};
	if (vertical) {
		extra_class.direction = "flex-col ";
		extra_class.border = "border-l-1 ";
	}
	if (textAlign === "left") extra_class.left = `flex-none `;
	if (textAlign === "right") extra_class.right = `flex-none `;
	if (textAlign === "top") extra_class.top = `flex-none `;
	if (textAlign === "bottom") extra_class.bottom = `flex-none `;
	if (color) extra_class.color += color;
	if (textColor) extra_class.textColor += textColor;

	if (textAlign === "left" && gap && !marginLeft) {
		extra_class.marginLRTB = { marginRight: `${gap}px` };
	} else if (textAlign === "right" && gap && !marginRight) {
		extra_class.marginLRTB = { marginLeft: `${gap}px` };
	} else if (textAlign === "top" && gap && !marginTop) {
		extra_class.marginLRTB = { marginBottom: `${gap}px` };
	} else if (textAlign === "bottom" && gap && !marginBottom) {
		extra_class.marginLRTB = { marginTop: `${gap}px` };
	}

	if (textAlign && !marginLeft && !marginRight) {
		extra_class.gap += `0`;
	} else {
		extra_class.gap += gap;
	}

	return (
		<>
			<div
				className={`flex items-center text-center ${extra_class.direction}`}
				style={{ gap: `${extra_class.gap}px` }}
			>
				<div
					className={twMerge(`flex-1 border-black`, extra_class.left, extra_class.top, extra_class.color, extra_class.border)}
					style={{ width: `${marginLeft}px`, height: `${marginTop}px` }}
				></div>

				{children ? (
					<div
						style={extra_class.marginLRTB}
						className={extra_class.textColor}
					>
						{children}
					</div>
				) : null}

				<div
					className={twMerge(`flex-1 border-black`, extra_class.right, extra_class.bottom, extra_class.color, extra_class.border)}
					style={{ width: `${marginRight}px`, height: `${marginBottom}px` }}
				></div>
			</div>
		</>
	);
};

export default Divider;
