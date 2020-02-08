import rulesList from "./rulesList";

const storeRules = (rules) => {
    let storedRules = {};

    Object.keys(rules).forEach((key) => {
        if (!rulesList.hasOwnProperty(key)) {
            return;
        }

        const ruleValue = rules[key];

        if (!ruleValue) {
            return;
        }

        storedRules[key] = rulesList[key].bind(ruleValue);
    });

    return storedRules;
};

const getMessage = (value, storedRules) => {
    let message = '';

    for (let key in storedRules) {
        if (message) {
            break;
        }

        if (!storedRules.hasOwnProperty(key)) {
            return;
        }

        const ruleHandler = storedRules[key];
        message = ruleHandler(value);
    }

    return message;
};

const validate = (rules) => {
    const storedRules = storeRules(rules);

    const validator = (value) => {
        const message = getMessage(value, storedRules);

        return message ? message : true;
    };

    return {validate: validator};
};

export default validate;