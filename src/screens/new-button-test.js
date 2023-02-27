import React, { useEffect, useRef, useState } from 'react';

import MaterialButton from 'components/common/material-button';

import { BellAlertIcon } from '@heroicons/react/24/solid';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const NewButtonTest = () => {
    const [state, setState] = useState(0);
    const reference = useRef();
    console.log('state', state);
    useEffect(() => {
        console.log(reference);
        return () => {};
    }, []);

    return (
        <>
            <div className="flex h-full flex-col">
                <div id="header" className="text-center text-lg">
                    Material Button Component
                </div>
                <div id="" className="flex flex-1 flex-row">
                    <div
                        id="sidebar"
                        className="flex basis-60 flex-col border border-black"
                    >
                        <div>Variant</div>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 border border-red-400">
                        <MaterialButton text>text</MaterialButton>
                        <MaterialButton outlined>Outlined</MaterialButton>
                        <MaterialButton warning>Warning</MaterialButton>
                        <MaterialButton danger>Danger</MaterialButton>

                        <MaterialButton small>Small</MaterialButton>
                        <MaterialButton medium>Medium</MaterialButton>
                        <MaterialButton large>Large</MaterialButton>
                        <MaterialButton block small>
                            Block
                        </MaterialButton>
                        <MaterialButton
                            ref={reference}
                            icon_left={<BellAlertIcon className="" />}
                            icon_right={<AcademicCapIcon />}
                            loader
                            label="loader"
                            className="bg-red-400"
                            large
                            onClick={() => console.log('abhay')}
                        />
                        <MaterialButton
                            ref={reference}
                            icon_left={<BellAlertIcon className="" />}
                            icon_right={<AcademicCapIcon />}
                            label="disabled"
                            className="bg-red-400"
                            large
                            onClick={() => console.log('abhay')}
                            disabled
                        />
                        <MaterialButton
                            ref={reference}
                            onClick={() => console.log('abhay')}
                            icon_button={<AcademicCapIcon />}
                        />
                        <MaterialButton
                            ref={reference}
                            onClick={() => console.log('abhay')}
                            className="bg-red-400"
                            icon_button={<AcademicCapIcon />}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewButtonTest;
