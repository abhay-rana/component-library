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
    offset = 10,
    id,
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
                className="border border-pink-600 flex items-center justify-center"
            >
                <div>{props.text}</div>
            </div>
        </>
    );
};

const _renderTooltipAtPosition = (id, position, offset, setPosition) => {
    // const position = [];
    let tooltip_render_coord = {};
    const trigger_comp_coordinates = JSON.parse(
        JSON.stringify(document.getElementById(id).getBoundingClientRect())
    );
    const tooltip_comp_coordinated = document
        .getElementById('tooltip-portals')
        .getBoundingClientRect();

    console.log({ trigger_comp_coordinates });
    console.log({ tooltip_comp_coordinated });

    if (position === 'top') {
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
    } else if (position === 'right') {
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
    } else if (position === 'left') {
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
    } else if (position === 'bottom') {
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

    // setPosition({
    //     ...trigger_comp_coordinates,
    //     tooltip_height: tooltip_comp_coordinated.height,
    // });
    setPosition(tooltip_render_coord);
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
