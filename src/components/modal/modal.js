import React, { memo, useRef } from "react";

import { useModalState, useModalUpdater } from "provider/portal-provider";

import ReactPortal from "components/modal/react-portal";
import Transition from "components/common/transition";

const Modal = ({ children, id, closeOnEscapeKey, closeButton, onClose, clickOutsideClose = false, scrollLock = true }) => {
	const { modal } = useModalState(); //portal_component is a kind of a state of the modal_id (give the current modal on the dom )
	const { toggleModal } = useModalUpdater(); //toggle the state of the modal to hide and show
	const modal_ref = useRef({}); //get the dom element of the modal

	const handleClose = () => {
		// Unset Background Scrolling to use when SideDrawer/Modal is closed

		if (scrollLock) document.body.style.overflow = "unset";
		console.log(modal_ref.current);
		toggleModal.hide(id);
	};

	// if the modal id not present than don't render anything
	// if (!modal[id]) return null;

	return (
		<React.Fragment>
			<Transition
				is_show={!!modal[id]}
				on_mount="custom_fade-in-animation"
				on_unmount="custom_fade-out-animation"
			>
				<ReactPortal
					wrapperId={id}
					closeOnEscapeKey={closeOnEscapeKey}
					handleClose={handleClose}
					onClose={onClose}
					clickOutsideClose={clickOutsideClose}
					scrollLock={scrollLock}
					ref={modal_ref}
				>
					<div
						className="fixed top-0 left-0 right-0 bottom-0 flex h-screen w-screen flex-row items-center justify-center"
						id={id}
					>
						<div className="relative flex flex-row border border-black bg-white p-2">
							{children}
							{closeButton ? (
								<button
									onClick={handleClose}
									className="self-start border border-red-400"
								>
									X
								</button>
							) : null}
						</div>
					</div>
				</ReactPortal>
			</Transition>
		</React.Fragment>
	);
};

export default memo(Modal);
