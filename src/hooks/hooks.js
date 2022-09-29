import { useEffect, useState } from 'react';
import { listBookData } from '~/initdata';
import imgs from '~/assets/imgs';
import { handleTime } from '~/handler';

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
