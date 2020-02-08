import React, { useState } from "react"

import GetCalendarData from "./utils/calendar";
import CellList from "./CellList";
import CurrentDate from "./CurrentDate";
import WeekDayRow from "./WeekDayRow";

import { CalendarDateProvider } from "./CalendarDateContext";

function Calendar() {
    const [cellListState, setCellListState] = useState(new Date());
    const cellList = GetCalendarData(cellListState);
    const contextValue = {
        value: cellListState,
        setValue: setCellListState
    };

    return (
        <CalendarDateProvider value={contextValue}>
            <CurrentDate />
            <WeekDayRow />
            <CellList cellList={cellList} />
        </CalendarDateProvider>
    );
}

export default Calendar;