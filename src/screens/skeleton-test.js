import React from 'react';

const SkeletonTest = () => {
    return (
        <>
            <div className="flex flex-col  min-h-full">
                <div className="text-center text-lg text-red-400 border-2 border-black">
                    Skeleton Effect
                </div>
                <div className="flex-1 flex flex-row">
                    <div className="w-[250px] border border-black p-4">
                        Variants
                    </div>
                    <div className="flex flex-col flex-1 border border-black p-4">
                        <Skeleton type="line" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkeletonTest;
