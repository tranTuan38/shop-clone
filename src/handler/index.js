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

function handlerSetDataLeftBar(idType, itemValue, data, dataKeys, listRequest) {
    let results;
    results = dataKeys.reduce((acc, item, index) => {
        if (idType == index) {
            if (idType <= 2) {
                if (data[item]) {
                    const checkType = typeof data[item];
                    if (checkType == 'object') {
                        acc = {
                            ...data,
                            selected: [...data.selected, itemValue],
                            [item]: [...data[item], itemValue],
                        };
                    } else {
                        const itemNumber = data.selected.indexOf(data[item]);
                        if (itemNumber !== -1) {
                            data.selected.splice(itemNumber, 1);
                            acc = {
                                ...data,
                                selected: [...data.selected, itemValue],
                                [item]: itemValue,
                            };
                        }
                    }
                    return acc;
                } else {
                    acc = {
                        ...data,
                        selected: [...data.selected, itemValue],
                        [item]: itemValue,
                    };
                }
            } else {
                acc = {
                    ...data,
                    selected: [...data.selected, itemValue],
                    tag: [...data.tag, itemValue],
                };
            }
        }
        return acc;
    }, {});

    return results;
}

function handlerSetDatWithPath(initData, listData, listRequest, listTags) {
    const requestKeys = Object.keys(listRequest);
    // console.log('initData:', initData);
    // console.log('listData:', listData);
    // console.log('listRequest:', listRequest);

    const results = requestKeys.reduce((acc, key, index) => {
        let dataNumber;
        let dataValue;

        if (Object.keys(acc).length) {
            if (listRequest[key]) {
                if (acc[key]) {
                    dataNumber = listRequest[key].split(',').map((item) => {
                        return Number(item);
                    });

                    if (key !== 'tag') {
                        dataValue = listData[key].filter((item, index) => {
                            return dataNumber.includes(index);
                        });
                    } else {
                        dataValue = listTags.filter((item, index) => {
                            return dataNumber.includes(index);
                        });
                    }

                    acc = {
                        ...acc,
                        selected: [...dataValue, ...acc.selected],
                        [key]: [...acc[key], ...dataValue],
                    };
                } else {
                    dataNumber = Number(listRequest[key]);
                    dataValue = listData[key][dataNumber];
                    acc = { ...acc, selected: [...acc.selected, dataValue], [key]: dataValue };
                }
            }

            return acc;
        }

        return (acc = initData);
    }, {});

    return results;
}

function handleSortSelecter(data, item) {
    if (data.includes(item)) {
        return data;
    } else {
        return [...data, item];
    }
}

function handleTopSideBarTitle(type, data) {
    let result;
    const isCheck = data.search.includes(type);
    const index = data.search.indexOf(type);
    if (isCheck) {
        result = data.children[index];
        return result;
    } else {
        result = data.title;
        return result;
    }
}

function handleLeftSideBarPath(
    idType,
    dataValues,
    location,
    listRequest,
    listTag,
    itemIndex,
    itemValue,
    setSearchParams,
) {
    let results = {};
    if (!location.search) {
        if (idType < 3) {
            const keyRequest = dataValues[idType];
            results = { sort_by: 'new_chap_at', [keyRequest]: itemIndex.toString() };
        } else {
            const tagIndex = listTag.indexOf(itemValue);
            results = { sort_by: 'new_chap_at', tag: tagIndex.toString() };
        }
        setSearchParams(results);
    } else {
        if (!listRequest.sort_by) {
            if (idType == 0) {
                let newArr;
                if (listRequest.genre) {
                    const spiltArr = listRequest.genre.split(',').sort();
                    newArr = [...spiltArr, itemIndex];
                    newArr.sort((a, b) => a - b);
                } else {
                    newArr = [itemIndex];
                }
                results = { ...listRequest, sort_by: 'new_chap_at', genre: newArr.toString() };
            } else if (idType == 1) {
                results = { ...listRequest, sort_by: 'new_chap_at', status: itemIndex.toString() };
            } else if (idType == 2) {
                results = { ...listRequest, sort_by: 'new_chap_at', prototypes: itemIndex.toString() };
            } else if (idType > 2) {
                const tagIndex = listTag.indexOf(itemValue).toString();
                let newArr;
                if (listRequest.tag) {
                    const spiltArr = listRequest.tag.split(',').sort();
                    newArr = [...spiltArr, tagIndex];
                    newArr.sort((a, b) => a - b);
                } else {
                    newArr = [tagIndex];
                }
                results = { ...listRequest, sort_by: 'new_chap_at', tag: newArr.toString() };
            }
        } else {
            if (idType == 0) {
                let newArr;
                if (listRequest.genre) {
                    const spiltArr = listRequest.genre.split(',').sort();
                    newArr = [...spiltArr, itemIndex];
                    newArr.sort((a, b) => a - b);
                } else {
                    newArr = [itemIndex];
                }
                results = { ...listRequest, genre: newArr.toString() };
            } else if (idType == 1) {
                results = { ...listRequest, status: itemIndex.toString() };
            } else if (idType == 2) {
                results = { ...listRequest, prototypes: itemIndex.toString() };
            } else if (idType > 2) {
                const tagIndex = listTag.indexOf(itemValue).toString();
                let newArr;
                if (listRequest.tag) {
                    const spiltArr = listRequest.tag.split(',').sort();
                    newArr = [...spiltArr, tagIndex];
                    newArr.sort((a, b) => a - b);
                } else {
                    newArr = [tagIndex];
                }
                results = { ...listRequest, tag: newArr.toString() };
            }
        }

        const data = Object.entries(results).reduce((acc, item) => {
            if (item[1]) {
                return { ...acc, [item[0]]: item[1] };
            }

            return acc;
        }, {});

        setSearchParams(data);
    }
}

function handleDeletePath() {}

export {
    handleTime,
    handleGetRankWeekRead,
    handleGetRankWeekPrevailing,
    handleGetRankWeekNomination,
    handleGetBookById,
    handleGetUserById,
    handlerSetDataLeftBar,
    handlerSetDatWithPath,
    handleSortSelecter,
    handleTopSideBarTitle,
    handleLeftSideBarPath,
    handleDeletePath,
};
