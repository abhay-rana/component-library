import React, { memo, useRef } from "react";

import { useModalState, useModalUpdater } from "provider/portal-provider";

import ReactPortal from "components/modal/react-portal";
import Transition from "components/common/transition";

const Modal = ({ children, id, closeOnEscapeKey, closeButton, onClose, clickOutsideClose = false, scrollLock = true }) => {
	const { modal } = useModalState(); //portal_component is a kind of a state of the modal_id (give the current modal on the dom )
	const { toggleModal } = useModalUpdater(); //toggle the state of the modal to hide and show
	const modal_ref = useRef({}); //get the dom element of the modal

	const handleClose = () => {
		modal_ref.current.modal_element.setAttribute("class", "custom_fade-out-animation"); //add the fade-out-animation to the modal when components unmounts
		// Unsets Background Scrolling to use when SideDrawer/Modal is closed
		if (scrollLock) document.body.style.overflow = "unset";
		console.log(modal_ref.current);
		toggleModal.hide(id);
	};

	return (
		<React.Fragment>
			<Transition show={!!modal[id]}>
				{/* it will create the overlay on the full page of the viewport */}
				{/* <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/70"> */}
				<ReactPortal
					wrapperId={id}
					closeOnEscapeKey={closeOnEscapeKey}
					handleClose={handleClose}
					onClose={onClose}
					clickOutsideClose={clickOutsideClose}
					scrollLock={scrollLock}
					ref={modal_ref}
				>
					<div className="fixed top-1/2 left-1/2 right-1/2 bottom-1/2 flex flex-row items-center justify-center">
						<div className="relative">
							{children}
							<div className="absolute right-0 top-0 p-2">{closeButton ? <button onClick={handleClose}>X</button> : null}</div>
						</div>
					</div>
				</ReactPortal>
				{/* </div> */}
			</Transition>
		</React.Fragment>
	);
};

export default memo(Modal);
