import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from './NoticeMenu.module.scss';
import { memo, useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function NoticeMenu({ navItem, data }) {
    const [listNotice, setListNotice] = useState([]);

    useEffect(() => {
        setListNotice(data);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {!!listNotice.length}
                    {!data?.length && <span className={cx('no-notice')}>Không có thông báo nào</span>}
                </div>
            </div>
            <div className={cx('all')}>
                <Link to="/" className={cx('link-view')}>
                    Xem tất cả
                </Link>
            </div>
        </div>
    );
}

export default memo(NoticeMenu);
