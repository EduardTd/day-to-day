import React, {useContext} from "react"

import Li from "./styledComponents/Li";

import {CalendarDateContext} from "../CalendarDateContext";
import {connect} from "react-redux";
import {changeDate} from "../../../containers/App/actions"

function CellItem({text, date, dispatch}) {
    const calendarContext = useContext(CalendarDateContext);

    const changeDateHandler = () => {
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