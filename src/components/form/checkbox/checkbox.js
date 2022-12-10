import React, { useRef, memo } from "react";

import { ReactComponent as Tick } from "assets/svg/tick-svg.svg";

const Checkbox = (props) => {
	const default_props = {
		name: props.name,
		id: props.id || props.name,
		checked: props.checked,
		value: props.value,
		onChange: props.onChange,
		type: "checkbox",
		disabled: props.disabled,
	};
	const { className, label, disabled } = props;

	const checkbox_ref = useRef();

	const extra_class = {
		events: "",
	};

	if (disabled) {
		extra_class.events = `pointer-events-none `;
		extra_class.label = `opacity-75 `;
	}

	const changeInput = () => {
		checkbox_ref.current.click();
		//this fires the onChange of the input field via the ref
		//click is the method of the native html dom api and onClick is the method of the React.createElement("input")
	};

	return (
		<div className={`${extra_class.events} relative flex flex-row  border border-black`}>
			<input
				{...default_props}
				className="peer ml-6 cursor-pointer appearance-none"
				ref={checkbox_ref}
			/>
			<span
				onClick={changeInput}
				className="absolute top-1.5 left-0 z-50 inline-block h-[13px] w-[13px] cursor-pointer border border-black transition-colors duration-200 ease-in-out peer-checked:border-blue-600 peer-disabled:border-blue-300"
			></span>
			<div className="invisible absolute top-2 left-[1px] h-2 w-2 opacity-0 transition-all duration-200 ease-in-out peer-checked:visible peer-checked:opacity-100">
				<Tick fill="black" />
			</div>
			<label
				htmlFor={default_props.id}
				className={`cursor-pointer ${extra_class.label}`}
			>
				{label}
			</label>
		</div>
	);
};

export default memo(Checkbox);
