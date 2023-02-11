import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './MobileRank.module.scss';
import Taga from '~/components/Taga';
import { RankOne, RankSecond, RankThird } from '~/components/Icons';
import { removeVietnameseTones } from '~/handler';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const tapsTitles = ['Đọc nhiều', 'Thịnh hành', 'Đề cử'];

function MobileRankTaps({ data }) {
    const [tapsData, setTapsData] = useState([]);
    const [tapsDataTitle, setTapsDataTitle] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    // console.log(tabIndex);

    useEffect(() => {
        setTapsData(data);
        setTapsDataTitle(tapsTitles);
    }, []);

    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    const handlerOnClickTap = (tapNumber) => {
        const tabPanelDom = document.querySelector(`[data-tabs-panel="${tapNumber}"]`);

        if (tabPanelDom) {
            // tabPanelDom.firstChild.classList.add(cx('panel-active'));
            // tabPanelDom.classList.add(cx('panel-active'));
            // console.log(tabPanelDom);
            // tabPanelDom.classList.add(cx('panel-active'));
            // console.dir(tabPanelDom.firstChild.classList.add(cx('panel-active')));
            // tabPanelDom.classList.add(cx('panel-active'));
            // tabPanelDom.style.animation = ' fadeIn .25s ease-in';
        }
    };

    return (
        <Tabs
            selectedIndex={tabIndex}
            selectedTabClassName={cx('taps-active')}
            onSelect={(index) => setTabIndex(index)}
            className={cx('taps-content')}
        >
            <TabList className={cx('taps-list')}>
                {tapsDataTitle.map((item, index) => (
                    <Tab key={item} className={cx('taps-title')} onClick={() => handlerOnClickTap(index)}>
                        {item}
                    </Tab>
                ))}
            </TabList>

            {tapsData.map((tapData, type) => {
                return (
                    <TabPanel
                        key={type}
                        className={cx('taps-panel', { ['panel-active']: type === tabIndex })}
                        data-tabs-panel={type}
                        data-tabs-panel-active={false}
                    >
                        <div className={cx('list')}>
                            {tapData.map((item, index) => {
                                return (
                                    <div key={index} className={cx('item')}>
                                        {index === 0 ? (
                                            <>
                                                <div className={cx('icon-rank', { ['icon-rank-one']: !index })}>
                                                    <RankOne />
                                                </div>
                                                <div className={cx('item-content')}>
                                                    <div className={cx('info')}>
                                                        <h3 className={cx('item-name')}>
                                                            <Link to={formatLink(item.name)}>{item.name}</Link>
                                                        </h3>
                                                        <div className={cx('item-icon')}>
                                                            <span
                                                                className={cx('data-rank', {
                                                                    ['weed-read']: !type,
                                                                    ['week-prevailing']: type === 1,
                                                                    ['week-nomination']: type === 2,
                                                                })}
                                                            >
                                                                {!type && item.rankWeekRead.toLocaleString('en-US')}
                                                                {type === 1 &&
                                                                    item.rankWeekPrevailing.toLocaleString('en-US')}
                                                                {type === 2 &&
                                                                    item.rankWeekNomination.toLocaleString('en-US')}
                                                                <i
                                                                    className={`nh-icon ${
                                                                        !type ? 'icon-eye-glasses' : ''
                                                                    }${type == 1 ? 'icon-up' : ''}${
                                                                        type == 2 ? 'icon-flower' : ''
                                                                    }
                                                                    `}
                                                                ></i>
                                                            </span>
                                                        </div>
                                                        <div className={cx('information', { ['author']: !index })}>
                                                            <i className="nh-icon icon-user-edit"></i>
                                                            <span className={cx('author-name')}>{item.authorName}</span>
                                                        </div>
                                                        <div className={cx('information', { ['category']: !index })}>
                                                            <i className="nh-icon icon-book"></i>
                                                            <span className={cx('category-name')}>{item.category}</span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('img')}>
                                                        <div className={cx('book-cover')}>
                                                            <Link to={formatLink(item.name)}>
                                                                <img
                                                                    src={item.bookImg}
                                                                    alt="ảnh sách"
                                                                    className={cx('book-img')}
                                                                />
                                                            </Link>
                                                            <span className={cx('book-img-shadow')}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div
                                                    className={cx('icon-rank', {
                                                        ['icon-rank-second']: index == 1,
                                                    })}
                                                >
                                                    {(index === 1 && <RankSecond />) || (index === 2 && <RankThird />)}
                                                    {index !== 0 && index !== 1 && index !== 2 && (
                                                        <div className={cx('icon-rank', { ['icon']: index })}>
                                                            {index + 1}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={cx('item-content')}>
                                                    <div className={cx('item-body')}>
                                                        <p className={cx('item-name')}>
                                                            <Link to={formatLink(item.name)}>{item.name}</Link>
                                                        </p>
                                                        <span className={cx('data-rank')}>
                                                            {!type && item.rankWeekRead.toLocaleString('en-US')}
                                                            {type === 1 &&
                                                                item.rankWeekPrevailing.toLocaleString('en-US')}
                                                            {type === 2 &&
                                                                item.rankWeekNomination.toLocaleString('en-US')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </TabPanel>
                );
            })}
        </Tabs>
    );
}

export default MobileRankTaps;
