import React, { useState } from "react";

import RadioGroup, { Radio } from "components/form/radio/radio";

const RadioTest = () => {
	const [value, setValue] = useState("javascript");

	const changeValue = (data) => {
		setValue(data);
	};

	return (
		<>
			<div className="border border-red-400">
				<RadioGroup
					value={value}
					onChange={(data) => changeValue(data)}
					name="programming-languages"
					className="flex flex-row gap-10"
				>
					<Radio
						label="Html"
						value="html"
					/>
					<Radio
						label="CSS"
						value="css"
					/>
					<Radio
						label="JavaScript"
						value="javascript"
						disabled
					/>
				</RadioGroup>
			</div>
		</>
	);
};

export default RadioTest;
