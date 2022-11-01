import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './BookMedia.module.scss';
import { removeVietnameseTones } from '~/handler';
import imgs from '~/assets/imgs';
import { handlerViewBookData, handlerGetBookMediaData } from '~/handler';
import { MediaTitle, ListTag, ListInfo, ListRate, ListAction } from './MediaBody.js';

const cx = classNames.bind(styles);

function BookMedia({ data }) {
    const { book, rating } = data;
    const { listInfo, setRating, setRate, rateUser } = handlerGetBookMediaData(rating);

    const listInfoData = listInfo(book);

    return (
        <>
            <div className="row no-gutters">
                <div className="col c-12">
                    <div className={cx('media')}>
                        <div className={cx('img')}>
                            <img alt={book.name} src={book.bookImg} />
                        </div>
                        <div className={cx('body')}>
                            <MediaTitle data={book.name} />
                            <ListTag data={book} />
                            <ListInfo data={listInfoData} />
                            <ListRate
                                data={{ idBook: book.idBook, rating: setRating, rate: setRate, user: rateUser }}
                            />
                            <ListAction />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookMedia;
