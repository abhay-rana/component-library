import React from "react";
import { twMerge } from "tailwind-merge";

export const Radio = (props) => {
	const default_props = {
		type: "radio",
		value: props.value,
		checked: props.current_value === props.value,
		id: props.checked,
		disabled: props.disabled,
		onChange: props.onChange,
	};
	const { className, label, name, disabled } = props;

	const extra_class = {
		events: "",
	};

	if (disabled) {
		extra_class.events = "pointer-events-none";
	}

	const changeValue = (data) => {
		default_props.onChange(data);
	};

	return (
		<div className={`relative flex flex-row border border-blue-600 ${extra_class.events}`}>
			<input
				{...default_props}
				id={default_props.value}
				name={name}
				className="peer ml-4 appearance-none"
				onChange={(e) => changeValue(e.target.value)}
			/>
			<span
				onClick={() => changeValue(default_props.value)}
				className="-400 absolute top-1 left-0 inline-block h-[18px] w-[18px] cursor-pointer rounded-full border border-black transition-colors duration-200 ease-in-out before:absolute before:top-0 before:left-0 before:mt-[3px] before:ml-[3px] before:h-[10px] before:w-[10px] before:rounded-full peer-checked:border-blue-600  peer-checked:before:bg-blue-600 peer-disabled:border-blue-300 peer-disabled:before:opacity-70"
			></span>
			<label
				htmlFor={default_props.value}
				className="ml-2 cursor-pointer peer-disabled:text-gray-400"
			>
				{label}
			</label>
		</div>
	);
};

const RadioGroup = ({ children, name, className, value, onChange }) => {
	//pass the "name" "value" "onChange" to the children component which is Radio Component
	return <div className={twMerge(`flex flex-col ${className}`)}>{React.Children.map(children, (child) => React.cloneElement(child, { name: name, current_value: value, onChange: onChange }))}</div>;
};

export default RadioGroup;
