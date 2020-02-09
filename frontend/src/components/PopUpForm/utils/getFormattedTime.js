const getFormattedTime = (defaultValue, activeDate, endTime) => {
    if (defaultValue) {
        return defaultValue;
    }

    const timeNow = activeDate.getHours();
    let currentHour = endTime ? timeNow + 1 : timeNow;

    return `${('0' + currentHour).slice(-2)}:00`;
};

export default getFormattedTime;