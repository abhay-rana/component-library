import React from 'react';
import { useLocation } from 'wouter';

const TabTest = ({ params }) => {
    const [location, setLocation] = useLocation();
    console.log(location, params);
    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="flex items-center justify-center border border-black gap-1">
                    Tab Test Component
                </div>
                <div className="flex-1 flex items-center justify-center border-4 border-red-700">
                    <div className="flex flex-row border border-black gap-3 p-3">
                        <div onClick={() => setLocation('/tab/tab1')}>Tab1</div>
                        <div onClick={() => setLocation('/tab/comment')}>
                            Tab2
                        </div>
                    </div>
                    {params === 'comment' ? <div>Comment Section</div> : null}
                </div>
            </div>
        </>
    );
};

export default TabTest;
