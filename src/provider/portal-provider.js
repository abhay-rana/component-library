import { createContext, useContext, useState, useMemo } from "react";

// create contexts
const PortalContextState = createContext();
const PortalContextUpdater = createContext();

// context consumer hook
export const useModalState = () => {
	// get the context
	const context = useContext(PortalContextState);

	// if `undefined`, throw an error
	if (context === undefined) {
		throw new Error("usePortalContextState was used outside of its Provider");
	}

	return { modal: context };
};

// context consumer hook
export const useModalUpdater = () => {
	// get the context
	const context = useContext(PortalContextUpdater);

	// if `undefined`, throw an error
	if (context === undefined) {
		throw new Error("usePortalContextUpdater was used outside of its Provider");
	}

	return { toggleModal: context };
};

const ModalProvider = ({ children }) => {
	const [portal_components, setPortalComponents] = useState({});

	const portalModal = useMemo(
		() => ({
			hide: (id) => setPortalComponents((prev_state) => ({ ...prev_state, [id]: false })),
			show: (id) => setPortalComponents((prev_state) => ({ ...prev_state, [id]: true })),
		}),
		[]
	); //memoized object so that on every change in the state the function wills not re-renders themselves

	return (
		<PortalContextState.Provider value={portal_components}>
			<PortalContextUpdater.Provider value={portalModal}>{children}</PortalContextUpdater.Provider>
		</PortalContextState.Provider>
	);
};

//Separate state and state setters
export default ModalProvider;
