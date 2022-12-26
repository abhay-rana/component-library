import React from "react";

import Divider from "components/common/divider";

const DividerTest = () => {
	return (
		<>
			<div className="m-4 text-center">DividerTest</div>

			<div className="relative flex h-60 flex-col border border-black p-1">
				<div className="mb-4 text-center">Horizontal Lines with Text</div>

				{/*simple horizontal rule*/}
				<Divider color={"border-red-400"} />
				{/* text in the center */}
				<Divider color={"border-slate-400"}>Center</Divider>
				{/* text in center with gap */}
				<Divider
					gap={10}
					textColor={"text-primary"}
					color="border-blue-400"
				>
					Center Gap
				</Divider>
				{/* textAlign to the left without gap */}
				<Divider textAlign="left">Left</Divider>
				{/* textAlign to the left with gap */}
				<Divider
					textAlign="left"
					gap={10}
				>
					Left gap
				</Divider>
				{/* textAlign to the right without gap */}
				<Divider textAlign="right">Right</Divider>
				{/* textAlign to the right with gap */}
				<Divider
					textAlign="right"
					gap={10}
				>
					Right Gap
				</Divider>
				{/* text align to the left with marginLeft */}
				<Divider
					gap={5}
					textAlign="left"
					marginLeft={20}
					className={"border-dashed border-primary"}
				>
					Left Margin
				</Divider>
				{/* text align to the right with marginRight */}
				<Divider
					gap={5}
					textAlign="right"
					marginRight={30}
					className={"border-dashed border-primary"}
				>
					Right Margin
				</Divider>
			</div>
			<div className="relative my-10 flex h-80 flex-col border border-black p-1">
				<div className="text-center">Vertical Line with text</div>
				<div className="flex h-full flex-row border border-black">
					<div>Vertical</div>
					<Divider
						color="border-pink-300"
						vertical
					/>
					<div>Testing</div>
					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
					>
						Center
					</Divider>
					<div>Testing</div>
					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
						gap={5}
					>
						Center gap
					</Divider>
					<div>Testing</div>
					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
						textAlign="top"
					>
						Top
					</Divider>
					<div>Testing</div>
					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
						gap={10}
						textAlign="top"
					>
						Top gap
					</Divider>
					<div>Testing</div>
				</div>
				<div className="my-4 flex h-full flex-row border border-black">
					<div>Vertical</div>
					<Divider
						color="border-pink-300"
						vertical
						textAlign="bottom"
						textColor="text-blue-400"
					>
						Bottom
					</Divider>
					<div>Testing</div>
					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
						gap={10}
						textAlign={"bottom"}
					>
						Bottom Gap
					</Divider>
					<div>Testing</div>

					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
						textAlign="top"
						marginTop={20}
					>
						Top Margin
					</Divider>
					<div>Testing</div>
					<div className="ml-4">Vertical</div>
					<Divider
						color="border-pink-300"
						textColor={"text-warning"}
						vertical
						textAlign="bottom"
						marginBottom={20}
					>
						Bottom Margin
					</Divider>
					<div>Testing</div>
				</div>
			</div>
		</>
	);
};

export default DividerTest;
