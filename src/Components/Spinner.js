import React from 'react';
import spinner from "./Rolling-1s-200px.gif"

const Spinner = () => {
    return (
        <>
            <div className={"spinner"}>
                <img src={spinner} alt="loading"/>
            </div>
        </>
    )
        ;
}

export default Spinner;
