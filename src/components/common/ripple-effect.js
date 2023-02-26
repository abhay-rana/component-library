import React from 'react';
import { twMerge } from 'tailwind-merge';

const RippleEffect = ({
    type,
    id,
    className,
    ripple,
    onClick,
    style,
    children,
    icon_button = false,
    loader = false,
    disabled = false,
}) => {
    function createRipple(event) {
        if (loader || disabled) return;

        const button = event.currentTarget;

        // creating the span element directly
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);

        if (!icon_button) {
            // get the position of the click with respect to the button element
            circle.style.width = circle.style.height = `${diameter / 2}px`;
            circle.style.left = `${event.clientX - button.offsetLeft}px`;
            circle.style.top = `${event.clientY - button.offsetTop}px`;
        } else {
            //if this is icon_button so the ripple always start from the center of the element
            const client_rect = button.getBoundingClientRect();

            circle.style.height = `${client_rect.height}px`;
            circle.style.width = `${client_rect.width}px`;
            circle.style.left = `${client_rect.width / 2}px`;
            circle.style.top = `${client_rect.height / 2}px`;
        }

        //adding the ripple animation class
        circle.classList.add('custom_ripple');

        const ripple = button.getElementsByClassName('custom_ripple')[0];

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
            <div
                type="button"
                className={twMerge('custom_btn', className)}
                onClick={createRipple}
            >
                {children}
            </div>
        </>
    );
};

export default RippleEffect;
