import React, {useContext, useState} from "react"

import Button from "./Button";
import PopUpForm from "../PopUpForm";

import { DateContext } from "../../containers/EventCalendarPage/DateContext";

function CreateEvent() {
    const dateContext = useContext(DateContext);
    const [dateState, setDateState] = useState(dateContext);
    const [popUpVisibility, setPopUpVisibility] = useState(false);

    const openFormPopUp = () => {
        setPopUpVisibility(true);
    };

    return (
        <div>
            <Button onClick={openFormPopUp}> + </Button>
            <PopUpForm visible={popUpVisibility} setVisibility={setPopUpVisibility} />
        </div>
    );
}

export default CreateEvent;