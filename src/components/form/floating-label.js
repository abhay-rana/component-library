import { forwardRef, memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "../../styles/input.css";

const FloatingLabel = memo(
	forwardRef((props, ref) => {
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
		const { className, error, success, small, large, children, label, stacked, no_gap, light, note, labelStyle, filled, iconTrailing, floatingLabel, iconLeading } = {
			...props,
		};

		const input_ref = useRef();
		const active = useRef(false);

		if (!!default_props.value && default_props.value.length > 0) active.current = true;
		console.log(active.current);

		let extraClass = {};
		extraClass.input = "w-full z-0 box-border text-gray-dark focus:border-primary focus:outline-none placeholder-gray-light hover:border-primary peer bg-transparent rounded-md";
		if (small) {
			extraClass.input += stacked ? " h-7 text-base" : " h-7 px-2 text-base";
		} else if (large) {
			extraClass.input += stacked ? " h-10" : " h-10 px-2";
		} else {
			extraClass.input += stacked ? " h-8 text-base" : " h-8 px-2 text-base";
		}

		if (stacked) {
			extraClass.input += " border-b bg-transparent ";
		} else {
			extraClass.input += " border";
		}

		if (filled) {
			extraClass.label += " px-2 text-black pt-2 ";
			extraClass.input += " px-2 placeholder:text-black/50 bg-transparent ";
			extraClass.note += " px-2 ";
			extraClass.error += "px-2";
			extraClass.filled += " bg-[#00000008] hover:bg-[#00000014] focus:bg-[#00000014] rounded-md ";
		}

		if (!!active.current) {
			extraClass.floatingLabel = floatingLabel
				.split(" ")
				.map((item) => {
					return (item = ` peer-focus:${item} `);
				})
				.join("");
			console.log(extraClass.floatingLabel);
			extraClass.floatingLabel += ` transition:all ease-in duration-300 `;
			extraClass.label += ` absolute peer-placeholder-shown:top-[3px] text-base left-0 peer-placeholder-shown:text-yellow-400 `;
		} else {
			extraClass.floatingLabel += ` `;
			extraClass.label += ` absolute peer-placeholder-shown:top-[3px] peer-placeholder-shown:text-base peer-placeholder-shown:left-0 text-red-400 peer-placeholder-shown:text-blue-400 `;
		}

		if (light) {
			extraClass.input += " text-white placeholder-gray-md ";
		}

		const showError = (typeof error != "boolean" && error) || (typeof success != "boolean" && success);

		if (showError) {
			extraClass.input += " border-danger";
		} else if (success) {
			extraClass.input += " border-success";
		} else {
			extraClass.input += " border-gray-light";
		}

		if (className) {
			extraClass.input += ` ${className}`;
		}

		if (iconLeading) {
			extraClass.input += ` pl-6 `;
			extraClass.label += " ml-6 ";
		}

		const hydrateRef = (el) => {
			input_ref.current = el;
			if (!!ref) ref.current = el;
		};
		console.log(extraClass);
		return (
			<div className="group">
				<div className={`${extraClass.filled} relative`}>
					<input
						{...default_props}
						className={extraClass.input}
						ref={hydrateRef}
						placeholder="abhay"
					/>
					{children}
					{label ? (
						<label
							htmlFor={default_props.id}
							className={`text-md block font-normal ${showError ? "text-danger" : ""} group-hover:text-primary ${extraClass.label} ${extraClass.floatingLabel} `}
						>
							{label}
						</label>
					) : null}

					{!!iconTrailing ? <div className="absolute right-2 bottom-2">{iconTrailing}</div> : null}
					{!!iconLeading ? <div className="absolute bottom-2 left-2 z-0">{iconLeading}</div> : null}
				</div>
				{error || note ? (
					<div className="h-6">
						{showError ? (
							<div className={`text-xs ${error ? "text-danger" : success ? "text-success" : null}`}>{error || success}</div>
						) : note ? (
							<div className={`mt-[2px] text-xs text-gray-medium ${extraClass.note}`}>{note}</div>
						) : null}
					</div>
				) : null}
			</div>
		);
	})
);

FloatingLabel.displayName = "AbhayInput";
export default FloatingLabel;
FloatingLabel.propTypes = {
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
