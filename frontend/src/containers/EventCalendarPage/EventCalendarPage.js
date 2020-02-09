import React, {useMemo} from "react";

import Clock from "../../components/Clock";
import Calendar from "../../components/Calendar";
import CreateEvent from "../../components/CreateEvent"

function EventCalendarPage() {
    const MemorizeCalendar = useMemo(() => <Calendar />, []);

    return (
        <div>
            <h2>Event Calendar Page</h2>
            <Clock />
            {MemorizeCalendar}
            <CreateEvent />
        </div>
    );
}

export default EventCalendarPage;