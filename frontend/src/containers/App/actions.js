import {CHANGE_DATE} from "./constants";

const changeDate = (selectedDate) => {
    return {
        type: CHANGE_DATE,
        selectedDate
    }
};

export {
    changeDate
}