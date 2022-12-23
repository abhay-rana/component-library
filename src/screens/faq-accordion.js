import React from "react";

import { Accordion } from "components/accordion";
import { data } from "scripts/data";

const FaqAccordion = () => {
	const clickHandler = () => {
		console.log("fires when the component opens us");
	};
	return (
		<>
			<Accordion
				defaultExpanded={2} //this is the id of the particular item not the index
				onClick={clickHandler}
				openMultiple={false}
			>
				{data.map((item) => {
					return (
						<Accordion.AccordionItem
							id={item.id}
							key={item.id}
						>
							<Accordion.Header>
								<div>{item.header}</div>
							</Accordion.Header>
							<Accordion.Content>
								<p>{item.desc}</p>
							</Accordion.Content>
						</Accordion.AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
};

export default FaqAccordion;
