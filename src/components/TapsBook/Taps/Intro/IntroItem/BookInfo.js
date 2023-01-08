import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../Intro.module.scss';
import { handleTime } from '~/handler';
import { iconFeel } from '~/assets/Icon-feels';
import { userData } from '~/initdata';
import { handlerSetDataSubIntro } from '~/handler';
import { useRef, useState, memo, useEffect } from 'react';

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

function BookInfo({ data }) {
    const { getNewChapter, getRankNomination } = handlerSetDataSubIntro(data, userData, listRank, handleTime);

    const newChap = getNewChapter();
    const rankNumber = getRankNomination();

    const handlerSetTotalFeel = (type) => {
        const result = data.getTotalFeel();
        return result[type];
    };

    return (
        <>
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
                                        <span className={cx('number')}>{handlerSetTotalFeel(item.name)}</span>
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
                                <Link to={newChap.chapNumber} className={cx('one')} state={{ fromDashboard: true }}>
                                    {newChap.chapValue}
                                </Link>
                                <div className={cx('two')}>{newChap.time}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(BookInfo);
