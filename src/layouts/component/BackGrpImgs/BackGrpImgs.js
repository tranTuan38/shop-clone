import { useGetBrgImg } from '~/hooks';
import { useState, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './BackGrpImgs.module.scss';
import { memo } from 'react';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

function BackGrpImgs() {
    const viewPort = useViewport();
    const [firstRender, setFirstRender] = useState(0);
    const [state, setState] = useGetBrgImg();
    const [listImgs, setListImg] = useState([]);
    const [index, setIndex] = useState(Math.floor(Math.random() * state.length));
    const location = useLocation();
    const { pathname } = location;

    // console.log(viewPort);

    function getIndexImg() {
        const numRandom = Math.floor(Math.random() * state.length);
        const isIndexCheck = listImgs.includes(numRandom);

        if (isIndexCheck) {
            return getIndexImg();
        } else {
            return numRandom;
        }
    }

    useLayoutEffect(() => {
        if (pathname.includes('bxh') && firstRender) {
            return;
        }

        if (!pathname.includes('bxh') && firstRender) {
            setFirstRender(0);
            if (listImgs.length === 6) {
                setIndex(0);
                setListImg([]);
            } else {
                if (!listImgs.length) {
                    setListImg([index]);
                } else {
                    const imgNum = getIndexImg();
                    setIndex(imgNum);
                    setListImg((prev) => [...prev, imgNum]);
                }
            }
            return;
        }

        if (pathname.includes('bxh') && !firstRender) {
            setFirstRender(firstRender + 1);
        }

        if (listImgs.length === 6) {
            setIndex(0);
            setListImg([]);
        } else {
            if (!listImgs.length) {
                setListImg([index]);
            } else {
                const imgNum = getIndexImg();
                setIndex(imgNum);
                setListImg((prev) => [...prev, imgNum]);
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        !viewPort && (
            <div className={cx('content')}>
                <img className={cx('img')} src={state[index]} alt="ảnh nền" />
            </div>
        )
    );
}

export default memo(BackGrpImgs);
