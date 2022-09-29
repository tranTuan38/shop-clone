function handleTime(timeCur, timeItem) {
    const second = Math.floor((timeCur - timeItem) / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(hour / 30);
    const year = Math.floor(month / 12);

    let result = '';

    if (second < 60) {
        result = 'vừa mới';
    } else if (minute < 60) {
        result = `${minute} phút trước`;
    } else if (hour < 24) {
        result = `${hour} giờ trước`;
    } else if (day < 31) {
        result = `${day} ngày trước`;
    } else if (month < 13) {
        result = `${month} tháng trước`;
    } else {
        result = `${year} năm trước`;
    }

    return result;
}

export { handleTime };
