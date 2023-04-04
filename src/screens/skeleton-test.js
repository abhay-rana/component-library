import React from 'react';

import Skeleton from 'components/skeleton/skeleton';

const SkeletonTest = () => {
    return (
        <>
            <div className="flex min-h-full  flex-col">
                <div className="border-2 border-black text-center text-lg text-red-400">
                    Skeleton Effect
                </div>
                <div className="flex flex-1 flex-row">
                    <div className="w-[250px] border border-black p-4">
                        Variants
                    </div>
                    <div className="flex flex-1 flex-col gap-10 border border-black p-4">
                        <div className="w-[500px] border border-black p-1 shadow-lg">
                            <Skeleton
                                type="square"
                                height={55}
                                width={55}
                                animation={false}
                            />
                            sqaure skeleon without animation
                        </div>
                        <div className="w-[500px] border border-black p-1 shadow-lg">
                            <Skeleton type="square" height={55} width={55} />
                            default animation is on
                        </div>
                        <div className="w-[500px] border border-black p-1 shadow-lg">
                            <Skeleton type="circle" height={55} width={55} />
                            circle skeleton (configrue height and width by
                            props)
                        </div>
                        <div className="w-[500px] border border-black p-1 shadow-lg">
                            <Skeleton type="line" />
                            line defualt (width is 100%)
                        </div>
                        <div className="w-[500px] border border-black p-1 shadow-lg">
                            <Skeleton
                                type="line"
                                style={{ bg_color: 'bg-yellow-100' }}
                            />
                            configure the skeleton color
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkeletonTest;
