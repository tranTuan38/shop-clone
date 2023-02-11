import classNames from 'classnames/bind';
import styles from './MobileBookItem.module.scss';

import { useGetCategory } from '~/hooks';
import MediaItem from '~/components/MediaItem';
import RatingItem from '~/components/HomePage/Rating/RatingItem';
import { removeVietnameseTones } from '~/handler';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const cx = classNames.bind(styles);

function MobileBookItem({ data }) {
    const [bookData, setBookData] = useState([]);
    const [listGenre] = useGetCategory();

    useEffect(() => {
        if (data) setBookData(data);
    }, [data]);

    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    const genreLink = (value) => {
        let indexValue;
        for (let i = 0; i < listGenre.length; i++) {
            if (listGenre[i].includes(value)) {
                indexValue = i;
                break;
            }
        }

        return `/list-book/?genre=${indexValue}`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Swiper className={cx('list')} slidesPerView="auto">
                    {bookData.map((book) => {
                        return (
                            <SwiperSlide key={book.idBook} className={cx('swiper-slide')}>
                                <div className={cx('item')}>
                                    <div className={cx('item-img')}>
                                        <Link to={formatLink(book.name)} className={cx('item-link')}>
                                            <img className={cx('img')} src={book.bookImg} alt={book.name} />
                                        </Link>
                                    </div>
                                    <div className={cx('item-info')}>
                                        <h2 className={cx('item-name')}>
                                            <Link to={formatLink(book.name)} className={cx('name-link')}>
                                                {book.name}
                                            </Link>
                                        </h2>
                                        <Link to={genreLink(book.category)} className={cx('item-category')}>
                                            {book.category}
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default memo(MobileBookItem);
