import React, { useState } from "react";

import Checkbox from "components/form/checkbox/checkbox";

const CheckboxTest = () => {
	const [first, setfirst] = useState("");
	const run = (e) => {
		console.log(e);
	};
	return (
		<>
			<div>
				<Checkbox
					label="checkbox"
					name="lang"
					value="javascript"
					onFocus={run}
					tooltip="title"
					checked //it should be true e.target.value is equal to value
				/>
			</div>
		</>
	);
};

export default CheckboxTest;
