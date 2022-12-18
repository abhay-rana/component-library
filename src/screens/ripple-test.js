import React from "react";

import RippleEffect from "components/common/ripple-effect";

const RippleTest = () => {
	return (
		<>
			<div className="flex h-screen flex-row items-center justify-center">
				<RippleEffect id="two">
					<p
						className={"relative z-10"}
						onClick={() => console.log("para is clicked")}
					>
						Ripple Effect Two
					</p>
					<button
						className={"relative z-50"}
						onClick={() => console.log("button is clicked")}
					>
						this is button
					</button>
				</RippleEffect>
			</div>
		</>
	);
};

export default RippleTest;
