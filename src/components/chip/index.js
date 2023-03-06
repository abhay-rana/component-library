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
    const extra_class = {
        common: ' px-6 py-1 flex flex-row bg-slate-200 rounded-full cursor-default',
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

    if (onClick) {
        extra_class.common += ` cursor-pointer relative active:-top-1 active:shadow-md `;
    }

    if (className) {
        extra_class.common += ' ' + className;
    }

    return (
        <>
            <div
                className={twMerge(extra_class.common)}
                style={{ gap: gap }}
                onClick={onClick}
            >
                {icon_left ? (
                    <div className="relative z-100" iconOnClick={() => {}}>
                        {icon_left}
                    </div>
                ) : null}
                {label ? <p>{label}</p> : null}
                {icon_right ? (
                    <div className="relative z-100" iconOnClick={() => {}}>
                        {icon_right}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default memo(Chip);
