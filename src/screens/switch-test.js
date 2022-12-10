import React, { useState } from "react";

import Switch from "components/form/switch/switch";

const SwitchTest = () => {
	const [toggle, setToggle] = useState(false);
	const toggleFire = (e) => {
		setToggle(e.target.checked);
	};

	return (
		<>
			<div className="w-20 border border-black">
				<Switch
					label="wifi"
					name="wifi"
					id="wifi"
					onChange={toggleFire}
					checked
					disabled
				/>
			</div>
		</>
	);
};

export default SwitchTest;
