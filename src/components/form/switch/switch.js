import React, { memo, useRef } from "react";
import { twMerge } from "tailwind-merge";

const Switch = (props) => {
	const default_props = {
		checked: props.checked,
		id: props.id,
		name: props.name,
		onChange: props.onChange,
		disabled: props.disabled,
		type: "checkbox",
	};
	const switch_ref = useRef();
	const { label } = props;
	const extra_class = {};

	extra_class.toggle_bg =
		"after:absolute after:top:0.5 after:left:0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300  ";

	extra_class.checked_toggle_bg = "peer-checked:after:translate-x-full ";

	if (default_props.disabled) {
		extra_class.events = "pointer-event-none ";
		extra_class.label = "text-gray-500 ";
		extra_class.disabled_toggle_bg = "peer-checked:bg-blue-400 ";
	}

	const toggleSwitch = () => {
		switch_ref.current.click();
	};

	return (
		<>
			<div className={`relative flex w-full flex-row justify-around ${extra_class.events}`}>
				<input
					{...default_props}
					className="peer absolute h-0 w-0 appearance-none"
					ref={switch_ref}
				/>
				<div
					className={twMerge(
						`h-6 w-11 rounded-full border border-black bg-slate-400 transition-colors duration-200 ease-in-out peer-checked:bg-blue-500 ${extra_class.toggle_bg} ${extra_class.checked_toggle_bg} ${extra_class.disabled_toggle_bg}`
					)}
					onClick={toggleSwitch}
				></div>
				<label
					htmlFor={default_props.id}
					className={extra_class.label}
				>
					{label}
				</label>
			</div>
		</>
	);
};

export default memo(Switch);
