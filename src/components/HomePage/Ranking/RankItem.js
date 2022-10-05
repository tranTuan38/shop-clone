import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';

import { ContentPage, UpdateBook } from '~/components/HomePage';

import { useGetProperties, useGetReadingBook } from '~/hooks';
import Taga from '~/components/Taga';
import { RankOne, RankSecond, RankThird } from '~/components/Icons';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function RankItem({ data, type }) {
    return (
        <div className="col c-4">
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <h2 className={cx('h2')}>
                        {type === 0 && 'Đọc nhiều tuần'}
                        {type === 1 && 'Thịnh hành tuần'}
                        {type === 2 && 'Đề cử tuần'}
                    </h2>
                    <Taga href="#" className={cx('title-link')} title="Xem tất cả" />
                </div>
                <div className={cx('list')}>
                    {data.map((item, index) => {
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
                                                    <a href="#">{item.name}</a>
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
                                                        {type === 1 && item.rankWeekPrevailing.toLocaleString('en-US')}
                                                        {type === 2 && item.rankWeekNomination.toLocaleString('en-US')}
                                                        <i
                                                            className={`nh-icon ${!type ? 'icon-eye-glasses' : ''}${
                                                                type == 1 ? 'icon-up' : ''
                                                            }${type == 2 ? 'icon-flower' : ''}
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
                                                    <a href="#">
                                                        <img
                                                            src={item.bookImg}
                                                            alt={imgs.noImg}
                                                            className={cx('book-img')}
                                                        />
                                                    </a>
                                                    <span className={cx('book-img-shadow')}></span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={cx('icon-rank', { ['icon-rank-second']: index == 1 })}>
                                            {(index === 1 && <RankSecond />) || (index === 2 && <RankThird />)}
                                            {index !== 0 && index !== 1 && index !== 2 && (
                                                <div className={cx('icon-rank', { ['icon']: index })}>{index + 1}</div>
                                            )}
                                        </div>
                                        <div className={cx('item-content')}>
                                            <div className={cx('item-body')}>
                                                <p className={cx('item-name')}>
                                                    <a href="#">{item.name}</a>
                                                </p>
                                                <span className={cx('data-rank')}>
                                                    {!type && item.rankWeekRead.toLocaleString('en-US')}
                                                    {type === 1 && item.rankWeekPrevailing.toLocaleString('en-US')}
                                                    {type === 2 && item.rankWeekNomination.toLocaleString('en-US')}
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default RankItem;
