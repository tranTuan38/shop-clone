import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import Img from '../Img';

import styles from './CreateMedia.module.scss';
import { removeVietnameseTones as formatLink, handlerViewBookData } from '~/handler';
import { useNavigate } from 'react-router-dom';
import Taga from '../Taga';
import MediaIcon from './MediaIcon';

const cx = classNames.bind(styles);

function CreateMedia({ type, data }) {
    const navigate = useNavigate();

    const handlerClick = (e, link) => {
        e.preventDefault();
        navigate(`/list-book/${formatLink(link)}`);
        window.scrollTo({ top: 0 });
    };

    return (
        <div className={cx('container')}>
            <Img
                name={data.name}
                alt={data.name}
                href={`/list-book/${formatLink(data.name)}`}
                src={data.bookImg}
                className={cx('img')}
                onClick={handlerClick}
            />
            <div className={cx('body')}>
                <Taga
                    href={`/list-book/${formatLink(data.name)}`}
                    className={cx('book-name')}
                    title={data.name}
                    onClick={handlerClick}
                />
                <div className={cx('book-description')}>{data.description}</div>
                <MediaIcon type={type} data={data} />
            </div>
        </div>
    );
}

export default memo(CreateMedia);
