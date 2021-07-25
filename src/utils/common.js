export const formatTime = (timestamp) => {
    const timeDate = new Date(timestamp);
    const nowDate = new Date();

    let distime = nowDate - timeDate;

    if(distime > 24 * 60 * 60 * 1000) {
        return `${toTwo(timeDate.getFullYear() % 100)}-${toTwo(timeDate.getMonth() + 1)}-${toTwo(timeDate.getDate())}`;
    }
    return `${toTwo(timeDate.getHours())}:${toTwo(timeDate.getMinutes())}`;
};

const toTwo = (num) => {
    return num < 10 ? '0' + num : num;
}