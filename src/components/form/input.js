import React, { forwardRef, memo, useEffect, useRef } from "react";
import { ReactComponent as Error } from "assets/svg/cross.svg";

const Suffix = memo(({ children, className, onClick }) => {
	return (
		<>
			<div
				className={className}
				onClick={onClick}
			>
				{children}
			</div>
		</>
	);
});

const Prefix = memo(({ children, className, onClick }) => {
	return (
		<>
			<div className={className}>{children}</div>
		</>
	);
});

const Label = memo(({ children, className, onClick, onFocusStyle }) => {
	const label_focus_style = onFocusStyle.split().map((item) => {
		return (item = `peer-focus:${item}`);
	});
	console.log(label_focus_style);

	return (
		<>
			<label className={`${className} inline-block ${label_focus_style}`}>{children}</label>
		</>
	);
});

const Input = memo(
	forwardRef(
		(
			{
				label,
				name,
				type,
				value,
				child,
				suffix,
				prefix,
				topHeight = 40,
				floatingLabel = true,
				onErrorClick = () => {},
				onFocusStyle = "",
				className = "",
				placeholder,
				onFocus = () => {},
				required = false,
				error,
				iconImg,
				disabled = false,
				onIconClick = () => {},
				...restProps
			},
			ref
		) => {
			const input_ref = useRef();

			let extra_class = "";
			let focus_label_style = "text-primary translate-x-2 -translate-y-3 bg-white px-[4px] py-[1px] text-sm ";
			let label_className = "uppercase absolute left-0 ";

			if (!!error) extra_class += `border-1 border-red-600 `;
			if (!!disabled) className += `pointer-events-none `;
			{
				if (!!onFocusStyle) focus_label_style += onFocusStyle;

				focus_label_style = focus_label_style
					.split(" ")
					.map((item) => {
						return (item = ` peer-focus:${item} `);
					})
					.join("");
				console.log(focus_label_style);
			}
			const getRef = (el) => {
				input_ref.current = el;
				if (!!ref) ref.current = el;
			};

			const addPlaceholder = () => {
				if (!!input_ref.current) input_ref.current.placeholder = placeholder;
				onFocus();
			};

			const removePlaceholder = () => {
				if (!!input_ref.current) input_ref.current.placeholder = "";
			};

			return (
				<>
					<div
						className={`relative inline-block h-full w-full  ${className} hover:color-`}
						style={{ marginTop: `${topHeight}px` }}
					>
						{/* absolute will be respective to the parent and loose its old position */}
						<input
							ref={getRef}
							id={name}
							disabled={disabled}
							value={value}
							name={name}
							type={type}
							onFocus={addPlaceholder}
							onBlur={removePlaceholder}
							className={`peer w-full rounded-[5px] border-1 border-gray-400 p-[10px] outline-none transition-colors duration-150 focus:border-primary ${extra_class}`}
							{...restProps}
						/>
						{label ? (
							<label
								htmlFor={name}
								className={`${label_className} transition:all ease rounded-md  p-[10px] duration-300  ${focus_label_style} ${error ? "text-red-400" : ""} ${
									value ? "translate-x-2 -translate-y-3 bg-white px-3 py-0 text-sm text-primary" : ""
								} `}
							>
								{label}
								{required ? <span className="absolute text-red-600 ">*</span> : null}
							</label>
						) : null}
						{error ? (
							<>
								<p className="text-red-600">{error}</p>
								<div
									className="absolute right-0 top-1 cursor-pointer p-[10px] hover:scale-125"
									onClick={onErrorClick}
								>
									{!iconImg ? (
										<Error
											fill="red"
											className="h-4 w-4"
										/>
									) : null}
								</div>
							</>
						) : null}
						{!!iconImg ? (
							<div
								className="absolute right-0 top-1 cursor-pointer p-[3px] hover:scale-125"
								onClick={onIconClick}
							>
								{iconImg}
							</div>
						) : null}
						{suffix}
						{prefix}
					</div>
				</>
			);
		}
	)
);

Input.Suffix = Suffix;
Input.Prefix = Prefix;
Input.Label = Label;
Input.displayName = "Input";

export default Input;
