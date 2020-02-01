import React from "react";

const CalendarDateContext = React.createContext({});
const CalendarDateProvider = CalendarDateContext.Provider;

export {
    CalendarDateContext,
    CalendarDateProvider
};