import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { ContentPage, UpdateBook, Ranking, Rating, Status } from '~/components/HomePage';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Mê Truyện Chữ - Truyện Convert';
    }, [document.title]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ContentPage />
                <UpdateBook />
            </div>
            <div className={cx('ranking')}>
                <Ranking />
            </div>
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

export default Home;
