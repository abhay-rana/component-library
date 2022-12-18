import React from "react";
import { twMerge } from "tailwind-merge";

const RippleEffect = ({ type, id, className, ripple, onClick, style, children }) => {
	function createRipple(event) {
		// if clicked happened on the card element not in there child component
		//if clicked on the child component so don't propagate the event bubbling
		if (event.target === event.currentTarget || event.target.classList.contains("custom_ripple")) {
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
	}

	return (
		<>
			<div
				type="button"
				className={twMerge("custom_btn", className)}
				onClick={createRipple}
			>
				<span className="">{children}</span>
			</div>
		</>
	);
};

export default RippleEffect;
