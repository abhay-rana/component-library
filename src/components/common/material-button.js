import React, { memo, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

import Spinner from './spinner';
import RippleEffect from './ripple-effect';

const MaterialButton = (props, ref) => {
    const default_props = {
        id: props.id,
        style: props.style,
        disabled: props.disabled || props.loader || false,
    };

    const {
        icon_right,
        icon_left,
        icon_button = false,
        small,
        large,
        medium = true,
        block,
        className,
        warning = false,
        danger = false,
        primary = true,
        contained = true,
        text = false,
        outlined,
        loader = false,
        disabled = default_props.disabled,
        children,
        label = '',
        onClick,
    } = props;

    // Apply the styling on the basis of the props
    let extra_class = {
        dimensions: ' h-9 w-36 rounded-lg',
        normal: ' px-3 cursor-pointer text-white select-none',
    };

    let icon_btn_class = '';

    if (small) {
        extra_class.dimensions += ' w-28';
        extra_class.normal += ' px-1';
    } else if (large) {
        extra_class.dimensions += ' w-44 h-11 ';
        extra_class.normal += ` text-lg font-medium`;
    }

    if (text) {
        extra_class.normal += ` bg-transparent text-blaCK`;
    } else if (outlined) {
        extra_class.normal += `  bg-transparent text-black`;
        extra_class.dimensions += ` border-1 border-black`;
    }

    if (loader) {
        extra_class.normal +=
            ' cursor-wait opacity-50 hover:opacity-50 active:opacity-50 ';
    }

    if (block) {
        extra_class.dimensions += ' w-full';
    }

    if (disabled && !loader) {
        extra_class.normal += ` cursor-not-allowed opacity-50 hover:opacity-50 active:opacity-50 `;
    }

    if (icon_button) {
        extra_class.dimensions = ' h-8 w-8 rounded-full';
    }

    if (primary && !text && !outlined && !warning && !danger) {
        extra_class.normal += ` bg-primary`;
    } else if (warning) {
        extra_class.normal += ` bg-warning`;
    } else if (danger) {
        extra_class.normal += ` bg-danger`;
    }

    if (className) {
        extra_class.normal += ' ' + className;
        icon_btn_class += ' ' + className;
    }

    // end

    return (
        <RippleEffect
            icon_button={!!icon_button}
            {...{ loader, disabled }}
            dimension={extra_class.dimensions}
        >
            {!icon_button ? (
                <div
                    className={twMerge(
                        `flex h-full flex-row items-center gap-1`,
                        `transition-all duration-300`,
                        `hover:opacity-100 hover:shadow-xl `,
                        `${extra_class.normal}`
                    )}
                >
                    <div
                        className={twMerge(
                            `flex flex-1 flex-row items-center justify-center gap-2`,
                            `${loader || disabled ? 'pointer-events-none' : ''}`
                        )}
                        onClick={onClick}
                    >
                        {icon_left ? (
                            <div className="h-4 w-4">{icon_left}</div>
                        ) : null}
                        {children ? <div>{children}</div> : <div>{label}</div>}
                        {icon_right ? (
                            <div className="h-4 w-4">{icon_right}</div>
                        ) : null}
                    </div>
                    {loader ? <Spinner small /> : null}
                </div>
            ) : (
                <div
                    className={twMerge(
                        `flex h-8 w-8 cursor-pointer select-none flex-row items-center justify-center rounded-md p-1 hover:opacity-90`,
                        `${icon_btn_class}`
                    )}
                >
                    {icon_button}
                </div>
            )}
        </RippleEffect>
    );
};

export default memo(forwardRef(MaterialButton));

MaterialButton.propTypes = {
    /** True make loader visible  */
    loader: PropTypes.bool,
    /** True disabled button  */
    disabled: PropTypes.bool,
    /** Extra class for button  */
    className: PropTypes.string,
    /** Primary make button with main color  */
    primary: PropTypes.bool,
    /** warning make button orange type  */
    warning: PropTypes.bool,
    /** true make error type button  */
    danger: PropTypes.bool,
    block: PropTypes.bool,

    small: PropTypes.bool,
    /** True make large button default is medium  */
    large: PropTypes.bool,
    /** inline style object  */
    style: PropTypes.object,
    /** onClick accept function  */
    onClick: PropTypes.func,
    /** toolTip string type show tooltip  */
    tooltip: PropTypes.string,
    icon_right: PropTypes.element,
    icon_button: PropTypes.element,
    icon_left: PropTypes.element,
    label: PropTypes.string,
    text: PropTypes.bool,
};
