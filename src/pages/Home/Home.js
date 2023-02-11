import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import {
    ContentPage,
    UpdateBook,
    Ranking,
    Rating,
    Status,
    MobileSugges,
    MobileRating,
    MobileQuestion,
} from '~/components/HomePage';
import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        document.title = 'Mê Truyện Chữ - Truyện Convert';
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ContentPage />
                <UpdateBook />
            </div>
            <div className={cx('ranking')}>
                <Ranking />
            </div>
            <MobileSugges />
            <MobileRating />
            <MobileQuestion />
            <div className={cx('container-2')}>
                <div className={cx('rating')}>
                    <Rating />
                </div>
                <div className={cx('status')}>
                    <Status />
                </div>
            </div>
        </div>
    );
}

export default memo(Home);
