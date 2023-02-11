import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileRating.module.scss';
import { useGetRate, useGetBookRating, useGetComment, useViewport, useGetCategory } from '~/hooks';
import Taga from '~/components/Taga';
import { removeVietnameseTones } from '~/handler';

const cx = classNames.bind(styles);

function MobileRating() {
    const data = useGetRate();
    const datas = useGetBookRating(data);
    const viewPort = useViewport();
    const [listGenre] = useGetCategory();

    const [rateData, setRateData] = useState([]);

    useEffect(() => {
        if (Array.isArray(datas)) {
            let dataFormat = datas.flat();
            dataFormat = dataFormat.filter((item) => item instanceof Object);
            setRateData(dataFormat);
        }
    }, []);

    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    const genreLink = (value) => {
        let indexValue;
        for (let i = 0; i < listGenre.length; i++) {
            const element = listGenre[i];
            if (listGenre[i].includes(value)) {
                indexValue = i;
                break;
            }
        }

        return `/list-book/?genre=${indexValue}`;
    };

    // console.log(datas.flat());

    return (
        viewPort && (
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('media-title')}>
                        <h2 className={cx('title')}>Đánh giá cao</h2>
                    </div>
                    <div className={cx('content')}>
                        {rateData.map((dataBook) => {
                            const book = dataBook[0];
                            const rateTotal = dataBook[1];

                            return (
                                <div key={book.idBook} className={cx('item')}>
                                    <div className={cx('book-img')}>
                                        <Link className={cx('book-link')} to={formatLink(book.name)}>
                                            <img src={book.bookImg} alt={book.name} className={cx('img')} />
                                        </Link>
                                    </div>
                                    <div className={cx('book-body')}>
                                        <h2 className={cx('book-title')}>
                                            <Link to={formatLink(book.name)}>{book.name}</Link>
                                        </h2>
                                        <div className={cx('book-rate')}>
                                            <span className={cx('rate')}>5.00</span>
                                            <span className={cx('rate-total')}>{rateTotal} đánh giá</span>
                                        </div>
                                        <div className={cx('book-description')}>{book.description}</div>
                                        <div className={cx('book-author')}>
                                            <div className={cx('author')}>
                                                <i className="nh-icon icon-user-edit" />
                                                {book.authorName}
                                            </div>
                                            <Link to={genreLink(book.category)} className={cx('category')}>
                                                {book.category}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Taga href="/list-book/?sort_by=review_score" className={cx('all')} title="Xem tất cả" />
            </div>
        )
    );
}

export default memo(MobileRating);
