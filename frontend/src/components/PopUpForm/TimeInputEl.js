import React, {useEffect, useContext} from "react"
import {DateContext} from "../../containers/EventCalendarPage/DateContext";

function TimeField({endTime, forwardRef, ...props}) {
    const dateContext = useContext(DateContext);


    useEffect(() => {
        // if (defaultValue) {
        //     return;
        // }

        const currentDate = dateContext.value;
        let currentHour = currentDate.getHours();

        currentHour = endTime ? currentHour + 1 : currentHour;
        const formattedHour = `${('0' + currentHour).slice(-2)}:00`;
        // setValue(formattedHour);
    }, []);

    return (
        <input ref={forwardRef} {...props}/>
    );
}

export default TimeField;