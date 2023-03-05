import React, { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const Skeleton = ({
    type = 'line',
    style = {},
    height,
    width = false,
    animation = true,
    ...props
}) => {
    let extra_class = {
        common: ' bg-gray-300',
        height: Number(height) > 1 ? height : '6px',
        line: ' ',
        circle: ' ',
        width: width ? width : '100%',
    };

    if (type === 'line') {
        extra_class.common += ` w-full`;
    }
    if (type === 'circle') {
        extra_class.common += ` rounded-full`;
        extra_class.width = Number(width) > 1 ? width : '40px';
        extra_class.height = Number(height) > 1 ? height : '40px';
    }
    if (type === 'square') {
        extra_class.width = Number(width) > 1 ? width : '40px';
        extra_class.height = Number(height) > 1 ? height : '40px';
    }
    if (!!style.bg_color) {
        extra_class.common += ' ' + style.bg_color;
    }

    if (animation !== false) {
        extra_class.common += ` animate-pulse`;
    }

    return (
        <>
            <div
                className={twMerge(extra_class.common)}
                style={{ height: extra_class.height, width: extra_class.width }}
            ></div>
        </>
    );
};

export default memo(Skeleton);
