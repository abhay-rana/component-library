import React, { useState } from "react";

import Tooltip from "components/tooltip/tooltip";

const TooltipTest = () => {
	const [opened, setOpened] = useState(false);
	return (
		<div className="h-full border-2 border-red-600">
			<Tooltip
				// on="hover" default
				// on="click"
				// customTooltip={<div>Hello this is custom component</div>}
				color="red"
				className={""}
				opened={opened}
				text="hello this is tooltip text on hover"
				position="left"
				openDelay={200}
				closeDelay={400}
			>
				<div className="inline-block border border-black">hello this is tooltip</div>
			</Tooltip>
		</div>
	);
};

export default TooltipTest;
