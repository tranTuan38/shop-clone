import { listBookData } from '~/initdata';
import { useGetListSelecter } from '~/hooks';

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

// ------------------------------------------------------------------------------------------------------
function handlerSelecedDataWithPath(data, listRequest, listSelecter, location) {
    const { sort_by, tag, genre, status, prototypes } = listRequest;
    const tags = [...listSelecter.characters, ...listSelecter.backGrg, ...listSelecter.sects, ...listSelecter.sights];

    // console.group(sort_by);
    // console.log('data: ', data);
    // console.log('location: ', location);
    // console.log('listRequest: ', listRequest);
    // console.log('listSelecter: ', listSelecter);
    // console.groupEnd();

    if (location.search) {
        if (location.search === `?sort_by=${sort_by}`) {
            // console.log(location.search);
            // console.log(data);
            return data;
        } else {
            const listSelecterDataNumber = Object.entries(listRequest).reduce((acc, item, index) => {
                if (Object.keys(acc).length) {
                    if (item[1]) {
                        if (item[1].includes(',')) {
                            acc = { ...acc, [item[0]]: item[1].split(',') };
                        } else {
                            acc = { ...acc, [item[0]]: item[1] };
                        }
                    }
                } else {
                    if (index !== 0) {
                        if (item[1]) {
                            if (item[1].includes(',')) {
                                acc = { [item[0]]: item[1].split(',') };
                            } else {
                                acc = { [item[0]]: item[1] };
                            }
                        }
                    }
                }

                return acc;
            }, {});

            const listSelecterDataValue = Object.keys(listSelecterDataNumber).map((key) => {
                let value;
                let numFormat;

                if (typeof listSelecterDataNumber[key] === 'string') {
                    numFormat = Number(listSelecterDataNumber[key]);
                    if (key !== 'tag') {
                        value = listSelecter[key][numFormat];
                    } else {
                        value = tags[numFormat];
                    }
                } else {
                    if (key !== 'tag') {
                        const dataListValue = listSelecterDataNumber[key].map((item, index) => {
                            const numBer = Number(item);
                            return listSelecter[key][numBer];
                        });

                        value = dataListValue;
                    } else {
                        const dataListValueKeyTag = listSelecterDataNumber[key].map((item, index) => {
                            const numBer = Number(item);
                            return tags[numBer];
                        });

                        value = dataListValueKeyTag;
                    }
                }

                return value;
            });

            const newData = listSelecterDataValue.flat();

            const resultData = data.filter((item) => {
                let isCheck;
                let listCheck = [
                    item.category,
                    item.status,
                    item.properties,
                    item.character,
                    item.background,
                    item.sect,
                    item.sight,
                    ...item.tagName,
                ].reduce((acc, item) => {
                    if (acc.indexOf(item) === -1) {
                        acc.push(item);
                    }
                    return acc;
                }, []);

                isCheck = newData.every((item) => {
                    return listCheck.includes(item);
                });

                return isCheck;
            });

            // console.log('listSelecterDataNumber: ', listSelecterDataNumber);
            // console.log('newData: ', newData);
            // console.log('resultData: ', resultData);

            return resultData;
        }
    } else {
        return data;
    }
}

