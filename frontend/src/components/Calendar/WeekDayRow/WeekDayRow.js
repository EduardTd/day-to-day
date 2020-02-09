import React from "react";
import WeekDayItem from "./styledComponents/WeekDayItem";
import Wrapper from "./styledComponents/Wrapper";
import {getWeekDayNames} from "./utils/weekDay";

const getWeekDays = () => {
    const shortDayNames = getWeekDayNames();

    return shortDayNames.map(name => {
        return (
            <WeekDayItem key={`item-${name}`}>{name}</WeekDayItem>
        )
    })
};

function WeekDayRow() {
    const weekDays = getWeekDays();

    return (
        <Wrapper>{weekDays}</Wrapper>
    );
}

export default WeekDayRow;