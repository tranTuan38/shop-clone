import { memo, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MobileBookMedia.module.scss';
import { removeVietnameseTones } from '~/handler';
import imgs from '~/assets/imgs';
import { handlerViewBookData, handlerGetBookMediaData } from '~/handler';
import { MediaTitle, ListTag, ListInfo, ListRate, ListAction } from './MediaBody/index.js';
import { listAuthors } from '~/initdata';

const cx = classNames.bind(styles);

function MobileBookMedia({ data }) {
    const { book, rating } = data;
    const { listInfo, setRating, setRate, rateUser } = handlerGetBookMediaData(rating);

    const listInfoData = listInfo(book);

    // console.log(book);

    const authorLink = (value) => {
        let author = listAuthors.find((item) => item.name.toLowerCase() === value.toLowerCase());

        if (author) {
            return `/author/${author.idAuthor}`;
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('media')}>
                <div className={cx('media-img')}>
                    <div className={cx('img-body')}>
                        <img alt={book.name} src={book.bookImg} />
                    </div>
                </div>
                <button className={cx('title-btn')}>
                    <i className="nh-icon icon-flag"></i>
                    Báo xấu
                </button>
                <div className={cx('body')}>
                    <MediaTitle data={book.name} />
                    <div className={cx('author-info')}>
                        <Link to={authorLink(book.authorName)}>
                            <i className="nh-icon icon-user-edit" />
                            {book.authorName}
                        </Link>
                    </div>
                    <ListRate data={{ idBook: book.idBook, rating: setRating, rate: setRate, user: rateUser }} />
                    <ListAction data={book} />
                    <ListInfo data={listInfoData} />
                    <ListTag data={book} />
                </div>
            </div>
        </div>
    );
}

export default memo(MobileBookMedia);
