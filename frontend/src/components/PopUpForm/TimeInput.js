import React, {useEffect, useContext, useState} from "react"
import {DateContext} from "../../containers/EventCalendarPage/DateContext";

function TimeInput({endTime, ...props}) {
    const [defaultValue, setDefaultValue] = useState('');
    const dateContext = useContext(DateContext);
    const currentDate = dateContext.value;
    let currentHour = currentDate.getHours();

    useEffect(() => {
        if (endTime) {
            currentHour = currentHour + 1
        }

        const formattedHour = `${('0' + currentHour).slice(-2)}:00`;
        setDefaultValue(formattedHour);
    }, []);

    return (
        <input type="text" value={defaultValue} {...props} />
    );
}

export default TimeInput;