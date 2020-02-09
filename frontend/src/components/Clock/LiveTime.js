import React, {useState, useEffect} from "react";
import {getCurrentTime} from "../Calendar/utils/date";

function LiveTime() {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        let timer = setInterval(
            () => {
                setTime(getCurrentTime())
            },
            1000
        );

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>{time}</div>
    )
}

export default LiveTime;