const getFormattedTime = (defaultValue, activeDate, endTime) => {
    if (defaultValue) {
        return defaultValue;
    }

    const currentDate = activeDate ? activeDate : new Date();
    const time = currentDate.getHours();
    let currentHour = endTime ? time + 1 : time;
    currentHour = `${('0' + currentHour).slice(-2)}:00`;

    if (currentHour === '24:00') {
        currentHour = '00:00';
    }

    return currentHour;
};

export default getFormattedTime;