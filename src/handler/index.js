import {
    listBookData,
    listRating,
    userData,
    listUserBookMarks,
    listUserReadBook,
    listThemes,
    listFontFamily,
    listIcons,
    listUserInteracts,
} from '~/initdata';
import { constructors } from '~/constructors';
import { useGetListSelecter } from '~/hooks';

function handleTime(timeCur, timeItem) {
    const second = Math.floor((timeCur - timeItem) / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(day / 30);
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
    // console.log(data);
    let user = userData.map((item, index) => {
        const rateData = data.reduce((acc, ele) => {
            if (ele.idUser === item.id) {
                return [...acc, { comment: ele.comment, rate: ele.getTotalRate(), time: ele.time }];
            }

            return acc;
        }, []);

        rateData.sort((a, b) => {
            const aTime = new Date(a.time);
            const bTime = new Date(b.time);
            return aTime - bTime;
        });
        return { userId: item.id, userName: item.name, userAvata: item.avatar, dataRating: rateData };
    });

    user = user.filter((item) => item.dataRating.length);

    user.sort((a, b) => {
        const atime = new Date(a.dataRating[a.dataRating.length - 1]?.time);
        const btime = new Date(b.dataRating[b.dataRating.length - 1]?.time);

        return btime - atime;
    });

    return user;
}

function handleGetUserById1(data, userData) {}

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

            const lowerCaseString = (strs) => {
                const dataValues = strs.map((str) => {
                    return str.toLowerCase();
                });

                return dataValues;
            };

            const listCheckData = (data) => {
                const datasValue = [
                    data.category,
                    data.status,
                    data.properties,
                    data.character,
                    data.background,
                    data.sect,
                    data.sight,
                    ...data.tagName,
                ];

                const resultData = datasValue.reduce((acc, val) => {
                    if (!acc.includes(val.toLowerCase())) {
                        acc.push(val.toLowerCase());
                    }
                    return acc;
                }, []);

                return resultData;
            };

            const resultData = data.filter((item) => {
                let isCheck;
                let listCheck = [...listCheckData(item)].reduce((acc, item) => {
                    if (acc.indexOf(item) === -1) {
                        acc.push(item);
                    }
                    return acc;
                }, []);

                isCheck = newData.every((item) => {
                    return listCheck.includes(item.toLowerCase());
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
            // sort_by, tag, genre, status, prototypes
            let results;
            if (genre) {
                results = listData.filter((item) => {
                    const index = Number(genre);
                    const value = listSelecter.genre[index];
                    return item.category.toLowerCase() === value.toLowerCase();
                });

                return results;
            } else if (status) {
                results = listData.filter((item) => {
                    const index = Number(status);
                    const value = listSelecter.status[index];
                    return item.status.toLowerCase() === value.toLowerCase();
                });
                return results;
            } else if (tag) {
                const tags = [
                    ...listSelecter.characters,
                    ...listSelecter.backGrg,
                    ...listSelecter.sects,
                    ...listSelecter.sights,
                ];

                const lowerCaseString = (strs) => {
                    const dataValues = strs.map((str) => {
                        return str.toLowerCase();
                    });

                    return dataValues;
                };

                results = listData.filter((item) => {
                    const bookListTag = [
                        item.status.toLowerCase(),
                        item.category.toLowerCase(),
                        item.character.toLowerCase(),
                        item.sect.toLowerCase(),
                        item.sight.toLowerCase(),
                        item.background.toLowerCase(),
                        ...lowerCaseString(item.tagName),
                    ];
                    const index = Number(tag);
                    const value = tags[index];
                    return bookListTag.includes(value.toLowerCase());
                });
                return results;
            }
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

function removeVietnameseTones(str = '') {
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

function removeSpaceString(str = '', isRemoveSpace = false) {
    str = str.replace(/\r?\n/g, '');

    if (isRemoveSpace) {
        str = str.replace(/ + /g, ' ');
    }

    return str;
}

function handlerViewBookData(data) {
    let view;

    if (data) {
        if (typeof data === 'number') {
            view = data;
        } else {
            view = data.view;
        }
    } else {
        view = 0;
    }

    if (view < 1e3) {
        return view;
    } else if (view >= 1e3 && view < 1e6) {
        const setView = +(view / 1000).toFixed(2);
        return `${setView}K`;
    } else if (view >= 1e6 && view < 1e10) {
        const setView = +(view / 1000000).toFixed(2);
        return `${setView}M`;
    }
}

function handlerGetBookMediaData(rating, listComment, userData) {
    const listInfo = (data) => {
        let viewValue = handlerViewBookData(data);

        return {
            totalChapter: [data.totalChapter, 'Chương'],
            chapWithWeek: [Math.ceil(data.totalChapter / 75), 'Chương/tuần'],
            view: [viewValue, 'Lượt đọc'],
            keep: [data.rankWeekNomination, 'Cất giữ'],
        };
    };

    const setRating = (id) => {
        const bookRating = rating.find((item) => id === item.idBook);
        if (bookRating) {
            const bookRatingLength = bookRating.rating.length * 5;
            const totalRating = bookRating.rating.reduce((acc, rate) => {
                return acc + rate.getTotalRate();
            }, 0);

            const percentRate = (totalRating / bookRatingLength) * 100;

            return percentRate;
        } else {
            return 0;
        }
    };

    const setRate = (percent) => {
        let result;
        const mediumRate = (percent / 100) * 5;
        if (Number.isInteger(mediumRate)) {
            result = mediumRate;
        } else {
            result = mediumRate.toFixed(2);
            const dotNum = result.indexOf('.');
            const checkNum = result.slice(dotNum + 1);
            if (+checkNum % 10 === 0) {
                result = result.slice(0, dotNum + 2);
            } else {
                result = result.slice(0);
            }
        }

        return result;
    };

    const rateUser = (id) => {
        const bookRating = rating.find((item) => id === item.idBook);
        if (bookRating) {
            const bookRatingLength = bookRating.rating.length;
            return bookRatingLength;
        } else {
            return 0;
        }
    };

    const totalNumberUser = (id) => {
        const bookRating = rating.find((item) => id === item.idBook);
        if (bookRating) {
            const bookRatingLength = bookRating.rating.length;
            return bookRatingLength;
        } else {
            return 0;
        }
    };

    const getCommentById = (idBook) => {
        const book = listComment.find((item) => idBook === item.idBook);
        if (book) {
            if (book.listComment.length) {
                const dataUser = book.listComment.map((data) => {
                    const userInfo = userData.find((user) => user.id === data.idUser);

                    return { ...data, name: userInfo.name, level: userInfo.level, avatar: userInfo.avatar };
                });

                return dataUser;
            }
        }

        return [];
    };

    return { listInfo, setRating, setRate, rateUser, totalNumberUser, getCommentById };
}

const handlerSetLink = () => {
    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    const formatName = (name) => {
        return removeVietnameseTones(name);
    };

    const genreLink = (value, type, listGenre) => {
        let indexValue;

        indexValue = listGenre.findIndex((item) => {
            return item.toLowerCase() === value.toLowerCase();
        });

        return `/list-book/?${type}=${indexValue}`;
    };

    const authorLink = (type, value, listAuthor) => {
        let author = listAuthor.find((item) => item.name.toLowerCase() === value.toLowerCase());

        if (author) {
            return `/author/${author.idAuthor}`;
        }
    };

    return { formatLink, genreLink, formatName, authorLink };
};

const handlerSetDataSubIntro = (data, userData, listRank, onSetTime) => {
    const getNewChapter = () => {
        const curTime = new Date();

        const chap = data.listChapter;
        const newChap = chap[chap.length - 1];
        const chapName = newChap.nameChapter;
        const chapNumber = newChap.numberChapter;
        const timeChap = new Date(newChap.timeCreatChapter);

        // console.log(timeChap);

        return {
            chapNumber: `chuong-${chapNumber}`,
            chapValue: `Chương${chapNumber}: ${chapName}`,
            time: onSetTime(curTime, timeChap),
        };
    };

    const getRankNomination = () => {
        const listRank = [...listBookData];
        listRank.sort((a, b) => {
            const aRank = a.rankWeekNomination;
            const bRank = b.rankWeekNomination;

            return bRank - aRank;
        });

        const rankNum = listRank.findIndex((item, index) => item.idBook === data.idBook);

        return rankNum + 1;
    };

    const getUserData = () => {
        const user = userData.find((item) => {
            return item.name === data.poster;
        });

        return { ...user, rank: listRank[user.level - 1] };
    };

    const userTotalPost = () => {
        const userListBook = listBookData.filter((item) => item.poster.toLowerCase() === data.poster.toLowerCase());
        const totalBook = userListBook.length;
        const totalChap = userListBook.reduce((acc, item) => {
            return (acc = acc + item.totalChapter);
        }, 0);

        return { totalBook, totalChap };
    };

    const userListPostData = () => {
        let datas;
        const userListBook = listBookData.filter((item) => item.poster.toLowerCase() === data.poster.toLowerCase());
        if (userListBook.length) {
            const listBookLength = userListBook.length;
            userListBook.sort((a, b) => {
                const aBook = a.view;
                const bBook = b.view;

                return bBook - aBook;
            });

            if (listBookLength <= 10) {
                return userListBook;
            } else {
                datas = userListBook.slice(0, 10);
                return datas;
            }
        }

        return userListBook;
    };

    const getListAuthorData = () => {
        const listAuthor = listBookData.reduce((acc, item) => {
            if (!acc.includes(item.authorName)) {
                acc.push(item.authorName);
            }
            return acc;
        }, []);
    };

    const getListBookWithAuthor = () => {
        const listBook = listBookData.filter((item) => item.authorName === data.authorName);
        listBook.sort((a, b) => {
            const aBook = a.view;
            const bBook = b.view;

            return bBook - aBook;
        });

        if (listBook.length <= 5) {
            return listBook;
        } else {
            const datas = listBook.slice(0, 5);
            return datas;
        }
    };

    const setDescription = (value) => {
        const dataValue = value.slice(0, 110);

        return `

        ${dataValue}...

    `;
    };

    return {
        getNewChapter,
        getRankNomination,
        getUserData,
        userTotalPost,
        userListPostData,
        getListAuthorData,
        getListBookWithAuthor,
        setDescription,
    };
};

function getListRatingForBook(id) {
    let data;
    const bookData = listRating.find((book) => {
        return book.idBook === id;
    });

    if (bookData) {
        const rateLength = bookData.rating.length;
        data = bookData.rating.reduce((acc, rate) => {
            if (acc.character) {
                acc = {
                    character: acc.character + rate.rateCharacter,
                    story: acc.story + rate.rateContent,
                    background: acc.background + rate.rateBgr,
                    totalRate: acc.totalRate + rate.getTotalRate(),
                };

                return acc;
            }

            acc = {
                character: rate.rateCharacter,
                story: rate.rateContent,
                background: rate.rateBgr,
                totalRate: rate.getTotalRate(),
            };

            return acc;
        }, {});

        Object.keys(data).forEach((key) => {
            const numValue = (data[key] / rateLength).toFixed(2);
            data[key] = numValue;
        });

        return data;
    } else {
        return {
            character: 0,
            story: 0,
            background: 0,
            totalRate: 0,
        };
    }
}

function SetPersonRatingForBook(rateNum) {
    if (+rateNum) {
        const percent = +rateNum * 20;
        return percent;
    } else {
        return 0;
    }
}

function handlerCheckSelected() {
    const setDataByValue = (data, type) => {
        if (type) {
            if (type === 'oldest') {
                return data.sort((a, b) => {
                    const aTime = new Date(a.time);
                    const bTime = new Date(b.time);

                    return aTime - bTime;
                });
            } else {
                return data.sort((a, b) => {
                    const aTime = new Date(a.time);
                    const bTime = new Date(b.time);

                    return bTime - aTime;
                });
            }
        } else {
            return data.sort((a, b) => b.cmtLike - a.cmtLike);
        }
    };

    const checkData = (type, listDataCmt) => {
        let newData = [...listDataCmt];
        if (type === 'like_count') {
            return setDataByValue(newData);
        } else if (type === 'id') {
            return setDataByValue(newData, 'new');
        } else if (type === 'oldest') {
            return setDataByValue(newData, 'oldest');
        }
    };

    return { setDataByValue, checkData };
}

function handlerSetFanData(data) {
    const newData = [...data];

    newData.sort((a, b) => {
        const aPoint = a.point;
        const bPoint = b.point;

        return bPoint - aPoint;
    });

    const users = newData.reduce((acc, item, index) => {
        const user = userData.find((ele) => item.userId === ele.id);
        if (user) {
            return [
                ...acc,
                {
                    userId: item.userId,
                    top: index + 1,
                    userName: user.name,
                    userAvatar: user.avatar,
                    userPoint: item.point,
                },
            ];
        }

        return acc;
    }, []);

    return users;
}

function handlerSetFanLevel(point = 0) {
    const listLevelpoint = [1000000, 700000, 500000, 400000, 300000, 200000, 100000, 50000, 20000, 5000, 0];
    const listLevelName = [
        'Minh chủ',
        'Tông chủ',
        'Chưởng môn',
        'Trửng lão',
        'Hộ pháp',
        'Đường chủ',
        'Đà chủ',
        'Chấp sự',
        'Đệ tử',
        'Học đồ',
        'Không',
    ];

    const level = listLevelpoint.findIndex((item) => point >= item);

    return listLevelName[level];
}

function handlerGetDataUserInfo(userData) {
    const handlerGetLevelPoint = (level) => {
        if (!level) {
            return 0;
        }

        if (level === 1) {
            return 10;
        } else if (level === 2) {
            return 100;
        } else if (level === 3) {
            return 1000;
        } else if (level === 4) {
            return 10000;
        } else if (level === 5) {
            return 100000;
        }
    };

    const handlerSetExp = (level) => {
        const levelPoint = handlerGetLevelPoint(level);
        if (userData.exp) {
            return `Exp: ${userData.exp}/${levelPoint}`;
        }
        return `Exp: 0/${levelPoint}`;
    };

    const handlerSetWidthExp = (point, level) => {
        const maxPoint = handlerGetLevelPoint(level);
        const percent = (point / maxPoint) * 100;
        if (percent <= 35) {
            return `35%`;
        } else {
            return `${percent}%`;
        }
    };

    return [handlerGetLevelPoint, handlerSetExp, handlerSetWidthExp];
}

function handlerGetListUserRead(id) {
    const data = listBookData.find((item) => item.idBook === id);

    if (data) {
        return data;
    }
}

function handlerSetUserLogin(data) {
    const { userEmail, userPassword } = data;

    const isLogin = userData.some(
        (user) => user.email.trim() === userEmail.trim() && user.password.trim() === userPassword.trim(),
    );

    return isLogin;
}

function handlerGetUserDataLogin(data) {
    const { userEmail, userPassword } = data;

    const user = userData.find(
        (user) => user.email.trim() === userEmail.trim() && user.password.trim() === userPassword.trim(),
    );

    if (user) {
        return user;
    }

    return {};
}

function handlerSetValueFormGroup(type, data) {
    const groupIds = ['name', 'birthday', 'sex', 'description', 'email'];

    const indexValue = groupIds.findIndex((item) => type === item);
    if (Number.isInteger(indexValue)) {
        if (indexValue === 0) {
            return data.name;
        } else if (indexValue === 1) {
            return data.birthday;
        } else if (indexValue === 2) {
            return data.sex;
        } else if (indexValue === 3) {
            return data.description;
        } else if (indexValue === 4) {
            return data.email;
        }
    }

    return '';
}

function handlerChangeUserData(idUser, key, dataChange) {
    let isUserName = false;
    let isName = false;
    const userIndex = userData.findIndex((user) => user.id === idUser);

    if (key === 'name') {
        isUserName = userData.some((user) => user.id !== idUser && user.name.trim() === dataChange);
        if (isUserName) {
            alert(`${dataChange} đã tồn tại, vui lòng nhập tên khác`);
            return (isName = true);
        }
    }

    if (Number.isInteger(userIndex) && !isUserName) {
        userData[userIndex][key] = dataChange;
        // alert('Cập nhật thành công!');
        // console.log(userData[userIndex][key]);
    }
}

function handlerChangePosterName(prevName, curName) {
    listBookData.forEach((book, index) => {
        if (book.poster === prevName) {
            listBookData[index].poster = curName;
        }
    });
}

function handlerGetBookReadData(type, idUser) {
    let data;
    if (type === 'reading') {
        const user = listUserReadBook.find((item) => item.idUser === idUser);
        if (user) {
            data = user.read.map((book) => {
                const bookData = listBookData.find((item) => item.idBook === book.idBook);

                return {
                    ...book,
                    bookImg: bookData.bookImg,
                    bookName: bookData.name,
                    totalChapter: bookData.totalChapter,
                };
            });

            return data;
        }
    } else if (type === 'mark') {
        const user = listUserBookMarks.find((item) => item.idUser === idUser);
        if (user) {
            data = user.read.map((book) => {
                const bookData = listBookData.find((item) => item.idBook === book.idBook);

                return {
                    ...book,
                    bookImg: bookData.bookImg,
                    bookName: bookData.name,
                    totalChapter: bookData.totalChapter,
                };
            });

            return data;
        }
    }
}

function handlerDeleteBookReadData(type, idBook, idUser) {
    if (type === 'reading') {
        const user = listUserReadBook.find((item) => item.idUser === idUser);
        const userIndex = listUserReadBook.findIndex((item) => item.idUser === idUser);
        if (user) {
            const bookIndex = user.read.findIndex((item) => item.idBook === idBook);
            listUserReadBook[userIndex].read.splice(bookIndex, 1);
        }
    } else if (type === 'mark') {
        const user = listUserBookMarks.find((item) => item.idUser === idUser);
        const userIndex = listUserBookMarks.findIndex((item) => item.idUser === idUser);
        if (user) {
            const bookIndex = user.read.findIndex((item) => item.idBook === idBook);
            listUserBookMarks[userIndex].read.splice(bookIndex, 1);
        }
    }
}

function handlerSetPathNavBar(type, path, location, prevPath) {
    // console.log('type: ', type);
    // console.log('path: ', path);
    // console.log('location: ', location);

    const { pathname } = location;

    if (type === 'class') {
        const slashIndex = pathname.lastIndexOf('/');
        const prevClass = pathname.slice(slashIndex + 1);
        const curPath = pathname.replace(prevClass, path);
        return curPath;
    } else if (type === 'time') {
        const slashIndex = pathname.indexOf('/', 1);
        const slashIndex2 = pathname.indexOf('/', slashIndex + 2);
        const prevClass = pathname.slice(slashIndex + 1, slashIndex2);
        const curPath = pathname.replace(prevClass, path);
        return curPath;
    }
}

function handlerGetDataBxh(type) {
    let data = [...listBookData];

    const handlerAddRank = (listData) => {
        listData.forEach((book, index) => {
            book.rankBxh = index;
        });
    };

    if (type === 'popular') {
        data.sort((a, b) => {
            return b.rankWeekPrevailing - a.rankWeekPrevailing;
        });
        handlerAddRank(data);
    } else if (type === 'top-read') {
        data.sort((a, b) => {
            return b.view - a.view;
        });
        handlerAddRank(data);
    } else if (type === 'bonus') {
        data.sort((a, b) => {
            return b.bookmark - a.bookmark;
        });
        handlerAddRank(data);
    } else if (type === 'nomination') {
        data.sort((a, b) => {
            return b.rankWeekNomination - a.rankWeekNomination;
        });
        handlerAddRank(data);
    } else if (type === 'like') {
        data.sort((a, b) => {
            return b.like - a.like;
        });
        handlerAddRank(data);
    } else if (type === 'discuss') {
        data.sort((a, b) => {
            return b.comment - a.comment;
        });
        handlerAddRank(data);
    }

    return data;
}

function handlerGetDataForIcon(type, item) {
    let data;

    if (type === 'popular') {
        data = item.rankWeekPrevailing;
    } else if (type === 'top-read') {
        data = item.view;
    } else if (type === 'bonus') {
        data = item.bookmark;
    } else if (type === 'nomination') {
        data = item.rankWeekNomination;
    } else if (type === 'like') {
        data = item.like;
    } else if (type === 'discuss') {
        data = item.comment;
    }

    return data;
}

function handlerGetChapterData(bookName, chapter, userData) {
    // console.log('bookName: ', bookName);
    // console.log('chapter: ', chapter);

    const book = listBookData.find((item) => {
        const bookNameFind = removeVietnameseTones(item.name);

        return bookNameFind === bookName;
    });

    if (book) {
        let result;
        const listChapterLength = book.listChapter.length;
        const numberChap = +chapter.slice(chapter.indexOf('-') + 1);
        const chapterData = book.listChapter.find((item) => item.numberChapter === numberChap);
        const firstChapter = book.listChapter.some((item, index) => index === 0 && item.numberChapter === numberChap);
        const lastChapter = book.listChapter.some(
            (item, index) => index === listChapterLength - 1 && item.numberChapter === numberChap,
        );

        result = {
            idBook: book.idBook,
            idUser: undefined,
            bookName: book.name,
            author: book.authorName,
            poster: book.poster,
            bookImg: book.bookImg,
            ...chapterData,
            firstChapter,
            lastChapter,
            listChapter: book.listChapter,
            getTotalFeel() {
                const feelValue = Object.values(this.feels);
                const totalFeel = feelValue.reduce((sum, value) => sum + value, 0);

                return totalFeel;
            },
        };

        if (chapterData) {
            if (Number.isInteger(userData?.id)) {
                result = { ...result, idUser: userData.id };
            }

            return result;
        }
    }
}

function handlerGetPostData(userName) {
    const user = userData.find((item) => item.name === userName);

    if (user) {
        return user;
    }

    return 1;
}

function handlerSetMenuSetting(type, isArray) {
    let result;
    if (isArray) {
        if (type === 'themes') {
            result = {
                tagParent: 'div',
                tagChild: 'button',
            };
        } else if (type === 'fontFamily') {
            result = {
                tagParent: 'select',
                tagChild: 'option',
            };
        }
    }

    return result;
}

function handlerGetSetting(data) {
    const newData = { ...data };
    const theme = { ...listThemes.find((item) => newData.themes === item.id) };
    const fontFamily = { ...listFontFamily.find((item) => newData.fontFamily === item.id) };

    delete theme.id;
    delete fontFamily.id;
    delete fontFamily.title;
    delete newData.themes;
    delete newData.fontFamily;
    newData.fontSize = newData.fontSize + 'px';
    newData.widthContent = newData.widthContent + 'px';
    newData.paddingWord = newData.paddingWord + '%';

    return { ...theme, ...fontFamily, ...newData };
}

function handlerSetChangeSettings(prevValue, action, min, max, step) {
    if (prevValue === min || prevValue === max) {
        if (prevValue === min && action === 'minus') {
            return;
        } else if (prevValue === max && action === 'add') {
            return;
        }
    }
    if (action === 'add') {
        return prevValue + step;
    } else if (action === 'minus') {
        return prevValue - step;
    }
}

function handlerSetIconNavChap(isLogin, bookData, prevIcon) {
    if (isLogin) {
        const user = listUserReadBook.find((item) => item.idUser === bookData.idUser);
        const books = user.read.find((book) => book.idBook === bookData.idBook);

        if (books) {
            const chapter = books.chapter.find((chap) => chap.number === bookData.numberChapter);
            const icons = listIcons.find((item) => chapter.feel === item.idIcon);
            return { idIcon: icons.idIcon, url: `url(${icons.icon})` };
        }

        return prevIcon;
    }
}

function handlerChangeIconData(idIcon, bookData) {
    const user = listUserReadBook.find((item) => item.idUser === bookData.idUser);
    const books = user.read.find((book) => book.idBook === bookData.idBook);

    if (books) {
        const chapter = books.chapter.find((chap) => chap.number === bookData.numberChapter);
        if (chapter) {
            chapter.feel = idIcon;
        }
    }
}

function handlerLocalStorage() {
    const setData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const getData = (key) => {
        const result = JSON.parse(localStorage.getItem(key));

        return result;
    };

    const removeData = (key) => {
        localStorage.removeItem(key);
    };

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    return { setData, getData, removeData, clearLocalStorage };
}

function handlerGetLocalData(idBook, action) {
    const READING = 'reading';
    const { getData } = action;
    const curReadings = getData(READING);

    if (curReadings) {
        return curReadings[idBook];
    } else {
        return undefined;
    }
}

function handlerChangeBookLink(data) {
    if (data) {
        return data.numBerFormat;
    } else {
        return 'chuong-1';
    }
}

function handlerSaveLocalData(data, localData, action) {
    const READING = 'reading';
    const { getData, setData } = action;
    const { readingData } = constructors;
    const curReadings = getData(READING);
    const idBook = data.idBook;

    if (curReadings) {
        let book;
        let saveData;
        const isBook = curReadings[idBook];
        if (isBook) {
            if (data.numberChapter === localData.numberChapter && isBook.numberChapter === data.numberChapter) return;

            saveData = { ...curReadings, [idBook]: localData };
            setData(READING, saveData);
        } else {
            book = new readingData(data.idChapter, data.numberChapter, data);
            saveData = { ...curReadings, [idBook]: book };
            setData(READING, saveData);
        }
    } else {
        const chapter = new readingData(data.idChapter, data.numberChapter, data);
        const results = { [idBook]: chapter };
        setData(READING, results);
    }
}

function handlerGetRatingLength(idBook) {
    const bookRating = listRating.find((item) => item.idBook === idBook);

    if (bookRating) {
        const userRatingLength = bookRating.rating.length;
        return userRatingLength || 0;
    }

    return 0;
}

function handlerCheckRatingCmt(idBook, idUser) {
    // console.log('idBook: ', idBook);

    // console.log('idUser: ', bookRating);
    const bookRating = listRating.find((item) => item.idBook === idBook);

    if (bookRating) {
        const userRating = bookRating.rating.find((user) => user.idUser === idUser);
        return userRating ? true : false;
    }

    return false;
}

function handlerCheckLike(type, idBook, idUser, idUserLogin, scope) {
    const listType = ['rate', 'comment', 'navRate', 'navComment'];

    const userData = listUserInteracts.find((user) => user.idUser === idUserLogin);

    if (userData) {
        const dataType = userData.interacts[listType[type]];

        if (dataType) {
            let isCheck;
            const result = dataType.find((value) => value.idBook === idBook);
            if (Number.isInteger(scope)) {
                isCheck = result?.data?.some((data) => data.id === idUser && data.scope === scope);
            } else {
                isCheck = result?.data?.some((data) => data.id === idUser);
            }

            return isCheck ? isCheck : false;
        }
    }

    return false;
}

function handlerGetlistUserInteracts(type, idBook, idUser, idRepIndex, scope) {
    const listType = ['rate', 'comment', 'navRate', 'navComment'];
    if (Number.isInteger(type)) {
        const bookFind = listUserInteracts.filter((data) => {
            const dataType = data.interacts[listType[type]];
            const isData = dataType.find((book) => book.idBook === idBook);

            return isData;
        });
        if (type === 0) {
            if (bookFind.length) {
                const results = bookFind.reduce((acc, data) => {
                    const dataType = data.interacts[listType[type]];
                    const books = dataType.find((book) => book.idBook === idBook);
                    const isRate = books?.data.some((user) => user.id === idUser);

                    if (isRate) {
                        return acc + 1;
                    }

                    return acc;
                }, 0);

                return results;
            }

            return 0;
        } else if (type === 1) {
        } else if (type === 2) {
            if (bookFind.length) {
                const results = bookFind.reduce((acc, data) => {
                    const dataType = data.interacts[listType[type]];
                    const books = dataType.find((book) => book.idBook === idBook);
                    const isRate = books?.data.some(
                        (user) => user.id === idUser && user.idIndex === idRepIndex && user.scope === scope,
                    );

                    if (isRate) {
                        return acc + 1;
                    }

                    return acc;
                }, 0);

                return results;
            }

            return 0;
        } else if (type === 3) {
        }
    }

    return 0;
}

function handlerPustData(type, idBook, idUser, content = {}) {
    const listType = ['rate', 'comment', 'navRate', 'navComment'];

    const { UserRating, UserNavRate } = constructors;

    // console.log(listUserInteracts);

    if (type === 0) {
        const rating = new UserRating({
            idUser,
            totalViewChapter: 1,
            rateCharacter: content.rateCharacter || 0,
            rateContent: content.rateContent || 0,
            rateBgr: content.rateBgr || 0,
            spoli: content.spoli,
            comment: content.comment,
        });

        const bookRating = listRating.find((item) => item.idBook === idBook);
        if (bookRating) {
            const userRating = bookRating.rating.find((user) => user.idUser === idUser);
            if (userRating) {
                return;
            }
            bookRating.rating.push({ ...rating });
            return { ...rating };
        } else {
            listRating.push({ idBook, rating: [{ ...rating }] });
            return { ...rating };
        }
    } else if (type === 1) {
    } else if (type === 2) {
        const navRates = {
            ...new UserNavRate({
                id: content.id,
                idReplyIndex: content.idReplyIndex,
                time: content.time,
                repCmt: content.repCmt,
            }),
        };

        const bookRating = listRating.find((item) => item.idBook === idBook);
        const userRating = bookRating?.rating.find((user) => user.idUser === idUser);

        // console.log(userRating);

        if (userRating) {
            userRating.userReply.push(navRates);
            // console.log(userRating);
            return navRates;
        }
    } else if (type === 3) {
    }
}

function handlerDeleteUserInteracts(type, idBook, idUser) {
    const listType = ['rate', 'comment'];

    // console.log(listUserInteracts);

    if (Number.isInteger(type)) {
        if (type === 0) {
            const bookFind = listUserInteracts.filter((data) => {
                const dataType = data.interacts[listType[type]];
                const isData = dataType.find((book) => book.idBook === idBook);

                return isData && data.idUser !== idUser;
            });

            // console.log(bookFind);

            if (bookFind.length) {
                bookFind.forEach((book) => {
                    const bookType = book.interacts[listType[type]];
                    const bookData = bookType.find((book) => book.idBook === idBook);
                    const deleteIndex = bookData.data.findIndex((user) => user.id === idUser);
                    if (Number.isInteger(deleteIndex)) {
                        bookData.data.splice(deleteIndex, 1);
                    }
                    // console.log(bookData);
                });
            }

            return;
        }
    }
}

function handlerDeleteData(type, idBook, idUser) {
    if (type === 'rating') {
        const bookRating = listRating.find((item) => item.idBook === idBook);
        let ListRatingLengthPrev = bookRating?.rating.length;
        let listRatingLengthCur;

        // console.log('bookRating: ', bookRating);

        if (bookRating) {
            const userIndex = bookRating.rating.findIndex((user) => user.idUser === idUser);

            if (Number.isInteger(userIndex)) {
                // console.log('ListRatingLengthPrev: ', ListRatingLengthPrev);
                // console.log('listRating: ', listRating);
                // console.log('bookRating: ', bookRating);
                if (ListRatingLengthPrev === 1) {
                    const bookRatingIndex = listRating.findIndex((book) => book.idBook === idBook);

                    // console.log(bookRatingIndex);
                    listRating.splice(bookRatingIndex, 1);
                    listRatingLengthCur = 0;
                } else {
                    bookRating.rating.splice(userIndex, 1);
                    listRatingLengthCur = bookRating.rating.length;
                }
                handlerDeleteUserInteracts(0, idBook, idUser);

                // console.log('ratingCur: ', ratingCur);
            }

            if (ListRatingLengthPrev !== listRatingLengthCur) {
                return true;
            } else {
                return false;
            }
        }
    }
}

function handlerInteractData(type, idBook, idUser, idUserLogin, action, repIndex, scope) {
    const listType = ['rate', 'comment', 'navRate', 'navComment'];
    const listInteract = ['like', 'disLike', 'reply'];
    const { UserInteract } = constructors;
    const userData = listUserInteracts.find((user) => user.idUser === idUserLogin);

    let payLoad = { message: '', isResult: false };
    // 1. khi bạn đã like cmt này -> false
    // 2. khi bạn chưa like cmt này -> ...

    // console.log(userData);

    if (idUser === idUserLogin) return { ...payLoad, message: 'Bạn không thể thực hiện hành đông này với bản thân.' };

    if (userData) {
        const interactData = userData.interacts[listType[type]];
        const bookData = interactData.find((book) => book.idBook === idBook);

        // console.log('idUserLogin: ', idUserLogin);
        // console.log('idUser: ', idUser);
        // console.log('bookData: ', bookData);
        // console.log(listType[type], ':', interactData);

        if (bookData) {
            // console.log(listUserInteracts);

            if (type === 0) {
                if (action === 0) {
                    bookData.data.push({ id: idUser, time: +new Date() });
                    return { ...payLoad, isResult: true };
                } else if (action === 1) {
                    const dataIndex = bookData.data.findIndex((item) => item.id === idUser);

                    if (Number.isInteger(dataIndex) && dataIndex >= 0) {
                        bookData.data.splice(dataIndex, 1);
                        return { ...payLoad, isResult: true };
                    }
                    return { message: 'Có lỗi xảy ra. Thao tác không thành công', isResult: false };
                }
            } else if (type === 1) {
            } else if (type === 2) {
                // Không có hành động thứ 3
                // console.group('action: ', listInteract[action]);
                // console.log('repIndex: ', repIndex);
                // console.log('idUserLogin: ', idUserLogin);
                // console.log('idUser: ', idUser);
                // console.log('bookData: ', bookData);
                // console.log(listType[type], ':', interactData);
                // console.groupEnd();

                if (action === 0) {
                    bookData.data.push({ id: idUser, idIndex: repIndex, time: +new Date(), scope });
                    // console.log('bookData.data: ', bookData.data);
                    return { ...payLoad, isResult: true };
                } else if (action === 1) {
                    const deleteIndex = bookData.data.findIndex(
                        (item) => item.id === idUser && item.idIndex === repIndex && item.scope === scope,
                    );

                    if (Number.isInteger(deleteIndex) && deleteIndex >= 0) {
                        bookData.data.splice(deleteIndex, 1);
                        // console.log('bookData.data: ', bookData.data);
                        return { ...payLoad, isResult: true };
                    }

                    return { message: 'Có lỗi xảy ra. Thao tác không thành công', isResult: false };
                }
            }

            return payLoad;
        } else {
            // Khi không có bookData
            if (type === 0) {
                const newBook = {
                    idBook,
                    data: [{ id: idUser, time: +new Date() }],
                };

                interactData.push(newBook);
                return { ...payLoad, isResult: true };
            } else if (type === 1) {
            } else if (type === 2) {
                const newBook = {
                    idBook,
                    data: [{ id: idUser, idIndex: repIndex, time: +new Date(), scope }],
                };

                interactData.push(newBook);
            } else if (type === 3) {
            }
        }
    } else {
        // Khi không có userData
        let rateData = [];
        let commentData = [];
        let navRateData = [];
        let navCommentData = [];

        if (type === 0) {
            rateData = [
                {
                    idBook,
                    data: [{ id: idUser, time: +new Date() }],
                },
            ];
        } else if (type === 1) {
        } else if (type === 2) {
            navRateData = [
                {
                    idBook,
                    data: [{ id: idUser, idIndex: repIndex, time: +new Date(), scope }],
                },
            ];
        } else if (type === 3) {
        }

        const userInteractData = {
            idUser: idUserLogin,
            rate: rateData,
            comment: commentData,
            navRate: navRateData,
            navComment: navCommentData,
        };
        const interactDatas = { ...new UserInteract(userInteractData) };
        listUserInteracts.push(interactDatas);

        // console.log(listUserInteracts);

        return { ...payLoad, isResult: true };
    }
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
    removeSpaceString,
    handlerViewBookData,
    handlerGetBookMediaData,
    handlerSetLink,
    handlerSetDataSubIntro,
    getListRatingForBook,
    SetPersonRatingForBook,
    handlerCheckSelected,
    handlerSetFanLevel,
    handlerSetFanData,
    handlerGetDataUserInfo,
    handlerGetListUserRead,
    handlerSetUserLogin,
    handlerGetUserDataLogin,
    handlerSetValueFormGroup,
    handlerChangeUserData,
    handlerChangePosterName,
    handlerGetBookReadData,
    handlerDeleteBookReadData,
    handlerSetPathNavBar,
    handlerGetDataBxh,
    handlerGetDataForIcon,
    handlerGetChapterData,
    handlerGetPostData,
    handlerSetMenuSetting,
    handlerGetSetting,
    handlerSetChangeSettings,
    handlerSetIconNavChap,
    handlerChangeIconData,
    handlerSaveLocalData,
    handlerLocalStorage,
    handlerChangeBookLink,
    handlerGetLocalData,
    handlerCheckRatingCmt,
    handlerDeleteData,
    handlerPustData,
    handlerGetRatingLength,
    handlerInteractData,
    handlerCheckLike,
    handlerGetlistUserInteracts,
};
