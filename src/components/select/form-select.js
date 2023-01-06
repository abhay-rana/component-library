import React, { memo } from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const Select = memo((props) => {
	const default_props = {
		value: props.value,
		onChange: props.onChange,
		required: props.required,
		id: props.id || props.name,
		name: props.name,
		value: props.value,
		disabled: props.disabled,
		autoFocus: props.autoFocus,
		required: props.required,
		onFocus: props.onFocus,
		onChange: props.onChange,
		style: props.style,
	};

	const { className, error, success, small, large, children, label, stacked, controlRef, light, note, outlined = true } = { ...props };

	let extra_class = {
		label: "",
		container: "",
	};

	if (!!default_props.required) {
		extra_class.label += `peer-required:after:text-pink-500 peer-required:after:content-["*"] peer-required:after:px-1.5 `;
	}
	if (outlined) {
		extra_class.container += `border border-slate-200 `;
	}
	if (error) {
		extra_class.container += "border-danger ";
	}
	if (className) {
		extra_class.container += className;
	}

	return (
		<>
			<div className="relative m-4 h-full w-full">
				<select
					{...default_props}
					id={default_props.id}
					className={twMerge(`peer relative h-full w-full appearance-none px-4 outline-none focus:border-primary`, extra_class.container)}
				>
					{children}
				</select>
				{/* pointer-events-none on label will fires the onClick on the select(open the dropdown) it will not pass the click to the down, 
	peer-valid and peer-focus will float the label and it will works properly if the required props is given to the select;
	*/}
				<label
					htmlFor={default_props.id}
					className={twMerge(
						`pointer-events-none  absolute top-2.5 left-1 z-[1]  block   bg-transparent bg-white  px-2 text-sm text-slate-400 transition-all
		peer-valid:-top-2 peer-valid:left-3 peer-valid:text-xs  peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary `,
						extra_class.label
					)}
				>
					{label}
				</label>
				{/* svg for the downward arrow */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-amber-500 peer-disabled:cursor-not-allowed"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-labelledby="title-01 description-01"
					role="graphics-symbol"
				>
					<title id="title-01">Arrow Icon</title>
					<desc id="description-01">Arrow icon of the select list.</desc>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
				{/* end svg  */}
				{error || note ? (
					<div className="h-6">
						{error ? (
							<div className={`text-xs ${error ? "text-danger" : success ? "text-success" : null}`}>{error || success}</div>
						) : note ? (
							<div className="text-xs text-gray-medium">{note}</div>
						) : null}
					</div>
				) : null}
			</div>
		</>
	);
});

const Option = ({ children, label, ...props }) => {
	return (
		<>
			<option
				{...props}
				// className="hover:bg-red-400 focus:bg-black"
			>
				{!!children ? children : label}
			</option>
		</>
	);
};

export default Select;

Select.Option = Option;
Select.displayName = "Select";

Select.propTypes = {
	/** string type default is text  */
	type: PropTypes.string,
	/** default is false   */
	disabled: PropTypes.bool,
	/** Extra class for input  */
	className: PropTypes.string,
	/** bool type default is false input type success  */
	success: PropTypes.bool,
	/** bool type default is false  */
	error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	/** True make small button default is medium*/
	small: PropTypes.bool,
	/** True make large button default is medium  */
	large: PropTypes.bool,
	/** onChange accept function  */
	onChange: PropTypes.func,
	/** onFocus accept function  */
	onFocus: PropTypes.func,

	/** boolean set auto focus default is false */
	autoFocus: PropTypes.bool,
	/** label on input string type */
	label: PropTypes.string,
	/** stacked bool type to position label */
	stacked: PropTypes.bool,

	style: PropTypes.object,
};
