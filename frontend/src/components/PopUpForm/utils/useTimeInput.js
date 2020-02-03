import { useState } from "react";
import timeMask from "./timeMask";

const useTimeInput = (initialValue) => {
    const [inputValue, setInputValue] = useState(timeMask(initialValue));

    return {
        value: inputValue,
        setValue: setInputValue,
        reset: () => setInputValue(''),
        bind: {
            value: inputValue,
            onChange: (event) => {
                const correctedValue = timeMask(event.target.value);
                setInputValue(correctedValue);
            }
        }
    };
};

export {
    useTimeInput
}