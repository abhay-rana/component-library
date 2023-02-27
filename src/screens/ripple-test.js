import React from 'react';

import MaterialButton from 'components/common/material-button';
import { AcademicCapIcon, BellAlertIcon } from '@heroicons/react/24/solid';

const RippleTest = () => {
    return (
        <>
            <div className="flex h-screen w-full items-start gap-5 p-6">
                <MaterialButton className="">MaterialButton</MaterialButton>
                <MaterialButton
                    // ref={reference}
                    icon_left={<BellAlertIcon className="" />}
                    icon_right={<AcademicCapIcon />}
                    loader
                    label="loader"
                    className="bg-red-400"
                    large
                    onClick={() => console.log('abhay')}
                    // disabled
                />
                <MaterialButton
                    // ref={reference}
                    icon_left={<BellAlertIcon className="" />}
                    icon_right={<AcademicCapIcon />}
                    // loader
                    label="disabled"
                    className="bg-red-400"
                    large
                    onClick={() => console.log('abhay')}
                    disabled
                />

                <MaterialButton
                    // ref={reference}
                    // icon_left={<BellAlertIcon className="" />}
                    // icon_right={<AcademicCapIcon />}
                    // loader
                    // label="data"
                    className="bg-red-400"
                    // large
                    onClick={() => console.log('abhay')}
                    icon_button={<AcademicCapIcon />}
                />
            </div>
        </>
    );
};

export default RippleTest;