function handlerGetDataWithRequest(req) {
    let data;
    const listData = [...listBookData];
    const { listRequest, location, listSelecter } = req;
    const { sort_by, tag, genre, status, prototypes } = listRequest;

    // console.group(sort_by || genre);
    // console.log('listRequest: ', listRequest);
    // console.log('listSelecter: ', listSelecter);
    // console.groupEnd();

    if (location.search) {
        if (sort_by) {
            if (sort_by === 'new_chap_at') {
                listData.sort((a, b) => {
                    const aitem = a.listChapter;
                    const bitem = b.listChapter;
                    const aUpdate = aitem[aitem.length - 1].timeCreatChapter;
                    const bUpdate = bitem[bitem.length - 1].timeCreatChapter;
                    const aTimeUpdate = new Date(aUpdate);
                    const bTimeUpdate = new Date(bUpdate);

                    return bTimeUpdate - aTimeUpdate;
                });
                // console.log('listData-new_chap_at: ', listData);
                data = listData;
                return data;
            } else if (sort_by === 'create_at') {
                listData.sort((a, b) => {
                    const aTime = new Date(a.timeCreateBook);
                    const bTime = new Date(b.timeCreateBook);

                    return bTime - aTime;
                });
                // console.log('listData-create_at: ', listData);
                data = listData;
                return data;
            } else if (sort_by.includes('view_') && location.search.includes('=view_')) {
                listData.sort((a, b) => {
                    const aItem = a.view;
                    const bItem = b.view;

                    return bItem - aItem;
                });

                // console.log('listData-view_: ', listData);
                data = listData;
                return data;
            } else if (sort_by.includes('review_')) {
                listData.sort((a, b) => {
                    const aItem = a.rankWeekRead;
                    const bItem = b.rankWeekRead;

                    return bItem - aItem;
                });
                // console.log('listData-review_: ', listData);
                data = listData;
                return data;
            } else if (sort_by === 'bookmark') {
                listData.sort((a, b) => {
                    const aItem = a.bookmark;
                    const bItem = b.bookmark;

                    return bItem - aItem;
                });
                // console.log('listData-bookmark: ', listData);
                data = listData;
                return data;
            } else if (sort_by === 'like') {
                listData.sort((a, b) => {
                    const aItem = a.like;
                    const bItem = b.like;

                    return bItem - aItem;
                });
                // console.log('listData-like: ', listData);
                data = listData;
                return data;
            } else if (sort_by.includes('vote')) {
                listData.sort((a, b) => {
                    const aItem = a.rankWeekNomination;
                    const bItem = b.rankWeekNomination;

                    return bItem - aItem;
                });
                // console.log('listData-vote: ', listData);
                data = listData;
                return data;
            } else if (sort_by === 'comment') {
                listData.sort((a, b) => {
                    const aItem = a.comment;
                    const bItem = b.comment;

                    return bItem - aItem;
                });
                // console.log('listData-comment: ', listData);
                data = listData;
                return data;
            } else if (sort_by === 'chapter') {
                listData.sort((a, b) => {
                    const aItem = a.totalChapter;
                    const bItem = b.totalChapter;

                    return bItem - aItem;
                });
                // console.log('listData-chapter: ', listData);
                data = listData;
                return data;
            }
        } else {
            const results = listData.filter((item) => {
                const index = Number(genre);
                const value = listSelecter.genre[index];
                return item.category === value;
            });

            return results;
        }
    } else {
        listData.sort((a, b) => {
            const aitem = a.listChapter;
            const bitem = b.listChapter;
            const aUpdate = aitem[aitem.length - 1].timeCreatChapter;
            const bUpdate = bitem[bitem.length - 1].timeCreatChapter;
            const aTimeUpdate = new Date(aUpdate);
            const bTimeUpdate = new Date(bUpdate);

            return bTimeUpdate - aTimeUpdate;
        });
    }

    data = listData;
    return data;
}

