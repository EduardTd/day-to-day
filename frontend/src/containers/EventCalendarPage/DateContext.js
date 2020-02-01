import React from "react";

const DateContext = React.createContext({});
const DateContextProvider = DateContext.Provider;

export {
    DateContext,
    DateContextProvider
};