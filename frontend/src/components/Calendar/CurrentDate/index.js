import React, { useContext } from "react";
import { CalendarDateContext } from "../CalendarDateContext";

function CurrentDate() {
    const dateContext = useContext(CalendarDateContext);
    const currentDate = dateContext.value;
    const currentMonth = currentDate.toLocaleDateString('en-US', {month: 'short'});
    const currentYear = currentDate.getFullYear();

    return (
        <div>
            <span>{currentMonth}</span>
            <span>{currentYear}</span>
        </div>
    );
}

export default CurrentDate;