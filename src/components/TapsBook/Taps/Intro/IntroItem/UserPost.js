import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/controller';

import { useGetListSelecter } from '~/hooks';
import styles from '../Intro.module.scss';
import { handlerViewBookData, handlerSetLink } from '~/handler';
import StatusItemEle from '~/components/HomePage/Status/StatusItemEle';
import { useRef, memo, useEffect } from 'react';
import Taga from '~/components/Taga';
import MediaItem from '~/components/MediaItem';

const cx = classNames.bind(styles);

function UserPost({ data, authorName, nameSearch, setDescription, userData, listTotal, listAuthors }) {
    const [listBookAuthor, listPostData] = data;
    const datas = useGetListSelecter();
    const { genre } = datas;
    const navigate = useNavigate();

    useEffect(() => {}, [nameSearch, data]);

    const { formatLink, genreLink, formatName, authorLink } = handlerSetLink();

    const handlerFormatLink = (e, href) => {
        e.preventDefault();
        if (nameSearch !== formatName(href)) {
            navigate(formatLink(href));
            window.scrollTo({
                top: 0,
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
            <div className="col c-4">
                <div className={cx('poster')}>
                    <div className={cx('avatar')}>
                        <Link
                            to={`/profile/${userData.id}`}
                            onClick={(e) => {
                                window.scrollTo({
                                    top: 0,
                                });
                            }}
                        >
                            <img src={userData.avatar} alt="Avatar" className={cx('image')} />
                        </Link>
                        <span className={cx('lever')}>{userData.rank}</span>
                    </div>
                    <div className={cx('use-name')}>{userData.name}</div>
                    <div className={cx('rank')}>
                        <div className="row no-gutters text-center">
                            <div className="col c-4">
                                <div className={cx('rank-item')}>
                                    <i className="nh-icon icon-book"></i>
                                    <div className={cx('text')}>Số truyện</div>
                                    <div className={cx('total')}>{listTotal.totalBook}</div>
                                </div>
                            </div>
                            <div className="col c-4">
                                <div className={cx('rank-item')}>
                                    <i className="nh-icon icon-layer"></i>
                                    <div className={cx('text')}>Số chương</div>
                                    <div className={cx('total')}>{handlerViewBookData(listTotal.totalChap)}</div>
                                </div>
                            </div>
                            <div className="col c-4">
                                <div className={cx('rank-item')}>
                                    <i className="nh-icon icon-badge"></i>
                                    <div className={cx('text')}>Cấp</div>
                                    <div className={cx('total')}>{userData.level}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={cx('list-post')}>
                        <div className={cx('slider-thumb-container')}>
                            <Swiper
                                loop={true}
                                loopAdditionalSlides={10}
                                spaceBetween={30}
                                slidesPerView={1}
                                centeredSlides={true}
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                modules={[Navigation]}
                                grabCursor={false}
                                className={cx('list-container-slider')}
                            >
                                {!!listPostData.length &&
                                    listPostData.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index} className={cx('swiper-slide')}>
                                                <StatusItemEle
                                                    data={item}
                                                    formatLink={formatLink}
                                                    navigate={navigate}
                                                    nameSearch={nameSearch}
                                                    onClick={handlerFormatLink}
                                                />
                                                <div className={cx('book-content-info')}>
                                                    <Link
                                                        to={formatLink(item.name)}
                                                        className={cx('h2-info')}
                                                        onClick={(e) => handlerFormatLink(e, item.name)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <div className={cx('book-description')}>
                                                        {setDescription(item.description)}
                                                    </div>
                                                    <Link
                                                        className={cx('category')}
                                                        to={genreLink(item.category, 'genre', genre)}
                                                    >
                                                        <span>{item.category}</span>
                                                    </Link>
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
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className={cx('book-author')}>
                    <div className={cx('book-title')}>
                        <h2 className={cx('h2-author')}>Cùng tác giả</h2>
                        <Taga
                            className={cx('book-link')}
                            title="Xem tất cả"
                            href={authorLink('author', authorName, listAuthors)}
                        />
                    </div>
                    <div className={cx('book-conten')}>
                        {!!listBookAuthor.length &&
                            listBookAuthor.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <MediaItem
                                            data={item}
                                            type="intro"
                                            nameSearch={nameSearch}
                                            onClick={handlerFormatLink}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(UserPost);
