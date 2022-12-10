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
					label="JavaScript"
					name="languages"
					value="javascript"
					// checked={first.includes("javascript")}
					onChange={run}
				/>
				<Checkbox
					label="Rust"
					name="rust"
					value="rust"
					// checked={first.includes("javascript")}
					onChange={run}
				/>
			</div>
		</>
	);
};

export default CheckboxTest;
