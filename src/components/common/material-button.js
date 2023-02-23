import React, { memo, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import Spinner from './spinner';

const MaterialButton = (props, ref) => {
    const default_props = {
        id: props.id,
        style: props.style,
        disabled: props.disabled || props.loader || false,
    };

    const {
        icon_right,
        icon_left,
        icon_button,
        className,
        small,
        large,
        medium = true,
        block,
        contained = true,
        text,
        outlined,
        loader = false,
        disabled = default_props.disabled,
        children,
        label = '',
        onClick,
    } = props;

    // Apply the styling on the basis of the props
    let extra_class =
        'h-8 bg-primary w-36 px-3 cursor-pointer rounded-lg text-white';

    if (small) {
        extra_class += ' w-28 px-1';
    } else if (large) {
        extra_class += ' w-44 h-12 text-lg font-medium';
    }

    if (text) {
        extra_class += ` bg-transparent text-blaCK`;
    } else if (outlined) {
        extra_class += ` bg-transparent border border-black text-black`;
    }

    if (loader) {
        extra_class +=
            ' cursor-wait opacity-50 hover:opacity-50 active:opacity-50';
    }

    if (block) {
        extra_class += ' w-full';
    }

    if (disabled && !loader) {
        extra_class += ` cursor-not-allowed opacity-50 hover:opacity-50 active:opacity-50`;
    }

    if (className) {
        extra_class += ' ' + className;
    }

    // end

    // ripple effect not the :active

    return (
        <>
            {!icon_button ? (
                <div
                    className={twMerge(
                        `flex flex-row items-center gap-1`,
                        `transition-all duration-300`,
                        ` hover:opacity-90 hover:shadow-xl`,
                        ` active:opacity-70`,
                        ` ${extra_class}`
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
                <div className="flex h-8 w-8 cursor-pointer flex-row items-center justify-center rounded-md bg-primary p-1 hover:opacity-90">
                    {icon_button}
                </div>
            )}
        </>
    );
};

export default memo(forwardRef(MaterialButton));
