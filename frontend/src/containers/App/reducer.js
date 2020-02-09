import {CHANGE_DATE} from "./constants";

const initialState = {
    activeDate: new Date()
};

const reducer = (state =  initialState, action) => {
    switch (action.type) {
        case CHANGE_DATE: {
            state.activeDate = action.selectedDate;

            return state;
        }
        default: {
            return state;
        }
    }
};

export default reducer;