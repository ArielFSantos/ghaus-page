import React from 'react';
import Home from './Home/home';

function Body() {
    return (
        <>
            <div className="bg-black min-h-screen">
                <main className="m-auto w-full h-screen bg-white " >
                    <Home />
                </main>
            </div>
        </>
    );
}

export default Body;
