import classNames from 'classnames/bind';
import { useEffect, memo, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Read.module.scss';
import { Link } from 'react-router-dom';
import { handlerSetLink, handlerGetListUserRead } from '~/handler';
import Img from '~/components/Img';

const cx = classNames.bind(styles);

function Read({ data }) {
    const [readData, setReadData] = useState([]);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const paginationRef = useRef(null);

    const { formatLink, genreLink } = handlerSetLink();

    useEffect(() => {
        if (data) {
            const datas = data.read.reduce((acc, item) => {
                const book = handlerGetListUserRead(item.idBook);
                if (book) {
                    return [
                        ...acc,
                        {
                            ...item,
                            bookImg: book.bookImg,
                            bookName: book.name,
                            bookAuthor: book.authorName,
                            bookDescription: book.description,
                        },
                    ];
                }
            }, []);

            setReadData(datas);
        }
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('h2')}>Vừa đọc</h2>
                <Swiper
                    loop={true}
                    loopAdditionalSlides={10}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    pagination={{
                        el: `.${cx('swiper-pagination')}`,
                        type: 'bullets',
                        bulletClass: `swiper-pagination-bullet ${cx('swiper-pagination-bullet-custom')}`,
                        bulletActiveClass: `swiper-pagination-bullet-active ${cx(
                            'swiper-pagination-bullet-active-custom',
                        )}`,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    modules={[Navigation, Pagination]}
                    grabCursor={false}
                    className={cx('list-container-slider')}
                >
                    {readData.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={cx('swiper-slide')}>
                                <div className={cx('book-content-info')}>
                                    <Img
                                        href={formatLink(item.bookName)}
                                        alt={item.bookName}
                                        src={item.bookImg}
                                        className={cx('book-img')}
                                    />
                                    <div className={cx('sub-info')}>
                                        <Link to={formatLink(item.bookName)} className={cx('h2-info')}>
                                            {item.bookName}
                                        </Link>
                                        <div className={cx('author')}>
                                            <i className="nh-icon icon-user-edit"></i>
                                            {item.bookAuthor}
                                        </div>
                                        <div className={cx('book-description')}>{item.bookDescription}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    <div ref={navigationPrevRef} className={cx('btn-pre')}>
                        <i className="nh-icon icon-prev"></i>
                    </div>
                    <div ref={navigationNextRef} className={cx('btn-next')}>
                        <i className="nh-icon icon-next"></i>
                    </div>
                    <div ref={paginationRef} className={cx('swiper-pagination')}></div>
                </Swiper>
            </div>
        </div>
    );
}

export default memo(Read);
