import { useState } from "react";

const useInput = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue);

    return {
        value: inputValue,
        setValue: setInputValue,
        reset: () => setInputValue(''),
        bind: {
            value: inputValue,
            onChange: (event) => {
                setInputValue(event.target.value);
            }
        }
    };
};

export {
    useInput
}