import React from 'react';

import Chip from 'components/chip';
import { AcademicCapIcon, BellAlertIcon } from '@heroicons/react/24/solid';

const ChipTest = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="text-center text-lg border border-black">
                ChipTest
            </div>
            <div className="flex flex-row flex-1">
                <div className="w-[250px] border border-black">Variants</div>
                <div className="border border-black flex-1 flex flex-col p-4">
                    <div className="shadow-md w-[150px] flex flex-col gap-3 items-start">
                        <Chip label="basic" />
                        <Chip label="Outlined" outlined />
                        <Chip label="small" small />
                        <Chip label="React" primary large />
                        <Chip label="React" primary large outlined />
                        <Chip label="React" large success warning />
                        <Chip label="React" error outlined />
                        <Chip
                            label="secondary"
                            secondary
                            className="text-red-500 capitalize"
                        />
                        <Chip
                            label="Clickable"
                            onClick={() => console.log('clicked')}
                        />
                        <Chip
                            label="left icon"
                            onClick={() => console.log('chip is clicked')}
                            iconOnClick={() => console.log('icon is clicked')}
                            icon_left={<BellAlertIcon />}
                        />
                        <Chip
                            label="Icons"
                            onClick={() => console.log('chip is clicked')}
                            iconOnClick={() => console.log('icon is clicked')}
                            icon_left={
                                <BellAlertIcon className="text-pink-600" />
                            }
                            icon_right={
                                <AcademicCapIcon className="text-red-400" />
                            }
                        />
                        <Chip
                            label="Icons"
                            onClick={() => console.log('chip is clicked')}
                            iconOnClick={() => console.log('icon is clicked')}
                            icon_left={
                                <BellAlertIcon className="text-pink-600" />
                            }
                            icon_right={
                                <AcademicCapIcon className="text-red-400" />
                            }
                            large
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChipTest;
