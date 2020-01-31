const getDetailedTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
};

const getCurrentDateString = () => {
    const date = new Date();
    const options = {
        weekday: 'short',
        month: 'long',
        day: 'numeric'
    };

    return date.toLocaleDateString('en-US', options);
};

const getCurrentTime = () => {
    const date = new Date();
    const options = {
        hour12: false
    };

    return date.toLocaleTimeString('en-US', options);
};

const getDayEndTime = () => {
    let {hours, minutes, seconds} = getDetailedTime();

    return  (24*60*60) - (hours*60*60) - (minutes*60) - seconds;
};

export {
    getCurrentTime,
    getDayEndTime,
    getCurrentDateString
}