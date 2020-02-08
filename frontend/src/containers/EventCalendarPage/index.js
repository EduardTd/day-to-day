import React, { useMemo, useState } from "react";

import Clock from "../../components/Clock";
import Calendar from "../../components/Calendar";
import CreateEvent from "../../components/CreateEvent"

import { DateContextProvider } from "./DateContext"

function EventCalendarPage() {
    const MemorizeCalendar = useMemo(() => <Calendar />, []);
    const [contextState, setContextState] = useState(new Date());
    const contextValue = {
        value: contextState,
        setValue: setContextState
    };

    return (
        <DateContextProvider value={contextValue}>
            <h2>Event Calendar Page</h2>
            <Clock />
            {MemorizeCalendar}
            <CreateEvent />
        </DateContextProvider>
    );
}

export default EventCalendarPage;