import React from "react";

import RippleEffect from "components/common/ripple-effect";

const RippleTest = () => {
	return (
		<>
			<RippleEffect id="one">
				<div
					className="border border-black"
					onClick={() => console.log("abhay")}
				>
					<p>paragraph</p>
				</div>
			</RippleEffect>
			<RippleEffect id="two">Ripple Button Two</RippleEffect>
		</>
	);
};

export default RippleTest;
