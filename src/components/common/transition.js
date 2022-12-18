import React, { useEffect, useState } from "react";

const Transition = ({ show, children }) => {
	const [should_render, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	return should_render ? (
		<div
			className={`${show ? "fade-in-animation" : "custom_fade-out-animation"}`}
			onAnimationEnd={onAnimationEnd}
		>
			{children}
		</div>
	) : null;
};

export default Transition;
