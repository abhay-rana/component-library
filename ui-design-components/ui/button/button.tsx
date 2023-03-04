import React, { ReactNode } from 'react';

export type ButtonProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
    return <div className="bg-red-400 m-2">{children}</div>;
}
