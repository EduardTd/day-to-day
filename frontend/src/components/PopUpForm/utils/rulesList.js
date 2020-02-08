const isEmpty = (value) => {
    return value === '' ||
           value == null ||
           value.length === 0 ||
           /^\s+$/.test(value);
};

const rulesList = {
    required(value) {
        const handler = (value) => !isEmpty(value) ? value : '';
        const message = 'This is a required field.';

        return handler(value) ? '' : message;
    },
    maxTextLength(value) {
        if (!value) {
            return '';
        }

        const handler = (value) => value.length <= + this ? value : '';
        const message = `Please enter less or equal than ${this} symbols.`;

        return handler(value) ? '' : message;
    },
    time(value) {
        const handler = (value) => {
            return /^(([01][0-9]|2[0-3])h)|(([01][0-9]|2[0-3]):[0-5][0-9])$/.test(value) ? value : '';
        };
        const message = 'Please enter a valid time, between 00:00 and 23:59';

        return handler(value) ? '' : message;
    }
};

export default rulesList;