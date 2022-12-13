import { clearConfigCache } from "prettier";
import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const RippleEffect = ({ type, id, className, ripple, onClick, style, children }) => {
	const button_ref = useRef();
	const [is_ripple, setIsRipple] = useState(false);
	const [coords, setCoords] = useState({ x: -1, y: -1, dot_size_ripple: 0, hypotenuse_btn_el: 0 });

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRipple(true);
			setTimeout(() => setIsRipple(false), 1000);
		} else {
			setIsRipple(false);
		}
	}, [coords]);

	// useEffect(() => {
	// 	if (!is_ripple) setCoords({ x: -1, y: -1 });
	// }, [is_ripple]);

	const handleClick = (e) => {
		if (e.target == e.currentTarget) {
			const longest_side = Math.sqrt(Math.pow(button_ref.current.offsetWidth, 2) + Math.pow(button_ref.current.offsetHeight, 2));
			setCoords({
				x: e.clientX - e.target.offsetLeft,
				y: e.clientY - e.target.offsetTop,
				hypotenuse_btn_el: longest_side,
				dot_size_ripple: Math.ceil((longest_side * 2) / 100),
			});
			onClick && onClick(e);
		}
	};

	return (
		<>
			<button
				type="button"
				id={id}
				className={twMerge("ripple_btn ", className)}
				data-ripple={ripple}
				onClick={handleClick}
				style={style}
				ref={button_ref}
			>
				{/* show ripple animation if click on the button  */}
				{is_ripple ? (
					<span
						className="ripple"
						style={{
							left: coords.x,
							top: coords.y,
							width: `${coords.dot_size_ripple}px`,
							height: `${coords.dot_size_ripple}px`,
						}}
					/>
				) : null}
				<span className="">{children}</span>
			</button>
		</>
	);
};

export default RippleEffect;
