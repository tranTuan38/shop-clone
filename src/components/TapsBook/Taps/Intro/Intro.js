import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/controller';

import { useGetListSelecter } from '~/hooks';
import styles from './Intro.module.scss';
import { handleTime } from '~/handler';
import { iconFeel } from '~/assets/Icon-feels';
import { userData } from '~/initdata';
import { handlerViewBookData, removeVietnameseTones, handlerSetDataSubIntro, handlerSetLink } from '~/handler';
import StatusItemEle from '~/components/HomePage/Status/StatusItemEle';
import { useRef, useState } from 'react';
import Taga from '~/components/Taga';
import Img from '~/components/Img';
import MediaItem from '~/components/MediaItem';
import { useEffect } from 'react';
import { memo } from 'react';

const cx = classNames.bind(styles);

const listIcons = [
    { name: 'love', icon: iconFeel.love },
    { name: 'like', icon: iconFeel.like },
    { name: 'fun', icon: iconFeel.fun },
    { name: 'sad', icon: iconFeel.sad },
    { name: 'angry', icon: iconFeel.angry },
    { name: 'attack', icon: iconFeel.attack },
    // { name: 'flower', icon: iconFeel.flower },
];

const listRank = ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'];

function Intro({ data, listBookData, checkTapsIndex }) {
    const datas = useGetListSelecter();
    const [listBookAuthor, setListBookAuthor] = useState([]);
    const [listPostData, setListPostData] = useState([]);
    const { genre } = datas;
    const {
        getNewChapter,
        getRankNomination,
        getUserData,
        userTotalPost,
        userListPostData,
        getListAuthorData,
        getListBookWithAuthor,
        setDescription,
    } = handlerSetDataSubIntro(data, userData, listRank, handleTime);

    const { formatLink, genreLink } = handlerSetLink();

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const newChap = getNewChapter();
    const rankNumber = getRankNomination();
    const user = getUserData();
    const listTotal = userTotalPost();
    // const listPostData = userListPostData();

    useEffect(() => {
        if (checkTapsIndex) {
            const result = getListBookWithAuthor();
            const listPost = userListPostData();
            setListBookAuthor(result);
            setListPostData(listPost);
        }
    }, [checkTapsIndex]);

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('content')}>
                        <p>{data.description}</p>
                    </div>
                    <div className={cx('sub')}>
                        <div className={cx('sub-item')}>
                            <span className={cx('title')}>Cảm xúc</span>
                            <div className={cx('sub-content', { ['feel']: true })}>
                                {listIcons.map((item, index) => {
                                    return (
                                        <div key={index} className={cx('icons')}>
                                            <i
                                                className={cx('icon')}
                                                style={{
                                                    backgroundImage: `url(${item.icon})`,
                                                }}
                                            ></i>
                                            <span className={cx('number')}>252</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={cx('sub-item')}>
                            <span className={cx('title')}>Đề cử</span>
                            <div className={cx('sub-content')}>
                                <div className={cx('item')}>
                                    <div className={cx('one', { ['icons']: data.rankWeekNomination })}>
                                        <i
                                            className={cx('icon')}
                                            style={{
                                                backgroundImage: `url(${iconFeel.flower})`,
                                            }}
                                        ></i>
                                        <span>{data.rankWeekNomination}</span>
                                    </div>
                                    <div className={cx('two', { ['rank']: rankNumber })}>{`No. ${rankNumber}`}</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('sub-item')}>
                            <span className={cx('title')}>Chương mới</span>
                            <div className={cx('sub-content')}>
                                <div className={cx('item')}>
                                    <Link to={newChap.chapNumber} className={cx('one')}>
                                        {newChap.chapValue}
                                    </Link>
                                    <div className={cx('two')}>{newChap.time}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col c-4">
                    <div className={cx('poster')}>
                        <div className={cx('avatar')}>
                            <Link to="">
                                <img src={user.avatar} alt="Avatar" className={cx('image')} />
                            </Link>
                            <span className={cx('lever')}>{user.rank}</span>
                        </div>
                        <div className={cx('use-name')}>{user.name}</div>
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
                                        <div className={cx('total')}>{user.level}</div>
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
                                    {listPostData.length &&
                                        listPostData.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index} className={cx('swiper-slide')}>
                                                    <StatusItemEle data={item} formatLink={formatLink} />
                                                    <div className={cx('book-content-info')}>
                                                        <Link to={formatLink(item.name)} className={cx('h2-info')}>
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
                            <Taga className={cx('book-link')} title="Xem tất cả" href="" />
                        </div>
                        <div className={cx('book-conten')}>
                            {listBookAuthor.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <MediaItem data={item} type="intro" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Intro);
