import React, { Suspense } from "react";
import { twMerge } from "tailwind-merge";

import { ReactComponent as Cross } from "assets/svg/cross.svg";
import { ReactComponent as download } from "assets/svg/download.svg";
import { ReactComponent as Eye } from "assets/svg/eye.svg";
import { ReactComponent as Tick } from "assets/svg/tick-svg.svg";
import { ReactComponent as Visible } from "assets/svg/visible.svg";
import { ReactComponent as Invisible } from "assets/svg/invisible.svg";
const Search = React.lazy(() => import("assets/svg/search.svg")).ReactComponent;
console.log(Search);

const icon_name = {
	cross: Cross,
	download: download,
	eye_outlined: Eye,
	tick: Tick,
	visible: Visible,
	visible: Visible,
	invisible: Invisible,
	search: Search,
};

const Icon = ({ name, className, outlined, fill, stroke = "black" }) => {
	const IconComponent = icon_name[name];

	if (outlined) fill = "transparent";

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="border border-black">
					<IconComponent
						className={twMerge("h-5 w-5", className)}
						fill={fill}
						stroke={stroke}
					/>
				</div>
			</Suspense>
		</>
	);
};

export default Icon;
