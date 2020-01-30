import React, { useState, useEffect } from "react";
import { getCurrentTime } from "../../helpers/date";

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