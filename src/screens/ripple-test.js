import React from "react";

import RippleEffect from "components/common/ripple-effect";

const RippleTest = () => {
	return (
		<>
			<div className="flex h-screen flex-row items-center justify-center">
				<RippleEffect id="two">Ripple Button Two</RippleEffect>
			</div>
		</>
	);
};

export default RippleTest;
