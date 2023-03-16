import React, {
    memo,
    useEffect,
    useId,
    useLayoutEffect,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Tooltip = memo(({ children, ...props }) => {
    const id = useId();
    const [open_tooltip, setOpenTooltip] = useState(false);

    const trigger_tooltip_id = `trigger_tooltip${id}`;

    const onMouseHoverComponent = (state) => {
        if (state === 'enter_hover') return setOpenTooltip(true);
        setOpenTooltip(false);
    };

    const selectComponent = () =>
        !!props.customTooltip ? (
            <CustomTooltip {...props} id={trigger_tooltip_id} />
        ) : (
            <DefaultTooltip {...props} id={trigger_tooltip_id} />
        );

    return (
        <>
            <div
                className="relative"
                onMouseEnter={() => onMouseHoverComponent('enter_hover')}
                onMouseLeave={() => onMouseHoverComponent('leave_hover')}
            >
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { id: trigger_tooltip_id })
                )}

                {/* renders the createTooltip on the hovering of the main component div and you can delete this element also on the onMouseLeave */}

                {open_tooltip ? (
                    <CreateTooltip children={selectComponent()} />
                ) : null}
            </div>
        </>
    );

    //
});

// render this component as a tooltip
const DefaultTooltip = ({
    position = 'top',
    color,
    offset = 15,
    id,
    text,
    arrow = true,
    ...props
}) => {
    const [positions, setPosition] = useState({});
    useEffect(() => {
        _renderTooltipAtPosition(id, position, offset, setPosition);
    }, []);

    return (
        <>
            <div
                id="tooltip-portals"
                style={{
                    visibility:
                        Object.keys(positions).length > 0
                            ? 'visible'
                            : 'hidden',
                    textAlign: 'center',
                    color: color,
                    position: 'absolute',
                    left: positions.left || 0,
                    top: positions.top || 0,
                }}
                className="border border-pink-600 p-1 after:left-1/2 after:w-2 after:h-2 after:bg-black after:absolute after:-bottom-1 after:rotate-45 bg-red-200"
            >
                <div>{text}</div>
            </div>
        </>
    );
};

const _renderTooltipAtPosition = (id, position, offset, setPosition) => {
    let tooltip_render_coord = {};
    const trigger_comp_coordinates = JSON.parse(
        JSON.stringify(document.getElementById(id).getBoundingClientRect())
    );
    // top && left is zero as they are initialized with zero
    const tooltip_comp_coordinated = document
        .getElementById('tooltip-portals')
        .getBoundingClientRect();
    // render the tooltip from the valid_position of the array
    const valid_render_pos = _checkTooltipPosition(
        tooltip_comp_coordinated,
        trigger_comp_coordinates,
        offset,
        position
    );
    if (valid_render_pos === 'top') {
        tooltip_render_coord = {
            left:
                trigger_comp_coordinates.left +
                trigger_comp_coordinates.width / 2 -
                tooltip_comp_coordinated.width / 2,
            top:
                trigger_comp_coordinates.top -
                trigger_comp_coordinates.height -
                offset,
        };
    } else if (valid_render_pos === 'right') {
        tooltip_render_coord = {
            left:
                trigger_comp_coordinates.left +
                trigger_comp_coordinates.width +
                offset,
            top:
                trigger_comp_coordinates.top +
                trigger_comp_coordinates.height / 2 -
                tooltip_comp_coordinated.height / 2,
        };
    } else if (valid_render_pos === 'left') {
        tooltip_render_coord = {
            left:
                trigger_comp_coordinates.left -
                tooltip_comp_coordinated.width -
                offset,
            top:
                trigger_comp_coordinates.top +
                trigger_comp_coordinates.height / 2 -
                tooltip_comp_coordinated.height / 2,
        };
    } else if (valid_render_pos === 'bottom') {
        tooltip_render_coord = {
            left:
                trigger_comp_coordinates.left +
                trigger_comp_coordinates.width / 2 -
                tooltip_comp_coordinated.width / 2,
            top:
                trigger_comp_coordinates.top +
                trigger_comp_coordinates.height +
                offset,
        };
    }

    setPosition(tooltip_render_coord);
};

const _checkTooltipPosition = (tooltip, trigger, offset, position) => {
    const valid_pos = [];
    if (tooltip.height + offset < trigger.top) {
        valid_pos.push('top');
    }
    if (
        document.documentElement.clientWidth >
        trigger.right + offset + tooltip.width
    ) {
        valid_pos.push('right');
    }
    if (trigger.left > tooltip.width + offset) {
        valid_pos.push('left');
    }
    if (
        trigger.bottom + tooltip.height + offset <
        document.documentElement.clientHeight
    ) {
        valid_pos.push('bottom');
    }
    console.log(valid_pos);
    if (!valid_pos.includes(position)) return valid_pos[0];
    else return position;
};

// render this component as a custom tooltip
const CustomTooltip = ({ customTooltip }) => {
    console.log('custom tooltip');
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

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    customTooltip: PropTypes.element,
    opened: PropTypes.bool,
    text: function (props, propsName, component) {
        if (!props['customComponent'] && typeof props[propsName] !== 'string') {
            return new Error(
                `Please provide a text props as a string to the ${component}`
            );
        }
    },
    position: PropTypes.string,
    openDelay: PropTypes.number,
    // closeDelay: PropTypes.number.isRequired,
};
