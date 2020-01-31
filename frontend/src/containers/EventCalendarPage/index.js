import React from "react";

import Clock from "../../components/Clock";
import Calendar from "../../components/Calendar";

function EventCalendarPage() {
    return (
        <div>
            <h2>Event Calendar Page</h2>
            <Clock />
            <Calendar />
        </div>
    );
}

export default EventCalendarPage;