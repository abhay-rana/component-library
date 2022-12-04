import React, { memo } from "react";
import { useAccordion } from ".";

const Header = ({ children, id }) => {
	const { get_id, setId, onClick } = useAccordion();

	const setAccordionId = (id) => {
		onClick();
		setId(id);
	};
	return (
		<>
			<div className="flex justify-between ">
				<div>{children}</div>
				<button onClick={() => setAccordionId(id)}>{get_id.includes(id) ? "close" : "Open"}</button>
			</div>
		</>
	);
};

export default memo(Header);
