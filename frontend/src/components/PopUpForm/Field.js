import React, { useEffect, cloneElement } from "react"
import { useInput } from "./useInput";

function Field({children, defaultValue, label, reset}) {
    const {
        value,
        bind,
        setValue,
        reset: resetValue
    } = useInput('');

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, []);

    if (reset) {
        resetValue();
    }

    return (
        <div>
            <label>{label}</label>
            {cloneElement(children, {...bind})}
        </div>
    );
}

export default Field;