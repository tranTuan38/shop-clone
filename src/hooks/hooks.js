import { useEffect, useState } from 'react';
import { listBookData } from '~/initdata';
import imgs from '~/assets/imgs';

export const useGetCategory = () => {
    const [state, setState] = useState(() => {
        const category = listBookData.map((item) => {
            return [item.Category, item.tagCategory];
        });

        category.unshift(['Tất cả', '']);

        return category;
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
