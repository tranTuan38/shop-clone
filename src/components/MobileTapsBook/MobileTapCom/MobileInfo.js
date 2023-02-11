import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './MobileTapCom.module.scss';
import { Intro, Review, Chap, Comment, Fan } from '~/components/TapsBook/Taps';
import { iconFeel } from '~/assets/Icon-feels';
import { userData, listAuthors, listFanData } from '~/initdata';
import { handleTime, handlerSetDataSubIntro, handlerSetLink, handlerSetFanData } from '~/handler';
import MobileWrapper from '~/components/MobileWrapper';
import MobileSwiper from '~/components/MobileSwiper';
import MobileFan from './MobileFan';
import MobileFanMenu from './MobileFanMenu';

const cx = classNames.bind(styles);

const listIcons = [
    { name: 'love', icon: iconFeel.love },
    { name: 'like', icon: iconFeel.like },
    { name: 'fun', icon: iconFeel.fun },
    { name: 'sad', icon: iconFeel.sad },
    { name: 'angry', icon: iconFeel.angry },
    { name: 'attack', icon: iconFeel.attack },
];

const listRank = ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'];

function MobileInfo({ data, loginData }) {
    // console.log(data);
    // console.log(loginData);
    const [listBookAuthor, setListBookAuthor] = useState([]);
    const [listPostData, setListPostData] = useState([]);
    const [listFan, setListFan] = useState([]);
    const navigate = useNavigate();

    const fanMenuRef = useRef();

    const { getNewChapter, getRankNomination, getUserData, userListPostData, getListBookWithAuthor } =
        handlerSetDataSubIntro(data, userData, listRank, handleTime);

    const { formatLink, genreLink, formatName, authorLink } = handlerSetLink();

    const user = getUserData();

    const rankNumber = getRankNomination();

    useEffect(() => {
        const result = getListBookWithAuthor();
        const listPost = userListPostData();
        const bookFans = listFanData.find((item) => item.idBook === data.idBook);
        if (bookFans) {
            const result = handlerSetFanData(bookFans.fans);
            setListFan(result);
        }
        setListBookAuthor(result ?? []);
        setListPostData(listPost ?? []);
    }, []);

    // console.log(listFan);

    const handlerSetTotalFeel = (type) => {
        const result = data.getTotalFeel();
        return result[type];
    };

    const handlerChangLink = (type) => {
        let link = '/';
        if (type === 0) {
            link = authorLink('author', data.authorName, listAuthors);
        } else if (type === 1) {
            link = `/profile/${user.id}`;
        }

        navigate(link);
    };

    const handlerChangeMenu = () => {
        fanMenuRef.current.show();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('book-info')}>
                    <div className={cx('description')}>{data.description}</div>
                    <hr />
                    <div className={cx('rank')}>
                        <span>Top {rankNumber} đề cử</span>
                        <div className={cx('icons')}>
                            <i
                                className={cx('icon')}
                                style={{
                                    backgroundImage: `url(${iconFeel.flower})`,
                                }}
                            ></i>
                            <span>{data.rankWeekNomination}</span>
                        </div>
                    </div>
                    <hr />
                    <div className={cx('feel')}>
                        <span className={cx('feel-title')}>Cảm xúc</span>
                        <div className={cx('list-feel')}>
                            {listIcons.map((item, index) => {
                                return (
                                    <div key={item.name} className={cx('icons')}>
                                        <i
                                            className={cx('icon')}
                                            style={{
                                                backgroundImage: `url(${item.icon})`,
                                            }}
                                        ></i>
                                        <span className={cx('number')}>{handlerSetTotalFeel(item.name)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={cx('author')}>
                    <MobileWrapper title="Cùng tác giả" allTitle="Xem tất cả" onClick={() => handlerChangLink(0)}>
                        <MobileSwiper data={listBookAuthor} />
                    </MobileWrapper>
                </div>
                <div className={cx('poster')}>
                    <MobileWrapper
                        title={`Cùng đăng bởi ${data.poster}`}
                        allTitle="Xem tất cả"
                        onClick={() => handlerChangLink(1)}
                    >
                        <MobileSwiper data={listPostData} />
                    </MobileWrapper>
                </div>
                <div className={cx('fan')}>
                    <MobileWrapper title="Người hâm mộ" allTitle="Xem tất cả" onClick={handlerChangeMenu}>
                        {listFan.length ? (
                            <MobileFan data={listFan.slice(0, 10)} />
                        ) : (
                            <span className={cx('no-fan')}>
                                Hiện chưa có ai hâm mộ cuốn sách này, hãy tặng hoa, tặng quà hoặc mở khóa chương để trở
                                thành người hâm mộ của bộ truyện nhé bạn.
                            </span>
                        )}
                        <MobileFanMenu data={listFan} ref={fanMenuRef} loginData={loginData} />
                    </MobileWrapper>
                </div>
            </div>
        </div>
    );
}

export default memo(MobileInfo);
