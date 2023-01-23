import React, { useState } from "react";

import Tooltip from "components/tooltip/tooltip";

const TooltipTest = () => {
	const [opened, setOpened] = useState(false);
	return (
		<div className="relative flex flex-col">
			<Tooltip
				// on="hover" default
				// on="click"
				// customTooltip={<div>Hello this is custom component</div>}
				color="red"
				className={"m-2 p-6 font-extrabold"}
				opened={opened}
				text="hello this is tooltip text on hover"
				position="left"
				openDelay={200}
				closeDelay={400}
			>
				<div className="m-1 block  border border-black">hello this is tooltip</div>
			</Tooltip>
		</div>
	);
};

export default TooltipTest;
