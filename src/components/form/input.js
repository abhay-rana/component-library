import { memo } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Input = memo((props) => {
	const default_props = {
		type: props.type,
		id: props.id,
		name: props.name,
		value: props.value,
		maxLength: props.maxLength,
		minLength: props.minLength,
		max: props.max,
		min: props.min,
		disabled: props.disabled,
		autoComplete: props.autoComplete,
		placeholder: props.placeholder,
		autoFocus: props.autoFocus,
		required: props.required,
		onFocus: props.onFocus,
		onChange: props.onChange,
		onKeyPress: props.onKeyPress,
		style: props.style,
		step: props.step,
	};
	const { className, error, success, small, large, children, label, stacked, controlRef, no_gap, light, note, labelClassName } = { ...props };

	let extra_class = {
		input: "",
		label: "",
	};
	extra_class.input = "w-full z-0 box-border text-gray-dark focus:border-primary focus:outline-none placeholder-gray-light outline-none hover:border-primary border border-slate-400 ";

	if (small) {
		extra_class.input += stacked ? "h-7 text-base " : "h-7 px-2 text-base ";
	} else if (large) {
		extra_class.input += stacked ? "h-10 " : "h-10 px-2 ";
	} else {
		extra_class.input += stacked ? "h-8 text-base " : "h-8 px-2 text-base ";
	}

	if (stacked) {
		extra_class.input += "border-0 border-b-2 bg-transparent px-0 hover:border-b-2 ";
	} else {
		extra_class.input += "border ";
	}

	if (light) {
		extra_class.input += "text-white placeholder-gray-md ";
	}

	const showError = (typeof error != "boolean" && error) || (typeof success != "boolean" && success);

	if (showError) {
		extra_class.input += "border-danger ";
	} else if (success) {
		extra_class.input += "border-success ";
	}

	if (className) {
		extra_class.input += `${className} `;
	}
	if (labelClassName) {
		extra_class.label += `${labelClassName} `;
		if (!!error) extra_class.label += `text-danger `;
	}

	return (
		<div className="group">
			{label ? <label className={twMerge(`mb-1 block text-xs font-normal text-gray-500 group-hover:text-primary ${extra_class.label}`)}>{label}</label> : null}
			{children}
			<input
				{...default_props}
				className={twMerge(extra_class.input)}
				ref={controlRef}
			/>
			{error || note ? (
				<div className="h-6">
					{showError ? (
						<div className={`text-xs ${error ? "text-danger" : success ? "text-success" : null}`}>{error || success}</div>
					) : note ? (
						<div className="text-xs text-gray-medium">{note}</div>
					) : null}
				</div>
			) : null}
		</div>
	);
});
export default Input;
Input.propTypes = {
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
	/** onKeyPress accept function */

	onKeyPress: PropTypes.func,
	/*maxLength accept number  */
	maxLength: PropTypes.string,
	/*minLength accept number  */
	minLength: PropTypes.string,
	/*max accept number  */
	max: PropTypes.string,
	/*min accept number  */
	min: PropTypes.string,
	/** ref */
	// ref: PropTypes.object,

	/** boolean set auto focus default is false */
	autoFocus: PropTypes.bool,
	/** label on input string type */
	label: PropTypes.string,
	/** stacked bool type to position label */
	stacked: PropTypes.bool,

	/**bool type  required true if field can't be empty */
	required: PropTypes.bool,
	/*auto complete text suggestion string type*/
	autoComplete: PropTypes.string,
	/**input inline css object*/
	style: PropTypes.object,
	/**input placeholder string type */
	placeholder: PropTypes.string,
};
