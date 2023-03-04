import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

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
				className="relative w-full"
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

const _renderTooltipAtPosition = (pos, offset) => {
	const position = [];
	const trigger_comp_coordinates = document.getElementById("trigger_tooltip").getBoundingClientRect();
	const tooltip_comp_coordinated = document.getElementById("tooltip-portals").getBoundingClientRect();

	if (trigger_comp_coordinates.top > tooltip_comp_coordinated.height) position.push("top");
	if (window.innerWidth - trigger_comp_coordinates.right > tooltip_comp_coordinated.width) position.push("right");
	if (window.innerHeight - trigger_comp_coordinates.bottom > tooltip_comp_coordinated.height) position.push("bottom");
	if (tooltip_comp_coordinated.x > tooltip_comp_coordinated.width) position.push("left");

	const pos_offset = {
		top: trigger_comp_coordinates.top,
		right: trigger_comp_coordinates.right,
		left: trigger_comp_coordinates.left,
		bottom: trigger_comp_coordinates.bottom,
	};

	console.log({ trigger_comp_coordinates });
	console.log({ tooltip_comp_coordinated });

	if (position.indexOf(pos) > -1) return pos_offset[pos]; //if the position can be render from the user position
	return pos_offset[position[0]]; //if the user_position is cant be render so render from the position array
};

// render this component as a tooltip
const DefaultTooltip = ({ position, color, offset, ...props }) => {
	const [positions, setposition] = useState(0);
	useEffect(() => {
		_renderTooltipAtPosition(position, offset);
	}, []);

	return (
		<>
			<div
				id="tooltip-portals"
				className="absolute left-0 top-0" //absolute to the body element
				style={{
					textAlign: "center",
					color: color,
					position: "absolute",
					left: 0,
					// right: `${pos.right}`,
					// top: `${pos.top}`,
				}}
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

const CreateTooltip = ({ children }) => {
	return createPortal(children, document.body);
};
export default Tooltip;

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
	color: PropTypes.string,
	className: PropTypes.string,
	customTooltip: PropTypes.element,
	opened: PropTypes.bool,
	text: function (props, propsName, component) {
		if (!props["customComponent"] && typeof props[propsName] !== "string") {
			return new Error(`Please provide a text props as a string to the ${component}`);
		}
	},
	position: PropTypes.string,
	openDelay: PropTypes.number,
	closeDelay: PropTypes.number.isRequired,
};
