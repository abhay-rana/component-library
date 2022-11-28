import React, { useState } from "react";

import TextArea from "components/form/text-area";

const TextAreaTest = () => {
	const [state, setState] = useState("");
	const [error, setError] = useState("");

	return (
		<>
			<div>
				<div className="">
					<h1 className="text-center text-xl">TextArea Components</h1>
				</div>
				<div className="w-[400px] border border-black">
					<TextArea
						value={state}
						error={error}
						// minHeight={48} // minimum number of rows (enter)
						maxHeight={600} //maximum number of rows after that show the scrollbar
						maxLength={200} //you cant enter the more words than this
						wordCounter
						label="username"
						onFocus={() => setError("")}
						onChange={(e) => setState(e.target.value)}
						className="p-4"
						resize //if you want the draggable feature in vertical direction
						placeholder="textarea with the padding with the maximum height"
					/>
				</div>
				<textarea className="h-12" />
				<p></p>
			</div>
		</>
	);
};

export default TextAreaTest;