function handleCheckActive(type, itemSearch, data, listRequest, location, indexCur) {
    // if (type === 'update') {
    //     console.group('type: ', type);
    //     console.log('itemSearch: ', itemSearch);
    //     console.log('data: ', data);
    //     console.log('listRequest: ', listRequest);
    //     console.log('location: ', location);
    //     console.groupEnd();
    // }

    let isCheckActive = false;

    if (data.children) {
        if (location.search) {
            if (
                (Array.isArray(itemSearch) && !listRequest.sort_by && data.title === 'Mới cập nhật') ||
                (itemSearch === 'new_chap_at' && !listRequest.sort_by) ||
                (Array.isArray(itemSearch) && itemSearch.includes(listRequest.sort_by))
            ) {
                return true;
            }

            if (itemSearch === listRequest.sort_by) {
                return true;
            }
        } else {
            if (indexCur == 0 && type === 'update') {
                return true;
            }

            if (typeof itemSearch === 'object' && data.title === 'Mới cập nhật') {
                return true;
            }
        }
    } else {
        if (data.search === listRequest.sort_by) {
            return true;
        }
    }

    return isCheckActive;
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

function handlerSetDataWithPath(initData, listData, listRequest, listTags) {
    const requestKeys = Object.keys(listRequest);
    let results;

    results = requestKeys.reduce((acc, key) => {
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

function handleTopSideBarTitle(title, type, data, location, listRequest) {
    let result;

    // console.group('title: ', title);
    // console.log('type: ', type);
    // console.log('listRequest: ', listRequest);
    // console.log('data: ', data);
    // console.groupEnd();

    if (!location.search) {
        result = data.title;
    } else {
        const isCheck = data.search.includes(type);
        const index = data.search.indexOf(type);
        if (isCheck) {
            result = data.children[index];
        } else {
            result = data.title;
        }
    }

    return result;
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
    // console.group('idType: ', idType);
    // console.log('dataValues: ', dataValues);
    // console.log('location: ', location);
    // console.log('listRequest: ', listRequest);
    // console.log('itemIndex: ', itemIndex);
    // console.log('itemValue: ', itemValue);
    // console.groupEnd();

    let results = {};
    if (!location.search) {
        if (idType < 3) {
            const keyRequest = dataValues[idType];
            results = { sort_by: 'new_chap_at', [keyRequest]: itemIndex.toString() };
        } else {
            const tagIndex = listTag.indexOf(itemValue);
            results = { sort_by: 'new_chap_at', tag: tagIndex.toString() };
        }

        // if (idType === 'pagination') {
        //     results = { sort_by: 'new_chap_at', limit: 10, page: itemIndex + 1 };
        // }
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
            //  else if (idType === 'pagination') {
            //     results = { ...listRequest, sort_by: 'new_chap_at', limit: 10, page: itemIndex + 1 };
            // }
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
            // else if (idType === 'pagination') {
            //     results = { ...listRequest, sort_by: 'new_chap_at', limit: 10, page: itemIndex + 1 };
            // }
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

function handleTopSideBarSetPath(type, sortByValue, data, listRequest, location, onSetSearch) {
    // console.group('type: ', type);
    // console.log('sortByValue:', sortByValue);
    // console.log('data:', data);
    // console.log('listRequest: ', listRequest);
    // console.log('location: ', location);
    // console.groupEnd();
    let results;
    const keyRequests = Object.keys(listRequest);

    if (!location.search) {
        results = { sort_by: sortByValue };
    } else {
        const datas = keyRequests.reduce((acc, key) => {
            if (Object.keys(acc).length) {
                if (listRequest[key]) {
                    acc = { ...acc, [key]: listRequest[key] };
                }
            } else {
                acc = { ...listRequest, [key]: sortByValue };
            }

            return acc;
        }, {});

        results = Object.keys(datas).reduce((acc, key) => {
            if (datas[key]) {
                acc = { ...acc, [key]: datas[key] };
            }

            return acc;
        }, {});
    }

    onSetSearch(results);
}

function handleDeletePath(idItem, itemValue, data, listRequest, setSearchParams) {
    // console.group('idItem: ', idItem);
    // console.log('itemValue:', itemValue);
    // console.log('data:', data);
    // console.log('listRequest: ', listRequest);
    // console.groupEnd();

    const selectedKey = Object.keys(data).find((key) => {
        return key !== 'selected' && data[key].includes(itemValue);
    });

    const itemIndex = data[selectedKey].indexOf(itemValue);

    const dataSplit = listRequest[selectedKey].split(',');
    dataSplit.splice(itemIndex, 1);

    const result = Object.keys(listRequest).reduce((acc, key) => {
        if (Object.keys(acc).length) {
            if (listRequest[key]) {
                if (key === selectedKey) {
                    if (dataSplit.toString()) {
                        acc = { ...acc, [key]: dataSplit.toString() };
                    } else {
                        acc = { ...acc };
                    }
                } else {
                    acc = { ...acc, [key]: listRequest[key] };
                }
            }
        } else {
            if (listRequest[key]) {
                if (key === selectedKey) {
                    if (dataSplit.toString()) {
                        acc = { ...acc, [key]: dataSplit.toString() };
                    } else {
                        acc = { ...acc };
                    }
                } else {
                    acc = { [key]: listRequest[key] };
                }
            }
        }

        return acc;
    }, {});

    setSearchParams(result);
}

function handlerSetpathWitPagination(req, listRequest, location, setSearchParams) {
    const { limit, page } = req;
    const requestKey = Object.keys(listRequest);
    let pathValue;
    // console.group(listRequest.sort_by);
    // console.log('limit: ', limit);
    // console.log('page: ', page);
    // console.log('listRequest: ', listRequest);
    // console.log('location: ', location);
    // console.groupEnd();

    if (location.search) {
        if (listRequest.sort_by) {
            if (listRequest.limit && listRequest.page) {
                pathValue = requestKey.reduce((acc, key) => {
                    if (listRequest[key]) {
                        if (key !== 'limit' && key !== 'page') {
                            acc = { ...acc, [key]: listRequest[key] };
                        } else {
                            acc = { ...acc, [key]: req[key] };
                        }
                    }

                    return acc;
                }, {});
                setSearchParams(pathValue);
            } else {
                const dataPath = requestKey.reduce((acc, key) => {
                    if (listRequest[key]) {
                        acc = { ...acc, [key]: listRequest[key] };
                    }

                    return acc;
                }, {});
                pathValue = { ...dataPath, limit: limit, page: page };
                setSearchParams(pathValue);
            }
        } else {
            const dataPath = requestKey.reduce((acc, key) => {
                if (listRequest[key]) {
                    acc = { ...acc, [key]: listRequest[key] };
                }

                return acc;
            }, {});

            pathValue = { sort_by: 'new_chap_at', ...dataPath, limit: limit, page: page };
            setSearchParams(pathValue);
        }
    } else {
        pathValue = { sort_by: 'new_chap_at', limit: limit, page: page };
        setSearchParams(pathValue);
    }
}

function checkPath(prevPath, curPath) {
    let isCheck;
    const prevPathKeys = Object.keys(prevPath);
    isCheck = prevPathKeys.every((key) => {
        return prevPath[key] === curPath[key];
    });

    return isCheck;
}

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '');
    // Chuyển chữ hoa thành chữ thường
    str = str.toLowerCase();
    //Chuyển 2 khoảng trắng liên tiếp thành một
    str = str.replace(/  /g, ' ');
    // thêm - vào các hoảng trắng
    str = str.trim();
    str = str.replace(/ /g, '-');
    return str;
}

export {
    handleTime,
    handleGetRankWeekRead,
    handleGetRankWeekPrevailing,
    handleGetRankWeekNomination,
    handleGetBookById,
    handleGetUserById,
    handleCheckActive,
    handlerSetDataLeftBar,
    handlerSetDataWithPath,
    handleSortSelecter,
    handleTopSideBarTitle,
    handleLeftSideBarPath,
    handleTopSideBarSetPath,
    handleDeletePath,
    handlerGetDataWithRequest,
    handlerSelecedDataWithPath,
    handlerSetpathWitPagination,
    checkPath,
    removeVietnameseTones,
};
