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

function handleGetRankWeekRead(data) {
    data.sort((a, b) => {
        return b.rankWeekRead - a.rankWeekRead;
    });

    return data;
}

function handleGetRankWeekPrevailing(data) {
    data.sort((a, b) => {
        return b.rankWeekPrevailing - a.rankWeekPrevailing;
    });

    return data;
}

function handleGetRankWeekNomination(data) {
    data.sort((a, b) => {
        return b.rankWeekNomination - a.rankWeekNomination;
    });

    return data;
}

function handleGetBookById(data, id) {
    const book = data.find((item) => {
        return item.idBook === id;
    });

    return book;
}

function handleCompareTime(data) {
    const timeData = new Date(data.time);

    return timeData;
}

function handleGetUserById(data, userData) {
    // console.log(id);
    const user = userData.map((item) => {
        const rateData = data.reduce((acc, ele) => {
            if (ele.idUser === item.id) {
                return [...acc, { comment: ele.comment, rate: ele.useRating, time: ele.time }];
            }

            return acc;
        }, []);

        rateData.sort((a, b) => {
            const aTime = new Date(a.time);
            const bTime = new Date(b.time);
            return aTime - bTime;
        });
        return { userName: item.name, userAvata: item.avatar, dataRating: rateData };
    });

    user.sort((a, b) => {
        const atime = new Date(a.dataRating[a.dataRating.length - 1].time);
        const btime = new Date(b.dataRating[b.dataRating.length - 1].time);

        return btime - atime;
    });

    // console.log(user);

    return user;
}

function handleSortSelecter(data, item) {
    if (data.includes(item)) {
        return data;
    } else {
        return [...data, item];
    }
}

export {
    handleTime,
    handleGetRankWeekRead,
    handleGetRankWeekPrevailing,
    handleGetRankWeekNomination,
    handleGetBookById,
    handleGetUserById,
    handleSortSelecter,
};
