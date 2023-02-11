import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../MobileBookMedia.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Title({ data }) {
    return (
        <div className={cx('title')}>
            <h1 className={cx('name')}>
                <Link to="">{data}</Link>
            </h1>
        </div>
    );
}

export default memo(Title);
