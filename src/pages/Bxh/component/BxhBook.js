import { useEffect, useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../Bxh.module.scss';
import { handlerGetDataForIcon, handlerSetLink } from '~/handler';
import { useGetListSelecter } from '~/hooks';

const cx = classNames.bind(styles);

function BxhBook({ data, icon, type, rank }) {
    const datas = useGetListSelecter();
    const { genre } = datas;
    const { genreLink, formatLink } = handlerSetLink();

    const handlerSetLinkListTag = (value) => {
        let link;

        link = genreLink(value, 'genre', genre);

        return link;
    };

    return (
        <div className={cx('media-wrapper')}>
            <div className={cx('media')}>
                <Link to={formatLink(data.name)} className={cx('img')}>
                    <img src={data.bookImg} alt="ảnh sách" loading="lazy" />
                    <span
                        className={cx('ribbon', {
                            ['ribbon-one']: data.rankBxh === 0,
                            ['ribbon-two']: data.rankBxh === 1,
                            ['ribbon-three']: data.rankBxh === 2,
                        })}
                    >
                        {data.rankBxh + 1}
                    </span>
                </Link>
                <div className={cx('media-body')}>
                    <Link to={formatLink(data.name)} className={cx('book-name')}>
                        {data.name}
                    </Link>
                    <div className={cx('book-description')}>{data.description}</div>
                    <div className={cx('book-nav')}>
                        <span className={cx('book-author')}>
                            <i className="nh-icon icon-user-edit" />
                            {data.authorName}
                        </span>

                        <span className={cx('book-selected')}>
                            <i className={`nh-icon ${icon}`} />
                            {handlerGetDataForIcon(type, data)}
                        </span>

                        <Link to={handlerSetLinkListTag(data.category)}>
                            <span className={cx('book-category')}>{data.category}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(BxhBook);
