import React, {cloneElement} from "react"
import {useInput} from "./utils/useInput";

function Field({children, defaultValue, label, reset}) {
    const {
        value,
        bind,
        reset: resetValue
    } = useInput(defaultValue);

    if (reset) {
        resetValue();
    }

    const onBlurCallback = (event) => {

    };

    return (
        <div>
            <label>{label}</label>
            <div>
                {cloneElement(children, {...bind, onBlur: onBlurCallback})}
            </div>
        </div>
    );
}

export default Field;