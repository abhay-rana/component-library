import React, { useEffect, useState } from "react";

const Transition = ({ is_show, children, on_mount, on_unmount }) => {
	const [should_render, setRender] = useState(is_show);

	useEffect(() => {
		if (is_show) setRender(true);
	}, [is_show]);

	const onAnimationEnd = () => {
		if (!is_show) setRender(false);
	};

	return should_render ? (
		<div
			className={`${is_show ? on_mount : on_unmount}`}
			onAnimationEnd={onAnimationEnd}
		>
			{children}
		</div>
	) : null;
};

export default Transition;
