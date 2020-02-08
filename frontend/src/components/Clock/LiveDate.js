import React, { useState, useEffect } from "react";
import { getCurrentDateString, getDayEndTime } from "../Calendar/utils/date";

function LiveDate() {
    const [date, setDate] = useState(getCurrentDateString());

    useEffect(() => {
        let timer = setInterval(
            () => {
                setDate(getCurrentDateString())
            },
            getDayEndTime()
        );

        return () => clearTimeout(timer);
    }, [date]);

    return (
        <div>{date}</div>
    )
}

export default LiveDate;