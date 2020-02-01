import React, { useContext } from "react"

import Li from "./Li";

import { CalendarDateContext } from "../CalendarDateContext";
import { DateContext } from "../../../containers/EventCalendarPage/DateContext";

function CellItem({text, date}) {
    const calendarContext = useContext(CalendarDateContext);
    const dateContext = useContext(DateContext);

    const changeDate = () => {
        dateContext.setValue(date);

        if (calendarContext.value.getMonth() === date.getMonth()) {
            return;
        }

        calendarContext.setValue(date);
    };

    return (
        <Li onClick={changeDate}>{text}</Li>
    );
}

export default CellItem;