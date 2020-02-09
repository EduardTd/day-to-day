import React from "react";

import CellItem from "../CellItem";
import Ul from "./styledComponents/Ul";

function CellList({cellList}) {
    let content = <CellItem />;

    if (cellList && cellList.length) {
        content = cellList.map(({value, date, type}) => (
            <CellItem key={value + type} text={value} date={date}/>
        ));
    }

    return (
        <Ul>{content}</Ul>
    );
}


export default CellList;