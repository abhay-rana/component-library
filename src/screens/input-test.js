import React, { useState } from "react";

import Input from "components/form/input";
import AnupInput from "components/form/input-anup";
import AbhayInput from "components/form/input-new";

import { ReactComponent as Cross } from "assets/svg/cross.svg";
import { ReactComponent as Download } from "assets/svg/download.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import FloatingLabel from "components/form/floating-label";
import InputPlain, { InputPlainLarge } from "components/form/wind-ui";
import MyInput from "components/form/my-input";

const CustomInput = () => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState("This is error text");

	return (
		<>
			<div className="flex flex-col">
				<div className="m-4 w-[300px] ">
					<MyInput
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="text"
						autoComplete="off"
						label="Username"
						base
						description="enter username"
						prefix={
							<Download
								className="h-4 w-6"
								fill="red"
							/>
						}
						iconSuffix={
							<Cross
								className="h-4 w-6"
								fill="black"
							/>
						}
					/>
				</div>

				<div className="m-4 w-[300px]">
					<MyInput
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="password"
						placeholder="text"
						autoComplete="off"
						label="Username"
						description="enter password"
						large
						prefix={
							<Download
								className="h-4 w-6"
								fill="red"
							/>
						}
						iconSuffix={
							<Cross
								className="h-4 w-6"
								fill="black"
							/>
						}
					/>
				</div>
				<div className="m-4 w-[300px]">
					<MyInput
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="text"
						autoComplete="off"
						className="pr-16"
						label="Username"
						description="enter password"
						large
						prefix={
							<Download
								className="h-4 w-6"
								fill="red"
							/>
						}
						suffix={
							<div className=" flex flex-1 border border-black">
								<div className="absolute -bottom-0.5 right-7   text-lg">Ton</div>
								<div className="absolute bottom-1 -right-0">
									<Cross
										className="h-4 w-6"
										fill="black"
									/>
								</div>
							</div>
						}
					/>
				</div>
				<div className="m-4 mt-6 w-[300px]">
					<MyInput
						name="username"
						value={username}
						error={error}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="text"
						autoComplete="off"
						className="pr-16"
						label="Username"
						onFocus={() => setError("")}
						description="enter password"
						large
						prefix={
							<Download
								className="h-4 w-6"
								fill="red"
							/>
						}
						suffix={
							<div className=" flex flex-1 border border-black">
								<div className="absolute -bottom-0.5 right-7   text-lg">Ton</div>
								<div className="absolute bottom-1 -right-0">
									<Cross
										className="h-4 w-6"
										fill="black"
									/>
								</div>
							</div>
						}
					/>
				</div>
				<div className="m-4 mt-6 w-[300px]">
					<MyInput
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						error={error}
						placeholder="text"
						autoComplete="off"
						className="pr-16"
						label="Username"
						onFocus={() => setError("")}
						description="enter password"
						large
						prefix={
							<Download
								className="h-4 w-6"
								fill="red"
							/>
						}
						stacked
						suffix={
							<div className=" flex flex-1 border border-black">
								<div className="absolute -bottom-0.5 right-7   text-lg">Ton</div>
								<div className="absolute bottom-1 -right-0">
									<Cross
										className="h-4 w-6"
										fill="black"
									/>
								</div>
							</div>
						}
					/>
				</div>
				<div className="m-4 mt-6 w-[300px]">
					<MyInput
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="text"
						className="pr-16"
						label="Username"
						onFocus={() => setError("")}
						description="enter password"
						large
						wordCount
						required
						maxLength={8}
					/>
				</div>
				{/* prefix text */}
				<div className="m-4 mt-6 w-[300px]">
					<MyInput
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="text"
						className="pr-16"
						label="Username"
						onFocus={() => setError("")}
						description="enter password"
						large
						wordCount
						required
						prefix={
							<div className="relative -top-2">
								<p className="text-lg text-slate-700">kg</p>
							</div>
						}
						maxLength={8}
					/>
				</div>
			</div>
		</>
	);
};

export default CustomInput;
