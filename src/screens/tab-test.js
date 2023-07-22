import React from 'react';
import { useLocation } from 'wouter';

const TabTest = ({ params }) => {
    const [location, setLocation] = useLocation();
    const [state, setState] = useState();
    const [current_tab] = useTab();
    console.log(location, params);

    return (
        <>
            <div className="flex h-screen flex-col">
                <div className="flex items-center justify-center gap-1 border border-black">
                    Tab Test Component
                </div>
                <div className="flex flex-1 items-center justify-center border-4 border-red-700">
                    <div className="flex flex-row gap-3 border border-black p-3">
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

/*
there is a tab so so can change the tab according to it 

  */

export default TabTest;
