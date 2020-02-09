import React, {useState} from "react";

import Button from "./Button";
import PopUpForm from "../PopUpForm";

function CreateEvent() {
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