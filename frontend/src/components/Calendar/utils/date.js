const getDetailedTime = () => {
    const dateNow = new Date();

    return {
        hours: dateNow.getHours(),
        minutes: dateNow.getMinutes(),
        seconds: dateNow.getSeconds()
    };
};

const getCurrentDateString = () => {
    const dateNow = new Date();
    const options = {
        weekday: 'short',
        month: 'long',
        day: 'numeric'
    };

    return dateNow.toLocaleDateString('en-US', options);
};

const getCurrentTime = () => {
    const dateNow = new Date();
    const options = {
        hour12: false
    };

    return dateNow.toLocaleTimeString('en-US', options);
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