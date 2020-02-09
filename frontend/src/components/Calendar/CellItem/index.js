import React, { useContext } from "react"

import Li from "./Li";

import { CalendarDateContext } from "../CalendarDateContext";
import { DateContext } from "../../../containers/EventCalendarPage/DateContext";
import {connect} from "react-redux";
import {changeDate} from "../../../containers/App/actions"

function CellItem({text, date, dispatch}) {
    const calendarContext = useContext(CalendarDateContext);
    const dateContext = useContext(DateContext);

    const changeDateHandler = () => {
        dateContext.setValue(date);
        dispatch(changeDate(date));

        if (calendarContext.value.getMonth() === date.getMonth()) {
            return;
        }

        calendarContext.setValue(date);
    };

    return (
        <Li onClick={changeDateHandler}>{text}</Li>
    );
}

export default connect()(CellItem);