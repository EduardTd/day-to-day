import React, {cloneElement} from "react"
import {useInput} from "./utils/useInput";

function Field({children, defaultValue, label, reset}) {
    const {
        bind,
        reset: resetValue
    } = useInput(defaultValue);

    if (reset) {
        resetValue();
    }

    return (
        <div>
            <label>{label}</label>
            <div>
                {cloneElement(children, {...bind})}
            </div>
        </div>
    );
}

export default Field;