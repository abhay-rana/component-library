import React, { memo, useCallback, useMemo, useState } from "react";

import { AccordionProvider } from "./index";

import Header from "./header";
import Content from "./content";
import AccordionItem from "./accordrion-item";
import { arrayRemove } from "../../../scripts/utils-functions";

const Accordion = memo(({ children, onClick = () => {}, defaultExpanded, openMultiple = false }) => {
	const [get_id, setExpand] = useState([defaultExpanded]);

	const setId = useCallback(
		(id) => {
			if (openMultiple === true) {
				if (get_id.includes(id)) setExpand(arrayRemove(get_id, id)); //if the id is already present them remove it
				else setExpand(get_id.concat([id])); //if the id is not present then add into the array
			} else {
				if (get_id.includes(id)) setExpand([]); //if the id is already present then set to the null
				else setExpand([id]); //if the id is not present then add into the array
			}
		},
		[get_id]
	);

	const value = useMemo(() => {
		return { get_id, setId, onClick };
	}, [get_id]);

	return (
		<>
			{/* if any of the value ={{key1,key2,key3}} changes so the useContext will re-render itself in all the components */}
			{/* children components will re-render if they use the useContext hook  */}
			<AccordionProvider value={value}>{children}</AccordionProvider>
		</>
	);
});

Accordion.Header = Header;
Accordion.Content = Content;
Accordion.AccordionItem = AccordionItem;

Accordion.displayName = "Accordion"; // now the component name is not shown as the anonymous

export default Accordion;
