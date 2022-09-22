import { useGetBrgImg } from '~/hooks';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './BackGrpImgs.module.scss';

const cx = classNames.bind(styles);

function BackGrpImgs() {
    const [state, setState] = useGetBrgImg();
    const [numImg, setNumImg] = useState(0);

    const numRandom = Math.floor(Math.random() * state.length);
    const numRef = useRef([0]);

    // console.log(numImg);

    useLayoutEffect(() => {
        if (numRef.current.length > state.length) {
            numRef.current = [];
        }

        if (!numRef.current.includes(numRandom)) {
            numRef.current = [...numRef.current, numImg];
            setNumImg(numRandom);
        } else {
            return;
        }
    }, [numRandom]);

    return (
        <div className={cx('content')}>
            <img className={cx('img')} src={state[numImg]} alt="ảnh nền" />
        </div>
    );
}

export default BackGrpImgs;
