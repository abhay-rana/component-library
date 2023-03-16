import React, { useState } from 'react';

import Tooltip from 'components/tooltip/tooltip';

const TooltipTest = () => {
    const [opened, setOpened] = useState(false);
    return (
        <div className="h-full border-2 border-red-600 flex justify-center items-center">
            {/* <Tooltip
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
			</Tooltip> */}
            <Tooltip className="" text="this is tooltip" position="left">
                <div className="border border-red-400 w-[200px] relative left-[-400px]">
                    Tooltip at left
                </div>
            </Tooltip>
            <Tooltip className="" text="this is tooltip" position="bottom">
                <div className="border border-red-400 w-[200px] relative top-[110px]">
                    Tooltip at top
                </div>
            </Tooltip>
            <Tooltip className="" text="this is tooltip" position="top">
                <div className="border border-red-400 w-[200px] relative top-[-150px]">
                    Tooltip at right
                </div>
            </Tooltip>
            <Tooltip className="" text="this is tooltip" position="right">
                <div className="border border-red-400 w-[200px] relative left-[350px]">
                    Tooltip at bottom
                </div>
            </Tooltip>
        </div>
    );
};

export default TooltipTest;
