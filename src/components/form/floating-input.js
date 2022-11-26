import React, { forwardRef, memo, useRef, useState } from "react";

import { ReactComponent as Visible } from "assets/svg/visible.svg";
import { ReactComponent as Invisible } from "assets/svg/invisible.svg";
import { twMerge } from "tailwind-merge";

const FloatingInput = memo(
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
		const { label, className, prefix, suffix, large, base = true, description, wordCount, error, stacked, maxLength, value, required, filled } = props;

		let extra_class = {
			input: " ",
			label: " ",
			prefix: " ",
			suffix: "z-1 absolute right-0 bottom-0 ",
		};
		extra_class.input =
			"w-full z-0 box-border text-gray-dark focus:border-primary focus:outline-none placeholder-gray-light hover:border-primary outline-none transition-all placeholder-transparent peer relative border-slate-400 ";

		const input_ref = useRef();
		const [show_password, setPasswordVisibility] = useState(default_props.type == "password");

		const hydrateRef = (el) => {
			input_ref.current = el;
			if (!!ref) ref.current = el;
		};

		const inputFocus = () => {
			input_ref.current.focus();
		};

		if (!!prefix) {
			extra_class.label += `peer-placeholder-shown:left-9 left-1 peer-focus:left-[6px] `;
			extra_class.input += `pl-10 `;
			if (base) extra_class.prefix += `top-3 `;
			if (large) extra_class.prefix += `!top-4 `;
		}
		if (!!suffix) {
			extra_class.label += ` `;
			extra_class.input += `pr-9  `;
			if (large) extra_class.suffix += ` `;
		}
		if (large) {
			extra_class.input += `h-12 `;
			extra_class.label += `peer-placeholder-shown:top-3  `;
		} else {
			extra_class.input += `h-10 `;
			extra_class.label += `peer-placeholder-shown:top-2  `;
		}
		if (!!error) {
			extra_class.label += `!text-danger border-danger `;
			if (stacked) {
				extra_class.input += `!text-danger border-b !border-b-danger `;
			} else {
				extra_class.input += `!text-danger border !border-danger `;
			}
		}
		if (!!stacked) {
			extra_class.input += `border-b-[1.5px] `;
		} else {
			extra_class.input += `border rounded `;
		}

		if (filled) {
			extra_class.input += `bg-gray-300 border-0 border-b-2 hover:border-b-primary pt-5 `;
			extra_class.label += `peer-focus:top-0 bg-transparent top-0`;
		}

		if (!!className) {
			extra_class.input += `${className} `;
		}

		//change the word counter on the every input of the text
		const word_counter = `${value.length - (value.match(/\n/g) || []).length}/${maxLength}`;

		return (
			<>
				<div className="relative w-full">
					<input
						{...default_props}
						ref={hydrateRef}
						type={show_password ? "password" : "text"}
						className={twMerge(`px-4  ${extra_class.input}`)}
						placeholder=" "
					/>
					<label
						onClick={inputFocus}
						htmlFor={default_props.name}
						className={twMerge(`absolute -top-2.5 left-3 bg-white px-1 text-xs text-slate-400 transition-all duration-150 ease-in
                        peer-placeholder-shown:text-base peer-hover:text-primary peer-focus:-top-2.5
                        peer-focus:left-3 peer-focus:text-xs peer-focus:text-primary ${extra_class.label}`)}
					>
						<span>{label}</span>
						{required ? <span className="text-danger"> *</span> : null}
					</label>
					{!!prefix ? (
						<div
							onClick={inputFocus}
							className={`z-1 absolute left-2.5 ${extra_class.prefix}`}
						>
							{prefix}
						</div>
					) : null}
					{!!suffix && default_props.type != "password" ? (
						<div
							onClick={inputFocus}
							className={`${extra_class.suffix}`}
						>
							{suffix}
						</div>
					) : null}

					{default_props.type == "password" ? (
						<div
							onClick={() => setPasswordVisibility(!show_password)}
							className={`absolute top-3 right-1`}
						>
							{show_password ? <Invisible className="h-5 w-7" /> : <Visible className="h-5 w-7" />}
						</div>
					) : null}
					{!error ? (
						<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition">
							<span>{description}</span>
							{wordCount ? <span className="text-slate-500">{word_counter}</span> : null}
						</small>
					) : (
						<div className="absolute w-full px-4 py-1 text-xs text-danger">{error}</div>
					)}
				</div>
			</>
		);
	})
);

export default FloatingInput;
