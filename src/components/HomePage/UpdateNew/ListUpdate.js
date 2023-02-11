import classNames from 'classnames/bind';
import styles from './UpadteNew.module.scss';

import { useGetCategory, useGetProperties, useGetReadingBook, useGetCreateChater } from '~/hooks';

import { handleTime } from '~/handler';
import Taga from '~/components/Taga';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ListUpdate({ data, formatLink, viewPort = false }) {
    const time = new Date();
    // console.log(data);

    return (
        <div className={cx('list-update')}>
            {!viewPort &&
                data.map((item, index) => {
                    const itemChapter = item.listChapter[item.listChapter.length - 1];
                    const chapterName = itemChapter.nameChapter;
                    const numberChapter = itemChapter.numberChapter;
                    const timeChapter = itemChapter.timeCreatChapter;
                    const timeItem = new Date(timeChapter);

                    return (
                        <div className={cx('list-item', { backgrdColorIndex: index % 2 !== 0 })} key={index}>
                            <p className={cx('category')}>{item.category}</p>
                            <div className={cx('text-over')}>
                                <h2>
                                    <Link to={formatLink(item.name)} className={cx('link')}>
                                        {item.name}
                                    </Link>
                                </h2>
                            </div>
                            <div className={cx('text-over')}>
                                <Link
                                    to={`${formatLink(item.name)}/chuong-${numberChapter}`}
                                    className={cx('link-chapter')}
                                >{`Chương ${numberChapter}: ${chapterName}`}</Link>
                            </div>
                            <p className={cx('author')}>
                                <span>{item.authorName}</span>
                            </p>
                            <p className={cx('creator')}>
                                <span>{item.poster}</span>
                            </p>
                            <p className={cx('time')}>
                                <span>{handleTime(time, timeItem)}</span>
                            </p>
                        </div>
                    );
                })}

            {viewPort &&
                data.map((item, index) => {
                    const itemChapter = item.listChapter[item.listChapter.length - 1];
                    const numberChapter = itemChapter.numberChapter;
                    return (
                        <div key={item.idBook} className={cx('mobile-item', { backgrdColorIndex: index % 2 !== 0 })}>
                            <div className={cx('mobile-info')}>
                                <Link to={formatLink(item.name)}>
                                    <h5 className={cx('mobile-name')}>{item.name}</h5>
                                </Link>
                                <div className={cx('mobile-content')}>
                                    <div className={cx('mobile-nav')}>
                                        <i className="nh-icon icon-user-edit" />
                                        {item.authorName}
                                    </div>
                                    <div className={cx('mobile-nav')}>
                                        <i className="nh-icon icon-book" />
                                        {item.category}
                                    </div>
                                </div>
                            </div>
                            <Link to={`${formatLink(item.name)}/chuong-${numberChapter}`}>
                                <span className={cx('mobile-chapter')}>
                                    C.{item.listChapter[item.listChapter.length - 1].numberChapter}
                                </span>
                            </Link>
                        </div>
                    );
                })}
        </div>
    );
}

export default memo(ListUpdate);
