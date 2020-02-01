const getWeekDayNames = () => {
    const currentDate = new Date();
    const today = currentDate.getDay();

    let nextDayNames = getNextWeekDayNames(today, currentDate);
    let previousDayNames = getPreviousWeekDayNames(today, currentDate);

    return previousDayNames.concat(nextDayNames);
};

const getPreviousWeekDayNames = (today, currentDate) => {
    const firstDayNumber = 1;
    let namesArray = [];
    let storedDate = currentDate;

    for (
        let counter = today;
        counter > firstDayNumber;
        counter--
    ) {
        let previousDate = new Date(storedDate);
        previousDate.setDate(previousDate.getDate() - 1);
        storedDate = previousDate;
        namesArray.push(getWeekDayName(previousDate));
    }

    return namesArray.reverse();
};

const getNextWeekDayNames = (today, currentDate) => {
    const lastDayNumber = 7;
    let namesArray = [];
    let storedDate = currentDate;

    namesArray.push(getWeekDayName(currentDate));

    for (
        let counter = today;
        counter < lastDayNumber;
        counter++
    ) {
        let nextDate = new Date(storedDate);
        nextDate.setDate(nextDate.getDate() + 1);
        storedDate = nextDate;
        namesArray.push(getWeekDayName(nextDate));
    }

    return namesArray;
};

const getWeekDayName = (date) => {
    return date.toLocaleString('en-US', {weekday: 'short'});
};

export {
    getWeekDayNames
}