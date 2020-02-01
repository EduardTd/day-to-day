import React, {useContext, useMemo, useState} from "react";

import Clock from "../../components/Clock";
import Calendar from "../../components/Calendar";

import { DateContextProvider } from "./DateContext"
import { CalendarDateContext } from "../../components/Calendar/CalendarDateContext"

function EventCalendarPage() {
    const calendarContext = useContext(CalendarDateContext);
    const child = useMemo(() => <Calendar />, [calendarContext]);
    const [contextState, setContextState] = useState(new Date());
    const contextValue = {
        value: contextState,
        setValue: setContextState
    };

    return (
        <DateContextProvider value={contextValue}>
            <h2>Event Calendar Page</h2>
            <Clock />
            {/*<Calendar />*/}
            {child}
        </DateContextProvider>
    );
}

export default EventCalendarPage;