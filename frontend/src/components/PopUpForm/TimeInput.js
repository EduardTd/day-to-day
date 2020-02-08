import React, {useEffect, useContext} from "react"
import {DateContext} from "../../containers/EventCalendarPage/DateContext";
import {useTimeInput} from "./utils/useTimeInput";
import timeMask from "./utils/timeMask";

function TimeInput({endTime, defaultValue, register, ...props}) {
    const {
        bind,
        setValue,
    } = useTimeInput(timeMask(defaultValue));
    const dateContext = useContext(DateContext);
    const currentDate = dateContext.value;
    let currentHour = currentDate.getHours();

    useEffect(() => {
        if (defaultValue) {
            return;
        }

        currentHour = endTime ? currentHour + 1 : currentHour;
        const formattedHour = `${('0' + currentHour).slice(-2)}:00`;
        setValue(formattedHour);
    }, []);

    return (
        <input ref={register} {...props} {...bind} />
    );
}

export default TimeInput;