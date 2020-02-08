import React, {useEffect, cloneElement, useContext} from "react"
import  {useTimeInput} from "./utils/useTimeInput";
import {DateContext} from "../../containers/EventCalendarPage/DateContext";

function TimeField({
   children,
   endTime,
   defaultValue,
   label
}) {
    const {
        bind,
        setValue
    } = useTimeInput(defaultValue);
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
        <div>
            <label>{label}</label>
            {cloneElement(children, {...bind})}
        </div>
    );
}

export default TimeField;