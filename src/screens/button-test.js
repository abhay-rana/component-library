import React from "react";

import Button, { IconButton } from "components/common/button";
import { ReactComponent as Download } from "assets/svg/download.svg";

const ButtonTest = () => {
	return (
		<>
			<div className="flex h-full flex-col gap-y-4">
				<header>
					<h1 className="p-2 text-center text-lg">Button Test</h1>
				</header>
				<div className="flex grow flex-col gap-y-10 border border-black">
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center border border-red-100	">Basic</div>
						<div className="flex grow flex-row flex-wrap border border-blue-300">
							<div>
								<Button primary>primary</Button>
							</div>
							<div>
								<Button warning>warning</Button>
							</div>
							<div>
								<Button success>success</Button>
							</div>
							<div>
								<Button danger>danger</Button>
							</div>
							<div>
								<Button border>border</Button>
							</div>
							<div>
								<Button
									noUpperCase
									border
								>
									small case
								</Button>
							</div>
							<div>
								<Button
									small
									border
								>
									small size
								</Button>
							</div>
							<div>
								<Button
									micro
									border
								>
									micro size
								</Button>
							</div>
							<div>
								<Button
									large
									border
								>
									large size
								</Button>
							</div>
							<div>
								<Button disabled>disabled</Button>
							</div>
							<div>
								<Button
									link
									className="border border-black"
								>
									link
								</Button>
							</div>
							<div>
								<Button
									link
									tooltip="this is tooltip"
								>
									toolTip
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center border border-red-100	">Advance</div>
						<div className="flex grow flex-row flex-wrap gap-x-4 border border-blue-300">
							<div className="flex flex-row">
								<Button primary>
									<p>hello Icon</p>
									<Download
										className="ml-4"
										width={12}
										fill={"red"}
									/>
								</Button>
							</div>
							<div className="flex flex-row">
								<Button
									primary
									loader
									noUpperCase
								>
									<p>loader and icon</p>
									<Download
										className="ml-4 mr-2"
										width={12}
										fill={"red"}
									/>
								</Button>
							</div>
							<div className="flex flex-row">
								<Button
									success
									loader
									className="w-52"
								>
									<p>loader</p>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center border border-red-100	">Block base button</div>
						<div className="flex grow flex-row flex-wrap gap-x-4 border border-blue-300">
							<div className="flex w-56 flex-row border border-black">
								<Button
									primary
									block
									tooltip={"covers the full width of the parent"}
								>
									<p>block</p>
									<Download
										className="ml-4"
										width={12}
										fill={"red"}
									/>
								</Button>
							</div>
						</div>
					</div>
					<div className="flex flex-row">
						<div className="flex basis-24 items-center justify-center border border-red-100	">Icon buttons</div>
						<div className="flex h-10 grow flex-row flex-wrap gap-x-4 border border-blue-300">
							<div className="h-full w-10 rounded-full">
								<IconButton onClick={() => console.log("abhay")}>
									<Download
										width={18}
										fill={"red"}
										onClick={() => console.log("children is clicked")}
									/>
								</IconButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ButtonTest;
