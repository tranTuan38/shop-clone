import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';

import { listBookData, listRating, userData, listAuthors, listUserReadBook } from '~/initdata';
import { handlerGetUserDataLogin } from '~/handler';
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
import { StoreContext } from '~/components/store';

export const useViewport = () => {
    const [isViewport, setIsViewport] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleWindowResize = () => {
            // const isCheck = window.innerWidth <= 1024
            // const scrollBarWidth =  document.documentElement.offsetHeight - document.documentElement.clientWidth
            setIsViewport(window.innerWidth <= 1024);
            // || document.documentElement.clientWidth <= 1024
        };
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return isViewport;
};

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

export const useGetProperties = (num) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const results = [];
        const listProperty = listBookData.filter((item, index) => {
            return item.properties === 'Chọn lọc';
        });
        listProperty.sort((a, b) => {
            return a.idBook - b.idBook;
        });
        const newData = listProperty.slice(0, 8);
        while (newData.length) {
            results.push(newData.splice(0, 2));
        }

        setData([listProperty, results]);
    }, []);

    return data;
};

export const useGetReadingBook = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const listReadingBook = listBookData.filter((item, index) => {
            return item.reading;
        });
        listReadingBook.sort((a, b) => {
            return a.idBook - b.idBook;
        });
        const newData = [...listReadingBook];
        newData.length = 5;
        setData([listReadingBook, newData]);
    }, []);

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
                return overvalue.getTotalRate() === 5;
            });

            return rateItem;
        });

        const dataRating = datas.slice(0, 6);

        return dataRating;
    });

    // console.log(data);

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
                    if (el.getTotalRate() === 5) {
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
    const [data, setData] = useState([]);

    useEffect(() => {
        let results;
        // console.log(listRating);
        const datas = listRating.map((rate, i) => {
            const book = handleGetBookById(listBookData, rate.idBook);
            const user = handleGetUserById(rate.rating, userData);

            // console.group(i);
            // console.log('Book :', book.name);
            // console.log('User :', user);
            // console.groupEnd();

            return { user, bookName: book.name };
        });

        // console.log(datas);

        datas.sort((a, b) => {
            const aEle = a.user[0].dataRating;
            const bEle = b.user[0].dataRating;
            const aTime = new Date(aEle[aEle.length - 1]?.time);
            const bTime = new Date(bEle[bEle.length - 1]?.time);

            return bTime - aTime;
        });

        results = datas.slice(0, 3);

        setData(results);
    }, []);

    // console.log(data);

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

export const useGetAuthorData = (id) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const author = listAuthors.find((item) => item.idAuthor === id);

        if (author) {
            const bookDatas = listBookData.filter(
                (item) => item.authorName.toLowerCase() === author.name.toLowerCase(),
            );
            const authorData = { ...author, books: bookDatas };
            setData(authorData);
        }
    }, [id]);

    return data;
};

export const useGetUserAction = (id) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const user = userData.find((item) => id === item.id);
        if (user) {
            const userRead = listUserReadBook.find((item) => id === item.idUser);
            const userPost = listBookData.filter((item) => item.poster.toLowerCase() === user.name.toLowerCase());
            setData({ user, userRead, userPost });
        }
    }, [id]);

    return data;
};

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext);

    return [state, dispatch];
};

export const useUserData = () => {
    const [data, setData] = useState({});
    const [state] = useContext(StoreContext);
    const { userEmail, userPassword, login } = state;

    useEffect(() => {
        if (login) {
            const loginData = handlerGetUserDataLogin({ userEmail, userPassword });
            setData(loginData);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return [data];
};
