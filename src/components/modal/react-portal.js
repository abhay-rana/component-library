import { useState, useLayoutEffect, useEffect, forwardRef } from "react";
import { createPortal } from "react-dom";

//create the node-element and append to the body as the sibling of the "root" node
function createWrapperAndAppendToBody(wrapperId) {
	const wrapperElement = document.createElement("div");
	wrapperElement.setAttribute("id", wrapperId);
	document.body.appendChild(wrapperElement);
	return wrapperElement;
}

const ReactPortal = ({ children, wrapperId = "react-portal-wrapper", closeOnEscapeKey, handleClose = () => {}, onClose, clickOutsideClose, scrollLock }, ref) => {
	const [wrapperElement, setWrapperElement] = useState(null);

	//disable the background scrolling of the modal
	useEffect(() => {
		// Disables Background Scrolling whilst the SideDrawer/Modal is open
		if (typeof window != "undefined" && window.document && scrollLock) {
			document.body.style.overflow = "hidden";
		}
		return () => {
			// // Unsets Background Scrolling to use when SideDrawer/Modal is closed
			// if (scrollLock) document.body.style.overflow = "unset";
		};
	}, []);

	//closing of the modal on the outside click
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (wrapperElement.contains(e.target)) {
				console.log("clicks inside");
			} else {
				console.log("click outside");
				if (!!clickOutsideClose) handleClose();
			}
		};
		if (!!wrapperElement) document.addEventListener("click", handleClickOutside, true);
		//by setting the click-Event listener as a "true" so means it capture the click event on the document on the capture phase only
		//otherwise it will be run that event in the bubbling phase and in the bubbling phase it will work run this function which we dont want to run this initially at the time of click it will be fired only after the successfully mounting of the modal
		//by default its value is "false"
		return () => {
			if (!!wrapperElement) document.removeEventListener("click", handleClickOutside, true);
			console.log("wrapper element delete", wrapperElement);
		};
	}, [wrapperElement]);

	//closing of the modal on the "escape button"
	useEffect(() => {
		let closeOnEscape;
		if (!!closeOnEscapeKey) {
			closeOnEscape = (e) => (e.key === "Escape" ? handleClose() : null);
			document.body.addEventListener("keydown", closeOnEscape);
		}
		return () => {
			if (!!closeOnEscapeKey) document.body.removeEventListener("keydown", closeOnEscape);
		};
	}, []);

	//after the first render with the null of the element create and append the element in the setState then run the createPortal(children,wrapperElement)
	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId);
		let systemCreated = false;
		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			systemCreated = true;
			element = createWrapperAndAppendToBody(wrapperId);
		}
		setWrapperElement(element);
		ref.current["modal_element"] = element;

		return () => {
			// delete the programmatically created element
			ref.current.modal_element.addEventListener("animationend", () => {
				console.log("animation is ended so delete the node now from the node");
				if (systemCreated && element.parentNode) {
					element.parentNode.removeChild(element);
				}
			});
		};
	}, [wrapperId]);

	//run the onClose function if the user passed this prop on the unmounting
	useEffect(() => {
		//this return function fires at the very end of the unmounting
		return () => {
			if (typeof onClose === "function") onClose(); //on unmounting run this function if a user specified
		};
	}, []);

	// wrapperElement state will be null on very first render.
	if (wrapperElement === null) return null;

	return createPortal(children, wrapperElement);
};
export default forwardRef(ReactPortal);
