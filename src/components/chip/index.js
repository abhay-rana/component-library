import React, { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const Chip = ({
    label,
    small,
    large = false,
    primary,
    secondary,
    warning,
    error,
    icon_left,
    gap,
    icon_right,
    iconOnClick,
    onClick,
    className = '',
    outlined = false,
    ...props
}) => {
    // check the left or right icon is present or not.
    const icon = !!(icon_left || icon_right);

    const extra_class = {
        common: ' px-6 py-1 flex flex-row bg-slate-200 rounded-full cursor-default items-center',
        icon: ' h-3.5 w-4 relative z-100',
    };

    if (outlined) {
        extra_class.common += ' border border-black bg-transparent';
    }

    if (small) {
        extra_class.common += ` px-2 py-1`;
    }

    if (large) {
        extra_class.common += ` px-6 py-3`;
    }

    if (primary) {
        extra_class.common += ` bg-primary`;
        if (outlined) {
            extra_class.common +=
                ' border border-primary text-primary bg-transparent';
        }
    }

    if (warning) {
        extra_class.common += ` bg-warning`;
        if (outlined) {
            extra_class.common +=
                ' border border-warning text-warning bg-transparent';
        }
    }

    if (error) {
        extra_class.common += ` bg-danger`;
        if (outlined) {
            extra_class.common +=
                ' border border-danger text-danger bg-transparent';
        }
    }

    if (secondary) {
        extra_class.common += ` bg-secondary`;
        if (outlined) {
            extra_class.common +=
                ' border border-secondary text-secondary bg-transparent';
        }
    }

    if (icon) {
        extra_class.common += ` px-5 gap-1`;
        if (small) extra_class.icon += ' ';
        if (large) extra_class.icon += ` `;
    }

    if (onClick) {
        extra_class.common += ` cursor-pointer relative active:-top-1 active:shadow-md `;
    }

    if (className) {
        extra_class.common += ' ' + className;
    }

    const handleIconClick = (event) => {
        iconOnClick();
        event.stopPropagation();
    };

    return (
        <>
            <div
                className={twMerge(extra_class.common)}
                style={{ gap: gap }}
                onClick={onClick}
            >
                {icon_left ? (
                    <div className={extra_class.icon} onClick={handleIconClick}>
                        {icon_left}
                    </div>
                ) : null}
                {label ? <p>{label}</p> : null}
                {icon_right ? (
                    <div className={extra_class.icon} onClick={handleIconClick}>
                        {icon_right}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default memo(Chip);
