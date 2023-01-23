import React from "react";

import Icon from "components/icons/icon";

const IconTest = () => {
	return (
		<>
			<div>IconTest</div>
			<Icon
				name="cross"
				outlined //outlined has a higher priority than the fill
				fill="yellow"
				stroke="red" //default stroke is black
				className={"w-30 h-20"}
			/>
			{/* <Icon
				name="download"
				fill={"red"}
				// outlined
				stroke="black"
			/>
			<Icon name="eye_outlined" />
			<Icon name="tick" />
			<Icon name="visible" />
			<Icon name="invisible" />
			 */}
			<Icon name="search" />
		</>
	);
};

export default IconTest;
