import rules from "./rules/rules";
import isEmpty from "../../utils/isEmpty";

const ruleStore = {};

const setRule = ({name, handler, message}) => {
    if (
        ruleStore.hasOwnProperty(name) ||
        typeof name !== 'string'
    ) {
        return;
    }

    ruleStore[name] = {handler, message};
};

const getRules = () => ruleStore;

const storeRule = (name) => {
    if (
        ruleStore.hasOwnProperty(name) ||
        !rules.hasOwnProperty(name)
    ) {
        return;
    }

    ruleStore[name] = rules[name];
};

const validator = (requiredRules = {}) => {
    const report = {
        passed: false,
        message: ''
    };

    if (isEmpty(requiredRules) || typeof requiredRules !== 'object') {
        report.message = 'No validation rules or it is not object';

        return report;
    }

    Object.keys(requiredRules).forEach(storeRule);
    report.passed = true;
    report.message = 'Validator ready';

    return report;
};

const validate = (value) => {
    const isValid = false;
    const messages = [];

    if (isEmpty(ruleStore)) {

        return {
            isValid,
            messages
        };
    }

    Object.keys(ruleStore).forEach((key) => {
        if (!ruleStore[key].handler(value)) {
            messages.push(ruleStore[key].message)
        }
    });

    return {
        isValid: !messages.length,
        messages
    }
};

export {
    setRule,
    getRules,
    validator,
    validate,
}
