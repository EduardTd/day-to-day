import {isEmpty} from "./utils";

export default () => {
    return {
        requiredEntry: {
            handler: (value) => {
                return !isEmpty(value);
            },
            message: 'This is a required field.'
        },
        maxTextLength: {
            handler: function(value, params) {
                return value !== undefined && value.length <= +params;
            },
            message: 'Please enter less or equal than {0} symbols.'
        },
        time: {
            handler: (value) => {
                return isEmpty(value) ||
                    /^([01]\d|2[0-3])(:[0-5]\d){0,2}$/.test(value);
            },
            message: 'Please enter a valid time, between 00:00 and 23:59'
        }
    }
}