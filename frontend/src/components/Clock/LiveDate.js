import React, { useState, useEffect } from "react";
import { getCurrentDate, getDayEndTime } from "../../helpers/date";

function LiveDate() {
    const [date, setDate] = useState(getCurrentDate());

    useEffect(() => {
        let timer = setInterval(
            () => setDate(getCurrentDate()),
            getDayEndTime()
        );

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>{date}</div>
    )
}

export default LiveDate;