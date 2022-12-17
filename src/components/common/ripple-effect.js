import React from "react";
import { twMerge } from "tailwind-merge";

const RippleEffect = ({ type, id, className, ripple, onClick, style, children }) => {
	function createRipple(event) {
		const button = event.currentTarget;

		// creating the span element directly
		const circle = document.createElement("span");
		const diameter = Math.max(button.clientWidth, button.clientHeight);

		// get the position of the click with respect to the button element
		circle.style.width = circle.style.height = `${diameter / 2}px`;
		circle.style.left = `${event.clientX - button.offsetLeft}px`;
		circle.style.top = `${event.clientY - button.offsetTop}px`;

		//adding the ripple animation class
		circle.classList.add("custom_ripple");

		const ripple = button.getElementsByClassName("custom_ripple")[0];

		//remove the span ripple is there is already there so we start the animation from the beginning
		if (ripple) {
			ripple.remove();
		}

		//append the span ripple in the DOM
		button.appendChild(circle);

		// perform the onClick callback function
		onClick && onClick(event);
	}

	return (
		<>
			<button
				type="button"
				className={twMerge("custom_btn", className)}
				onClick={createRipple}
			>
				<span className="">{children}</span>
			</button>
		</>
	);
};

export default RippleEffect;
