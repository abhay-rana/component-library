import React, { memo } from "react";
import { useAccordion } from ".";

const Content = ({ children, id }) => {
	const { get_id, setId } = useAccordion();

	return (
		<>
			<div className={`${!get_id.includes(id) && "hidden"}`}>{children}</div>
		</>
	);
};

export default memo(Content);
