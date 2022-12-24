import React, { useState } from "react";

import Select from "components/select/form-select";

const SelectTest = () => {
	const [selectState, setSelectState] = useState("");
	const runThis = (e) => {
		console.log(e.target.value);
		setSelectState(e.target.value);
	};
	return (
		<>
			<div>SelectTest</div>

			<div className="h-10 w-52">
				<Select
					label="---Select Option---" //dynamic label
					required //for the asterisk sign
					value={selectState} //default value
					id="select gender"
					onChange={(e) => runThis(e)}
					// error="Error Here"
					// note="hello abhay"
					// className="text-sm text-red-400"
				>
					<Select.Option
						value={1}
						label="Abhay"
					/>
					<Select.Option
						value={2}
						label="Rana"
					/>
					<Select.Option
						value={3}
						label="Is"
					/>
					<Select.Option
						value={4}
						label="Great"
					/>
					<Select.Option value={5}>Time</Select.Option>
				</Select>
			</div>
		</>
	);
};

export default SelectTest;
