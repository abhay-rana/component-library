import React, { memo, forwardRef } from "react";

const InputPlain = memo(
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

		const { className, error, success, small, large, children, label, stacked, no_gap, light, note, labelStyle, filled, iconTrailing, floatingLabel, iconLeading } = props;

		return (
			<>
				<div className="relative my-6">
					<input
						{...default_props}
						placeholder="your name"
						className="peer relative h-10 w-full rounded border border-slate-200 px-4 pl-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
					/>
					<label
						htmlFor="id-11"
						className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-10 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:left-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
					>
						{label}
					</label>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute top-2.5 left-4 h-5 w-5 stroke-slate-400 peer-disabled:cursor-not-allowed"
						fill="none"
						aria-hidden="true"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="1.5"
						aria-labelledby="title-3 description-3"
						role="graphics-symbol"
					>
						<title id="title-3">Check mark icon</title>
						<desc id="description-3">icon description here</desc>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>
					<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
						<span>Text field with helper text</span>
						<span className="text-slate-500">1/10</span>
					</small>
				</div>
			</>
		);
	})
);

export const InputPlainLarge = memo(
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
		return (
			<>
				<div class="mb-10 h-24">
					<div class="relative my-6">
						<input
							id="id-l14"
							type="password"
							value="123456"
							name="id-l14"
							placeholder="your password"
							class="peer relative h-12 w-full border-b border-slate-200 px-4 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-amber-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							for="id-l14"
							class="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
						>
							Your password
						</label>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="absolute top-2.5 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="1.5"
							aria-labelledby="title-6 description-6"
							role="graphics-symbol"
						>
							<title id="title-6">Check mark icon</title>
							<desc id="description-6">Icon description here</desc>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
							/>
						</svg>
						<small class="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
							<span>Text field with helper text</span>
							<span class="text-slate-500">1/10</span>
						</small>
					</div>
				</div>
			</>
		);
	})
);

export default InputPlain;
