import { forwardRef, memo, useRef, useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Textarea = memo(
	forwardRef((props, ref) => {
		const default_props = {
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
			row: props.row,
			col: props.col,
		};
		const { className, error, success, small, large, children, label, stacked, light, minHeight = "", maxHeight = "", padding } = { ...props };

		const calc_height = useRef(0);

		const input_ref = useRef(null);

		let extra_class = {
			label: "",
			input: "",
		};

		extra_class.input += "w-full z-0 text-gray-dark box-border focus:border-primary focus:outline-none placeholder-gray-medium outline-none hover:border-primary border border-slate-400 ";

		// if (small) {
		// 	extra_class += stacked ? "h-20 text-base " : "h-20 px-2 text-base ";
		// } else if (large) {
		// 	extra_class += stacked ? "h-56 " : "h-56 px-2 ";
		// } else {
		// 	extra_class += stacked ? "h-36 text-base " : "h-36 px-2 text-base ";
		// }

		const border_width = 1;
		const row_height = 24;
		let numberOfLineBreaks = 0;

		if (stacked) {
			extra_class.input += "border-b bg-transparent px-0 ";
		}

		if (light) {
			extra_class.input += "text-white placeholder-gray-md ";
		}

		if (error) {
			extra_class.input += "border-danger ";
		} else if (success) {
			extra_class.input += "border-success ";
		}

		if (className) {
			extra_class.input += `${className} `;
		}

		const hydrateRef = (el) => {
			input_ref.current = el;
			if (!!ref) ref.current = el;
		};

		useEffect(() => {
			// scrollHeight is automatically calculated according to the line height on the every enter pressed

			//this have to reset every time on Change so that "scrollHeight" works properly
			input_ref.current.style.height = 0;
			input_ref.current.style.height = input_ref.current.scrollHeight + "px";

			if (input_ref.current.scrollHeight <= maxHeight) {
				input_ref.current.style.overflow = "hidden";
			} else {
				input_ref.current.style.overflowY = `scroll`;
			}
		}, [default_props.value]);

		return (
			<div className="relative w-full">
				{label ? <label className={twMerge(`mb-1 block text-xs font-normal ${error ? "text-danger" : "text-gray-500"}`)}>{label}</label> : null}
				{children}
				<textarea
					{...default_props}
					className={twMerge(extra_class.input)}
					style={{ maxHeight: `${maxHeight}px`, minHeight: `${minHeight}px` }}
					ref={hydrateRef}
					// rows={56}
				></textarea>

				{(typeof error != "boolean" && error) || (typeof success != "boolean" && success) ? (
					<div className={`text-xs ${error ? "text-danger" : success ? "text-success" : null}`}>{error || success}</div>
				) : null}
			</div>
		);
	})
);

export default Textarea;

Textarea.displayName = "Textarea";

Textarea.propTypes = {
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
	maxLength: PropTypes.number,
	/*minLength accept number  */
	minLength: PropTypes.string,

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
