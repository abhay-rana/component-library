import React, { memo } from "react";

const AccordionItem = ({ children, id }) => {
	return (
		<>
			{/* passing the "id" props to the the children component by firstly making the children element clone and then add the id props to it  */}
			<div className="m-3 border-2 border-black">{React.Children.map(children, (child) => React.cloneElement(child, { id }))}</div>
		</>
	);
};

export default memo(AccordionItem);
