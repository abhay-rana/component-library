import React from 'react';

import MaterialButton from 'components/common/material-button';
import { AcademicCapIcon, BellAlertIcon } from '@heroicons/react/24/solid';
import { useLocation } from 'wouter';

const RippleTest = () => {
    const [location, setLocation] = useLocation();
    return (
        <>
            <div className="flex h-screen w-full items-start gap-5 p-6">
                <MaterialButton
                    className=""
                    onClick={() => setLocation('/spinner')}
                    wait_ripple={true}
                >
                    Wait
                </MaterialButton>
                <MaterialButton
                    className=""
                    onClick={() => setLocation('/spinner')}
                    wait_ripple={false}
                >
                    DontWait
                </MaterialButton>
                <MaterialButton icon_button>
                    <BellAlertIcon className="" />
                </MaterialButton>
                <MaterialButton
                    // ref={reference}
                    icon_left={<BellAlertIcon className="" />}
                    icon_right={<AcademicCapIcon />}
                    loader
                    className="bg-red-400"
                    large
                    onClick={() => console.log('abhay')}
                    // disabled
                >
                    Loader
                </MaterialButton>

                <MaterialButton
                    // ref={reference}
                    icon_left={<BellAlertIcon className="" />}
                    icon_right={<AcademicCapIcon />}
                    // loader

                    className="bg-red-400"
                    large
                    onClick={() => console.log('abhay')}
                    disabled
                >
                    Disabled
                </MaterialButton>

                <MaterialButton
                    // ref={reference}
                    icon_left={<BellAlertIcon className="" />}
                    icon_right={<AcademicCapIcon />}
                    loader
                    label="label"
                    className="bg-red-400"
                    large
                    onClick={() => console.log('abhay')}
                />
            </div>
        </>
    );
};

export default RippleTest;
