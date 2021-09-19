import React from "react";
import { useState, useEffect } from "react";

function useClock() {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setData(new Date());
    }

    return (
        <div>
            <h2>{data.toLocaleTimeString()}</h2>
        </div>
    );
}

export default useClock;
