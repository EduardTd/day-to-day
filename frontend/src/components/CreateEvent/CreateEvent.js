import React, {useState} from "react";

import Button from "./styledComponents/Button";
import PopUpForm from "../PopUpForm";

function CreateEvent() {
    const [popUpVisibility, setPopUpVisibility] = useState(false);

    const openFormPopUp = () => {
        setPopUpVisibility(true);
    };

    return (
        <div>
            <Button onClick={openFormPopUp}> + </Button>
            {
                popUpVisibility &&
                <PopUpForm visible={popUpVisibility}
                           setVisibility={setPopUpVisibility}
                />
            }
        </div>
    );
}

export default CreateEvent;