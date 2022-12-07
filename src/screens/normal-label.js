import React, { useState } from "react";

import Input from "components/form/input/input";

const NormalLabel = () => {
	const [state, setState] = useState("");
	const [error, setError] = useState("this is error");
	return (
		<>
			<div>
				<div className="m-4 w-[300px] ">
					<Input
						type="text"
						placeholder="Placeholder here"
						label="Username"
						value={state}
						className="h-12 rounded-md"
						labelClassName="text-black text-md mb-2"
						onChange={(e) => setState(e.target.value)}
					/>
				</div>
				{/* style the label */}
				<div className="m-4 w-[300px] ">
					<Input
						type="text"
						placeholder="Placeholder here"
						label="Username"
						value={state}
						error={error}
						className="h-12 rounded-md"
						labelClassName="text-black text-sm mb-2"
						onChange={(e) => setState(e.target.value)}
						onFocus={() => setError("")}
					/>
				</div>
				{/* stacked */}
				<div className="m-4 w-[300px] ">
					<Input
						type="text"
						label="Username"
						value={state}
						error={error}
						stacked
						placeholder="Placeholder here"
						className="pt-2"
						labelClassName="text-black text-sm relative top-1"
						onChange={(e) => setState(e.target.value)}
						onFocus={() => setError("")}
					/>
				</div>
			</div>
		</>
	);
};

export default NormalLabel;
