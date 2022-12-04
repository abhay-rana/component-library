//this index for the barrel exports of the components (very important for the code cleaning )
//but as we are using the accordion sub components as the Accordion.Header , Accordion.Content like this so we don,t need the barrel exports

import { createContext, useContext } from "react";

const accordion_context = createContext();
export const AccordionProvider = accordion_context.Provider;

export const useAccordion = () => {
	const context = useContext(accordion_context);

	// if `undefined`, throw an error
	if (context === undefined) {
		throw new Error("usePortalContextState was used outside of its Provider");
	}

	return context;
};

export { default as Accordion } from "./accordion";
