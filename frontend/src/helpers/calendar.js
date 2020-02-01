const getDetailedDate = (date) => {
    const actualDate = date ? date : new Date();

    return {
        year: actualDate.getFullYear(),
        month: actualDate.getMonth() + 1,
        day: actualDate.getDate()
    };
};

const formatCellData = (value, date, type) => {
    return {
        value,
        date,
        type
    }
};

/**
 * @param date
 * @returns {*[]}
 */
const createCalendarData = (date) => {
    const cellQty = 42;
    const previousCells = getPreviousMonthDays(date);
    const currentCells = getCurrentMonthDays(date);
    const calendarCells = [...previousCells, ...currentCells];
    const limiter = cellQty - calendarCells.length;
    const nextCells = getNextMonthDays(date, limiter);

    return [...calendarCells, ...nextCells];
};

/**
 * Function return an array of days of current month
 *
 * @param year
 * @param month
 * @returns {[]}
 */
const getCurrentMonthDays = ({ year, month }) => {
    const dateNow = new Date(year, month, 0);
    const dayQty = dateNow.getDate();
    const actualDays = [];

    for (let counter = 1; counter <= dayQty; counter++) {
        let actualDate = new Date(dateNow);

        actualDate.setDate(counter);
        actualDays.push(formatCellData(counter, actualDate, 'currentMonth'));
    }

    return actualDays;
};

/**
 * Return an array of days of next month
 * and returns missing amount of up to 42
 *
 * @param year
 * @param month
 * @param limiter
 * @returns {[]}
 */
const getNextMonthDays = ({ year, month }, limiter) => {
    const nextDate = new Date(year, month + 1, 0);
    const actualDays = [];
    let dayValue = 0;

    for (let counter = limiter; counter > 0; counter--) {
        let actualDate = new Date(nextDate);

        dayValue++;
        actualDate.setDate(dayValue);
        actualDays.push(formatCellData(dayValue, actualDate, 'nextMonth'));
    }

    return actualDays;
};

/**
 * Return an array of days of previous month
 * and if last day is sunday, return 7 items
 *
 * @param year
 * @param month
 * @returns {[]}
 */
const getPreviousMonthDays = ({ year, month }) => {
    const previousDate = new Date(year, month - 1, 0);
    const dayQty = previousDate.getDate();
    const positionInWeek = previousDate.getDay();
    const actualDays = [];
    let limiter = positionInWeek ?  positionInWeek : 7;

    for (let counter = 0; counter < limiter; counter++) {
        let dayValue = dayQty - counter;
        let actualDate = new Date(previousDate);

        actualDate.setDate(dayValue);
        actualDays.unshift(formatCellData(dayValue, actualDate, 'previousMonth'));
    }

    return actualDays;
};

export default function getCalendarData(date) {
    let currentDate = getDetailedDate(date);

    return createCalendarData(currentDate);
};
