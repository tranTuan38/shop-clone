import { useEffect, useState } from 'react';
import { listBookData, listRating, userData } from '~/initdata';
import imgs from '~/assets/imgs';
import {
    handleGetRankWeekRead,
    handleGetRankWeekPrevailing,
    handleGetRankWeekNomination,
    handleGetBookById,
    handleGetUserById,
    handleSortSelecter,
    handlerGetDataWithRequest,
} from '~/handler';

export const useGetCategory = () => {
    const [state, setState] = useState(() => {
        const category = listBookData.map((item, index) => {
            return [item.category, item.tagCategory];
        });

        const results = category.reduce((acc, book) => {
            const isCheck = acc.some((item, index) => {
                return book[1] === item[1];
            });

            if (!isCheck) {
                acc.push(book);
            }

            return acc;
        }, []);

        return results;
    });
    return [state, setState];
};

export const useGetBrgImg = () => {
    const [bgr, setBgr] = useState(() => {
        const bgrImgs = imgs.bgrImgs.map((item) => {
            return item.bgrImg;
        });

        return bgrImgs;
    });

    return [bgr, setBgr];
};

export const useGetProperties = () => {
    const [data, setData] = useState(() => {
        const results = [];
        const listProperty = listBookData.filter((item, index) => {
            return item.properties === 'Chọn lọc';
        });

        const newData = listProperty.slice(0, 8);

        while (newData.length) {
            results.push(newData.splice(0, 2));
        }

        return [listProperty, results];
    });
    return data;
};

export const useGetReadingBook = () => {
    const [data, setData] = useState(() => {
        const listReadingBook = listBookData.filter((item, index) => {
            return item.reading;
        });

        const newData = [...listReadingBook];
        newData.length = 5;

        return [listReadingBook, newData];
    });

    return data;
};

export const useGetCreateChater = () => {
    const [data, setData] = useState(() => {
        const listCreateChater = listBookData.reduce((acc, item, index) => {
            if (acc.length) {
                acc.push(item);
                acc.sort((a, b) => {
                    const aTime = new Date(a.listChapter[a.listChapter.length - 1].timeCreatChapter);
                    const bTime = new Date(b.listChapter[b.listChapter.length - 1].timeCreatChapter);

                    return bTime - aTime;
                });
                return acc;
            }

            return [...acc, item];
        }, []);

        const newData = listCreateChater.slice(0, 10);

        return newData;
    });

    return data;
};

export const useGetRankWeek = () => {
    const [data, setData] = useState(() => {
        const datas = [
            handleGetRankWeekRead(listBookData).slice(0, 10),
            handleGetRankWeekPrevailing(listBookData).slice(0, 10),
            handleGetRankWeekNomination(listBookData).slice(0, 10),
        ];

        return datas;
    });

    return data;
};

export const useGetRate = () => {
    const [data, setData] = useState(() => {
        const datas = listRating.filter((item) => {
            const rateItem = item.rating.some((overvalue) => {
                return overvalue.useRating === 5;
            });

            return rateItem;
        });

        const dataRating = datas.slice(0, 6);

        return dataRating;
    });

    return data;
};

export const useGetBookRating = (list) => {
    const [data, setData] = useState(() => {
        const result = [];
        const datas = listBookData.reduce((acc, item) => {
            let sumRating = 0;
            const dataItem = list.find((listItem) => {
                return listItem.idBook === item.idBook;
            });
            if (dataItem) {
                dataItem.rating.forEach((el) => {
                    if (el.useRating === 5) {
                        sumRating++;
                    }
                });

                acc = [...acc, [item, sumRating]];
                return acc;
            }

            return acc;
        }, []);

        const newData = [...datas];

        while (newData.length) {
            result.push(newData.splice(0, 2));
        }

        return result;
    });

    return data;
};

export const useGetComment = () => {
    const [data, setData] = useState(() => {
        let results;
        const datas = listRating.map((rate) => {
            const book = handleGetBookById(listBookData, rate.idBook);
            const user = handleGetUserById(rate.rating, userData);
            // console.log(rate.idBook, user);

            return { user, bookName: book.name };
        });

        datas.sort((a, b) => {
            const aEle = a.user[0].dataRating;
            const bEle = b.user[0].dataRating;
            const aTime = new Date(aEle[aEle.length - 1].time);
            const bTime = new Date(bEle[bEle.length - 1].time);

            return bTime - aTime;
        });

        results = datas.slice(0, 3);

        return results;
    });

    return data;
};

export const useGetAddNewBook = () => {
    const [data, setData] = useState(() => {
        const datas = listBookData.filter((item) => {
            return item.status === 'Đang ra';
        });

        datas.sort((a, b) => {
            const aTime = new Date(a.timeCreateBook);
            const bTime = new Date(b.timeCreateBook);

            return bTime - aTime;
        });

        const result = datas.slice(0, 10);

        return result;
    });

    return data;
};

export const useGetCompletedNewBook = () => {
    const [data, setData] = useState(() => {
        const result = [];
        const datas = listBookData.filter((item) => {
            return item.status === 'Hoàn thành';
        });

        datas.sort((a, b) => {
            const aTime = new Date(a.timeCreateBook);
            const bTime = new Date(b.timeCreateBook);

            return bTime - aTime;
        });

        let newData;

        newData = datas.slice(0, 6);

        while (newData.length) {
            result.push(newData.splice(0, 2));
        }

        return result;
    });

    return data;
};

export const useGetListSelecter = () => {
    const [state, setState] = useState(() => {
        const datas = listBookData.reduce((acc, item) => {
            if (Object.keys(acc).length) {
                return {
                    genre: handleSortSelecter(acc.genre, item.category),
                    status: handleSortSelecter(acc.status, item.status),
                    prototypes: handleSortSelecter(acc.prototypes, item.properties),
                    characters: handleSortSelecter(acc.characters, item.character),
                    backGrg: handleSortSelecter(acc.backGrg, item.background),
                    sects: handleSortSelecter(acc.sects, item.sect),
                    sights: handleSortSelecter(acc.sights, item.sight),
                };
            }

            return {
                genre: [item.category],
                status: [item.status],
                prototypes: [item.properties],
                characters: [item.character],
                backGrg: [item.background],
                sects: [item.sect],
                sights: [item.sight],
            };
        }, {});

        return datas;
    });

    return state;
};

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handle);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
};

export const useGetListBookByRequest = (request) => {
    const { sort_by, tag, genre, status, prototypes } = request;
    const [data, setData] = useState([]);

    useEffect(() => {}, [request]);

    return data;
};
