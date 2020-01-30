import React from "react";

import LiveTime from "./LiveTime";
import LiveDate from "./LiveDate";

function Clock() {
    return (
        <div>
            <LiveTime />
            <LiveDate />
        </div>
    );
}

export default Clock;