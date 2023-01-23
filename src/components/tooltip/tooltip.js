import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
/* 
manages where to render the position of the tooltip
check the position is available or not before the rendering of the tooltip
close the tooltip if opened by the onClick by the click outside of the tooltip except on the tooltip
*/

/* 
const trigger_comp=get the space and position acquired by the trigger component 
const tooltip_comp=get the space acquired by the tooltip component it can be custom-tooltip or default-tooltip component 
if(trigger_comp<tooltip_comp)  render the tooltip on the basis on the preferences (top,right,bottom,left)
else render the tooltip on the basis of the component position provided by the user 
 */

const Tooltip = memo(({ children, ...props }) => {
	const [open_tooltip, setOpenTooltip] = useState(false);

	const onMouseHoverComponent = (state) => {
		if (state === "enter_hover") return setOpenTooltip(true);
		setOpenTooltip(false);
	};

	const selectComponent = () => (!!props.customTooltip ? <CustomTooltip {...props} /> : <DefaultTooltip {...props} />);

	return (
		<>
			<div
				className="relative w-full border-1 border-red-700"
				onMouseEnter={() => onMouseHoverComponent("enter_hover")}
				onMouseLeave={() => onMouseHoverComponent("leave_hover")}
			>
				{React.Children.map(children, (child) => React.cloneElement(child, { id: "trigger_tooltip" }))}

				{/* renders the createTooltip on the hovering of the main component div and you can delete this element also on the onMouseLeave */}
				{open_tooltip ? <CreateTooltip children={selectComponent()} /> : null}
			</div>
		</>
	);

	//
});

const renderTooltipAtPosition = (pos) => {
	let position;
	const trigger_comp_coordinates = document.getElementById("trigger_tooltip").getBoundingClientRect();
	console.log({ trigger_comp_coordinates });
	const tooltip_comp_coordinated = document.getElementById("tooltip-portals").getBoundingClientRect();
	console.log({ tooltip_comp_coordinated });
	if (trigger_comp_coordinates.top > tooltip_comp_coordinated.height) position = "top";
	else if (window.innerWidth - trigger_comp_coordinates.right > tooltip_comp_coordinated.width) position = "right";
	else if (window.innerWidth - trigger_comp_coordinates.left > tooltip_comp_coordinated.width) position = "left";
	else if (window.innerHeight - trigger_comp_coordinates.bottom > tooltip_comp_coordinated.height) position = "bottom";
	console.log(position);
	return position;
};

// render this component as a tooltip
const DefaultTooltip = (props) => {
	useEffect(() => {
		renderTooltipAtPosition("");
	}, []);

	return (
		<>
			<div
				style={{ color: props.color }}
				className="absolute left-0 top-0" //absolute to the body element
			>
				<div className="">{props.text}</div>
			</div>
		</>
	);
};

// render this component as a custom tooltip
const CustomTooltip = ({ customTooltip }) => {
	console.log("custom tooltip");
	return (
		<>
			<div>hello custom</div>
		</>
	);
};

const CreateTooltip = ({ children, id = "tooltip-portals" }) => {
	//create the node-element and append to the body as the sibling of the "root" node
	function createWrapperAndAppendToBody(wrapperId) {
		const wrapperElement = document.createElement("div");
		wrapperElement.setAttribute("id", wrapperId);
		// wrapperElement.setAttribute("style", "position: absolute; top: 0; left: 0;");
		document.body.appendChild(wrapperElement);
		return wrapperElement;
	}

	useLayoutEffect(() => {
		console.log("create tooltip");

		return () => {
			const element = document.getElementById(id);
			if (!!element) element.parentNode.removeChild(element);
			console.log("remove tooltip");
		};
	}, []);

	return createPortal(children, createWrapperAndAppendToBody(id));
};
export default Tooltip;
