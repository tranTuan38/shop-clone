import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../BookMedia.module.scss';

const cx = classNames.bind(styles);

function Title({ data }) {
    return (
        <div className={cx('title')}>
            <h1 className={cx('name')}>
                <Link to="">{data}</Link>
            </h1>
            <button className={cx('title-btn')}>
                <span className={cx('small')}>
                    <i className="nh-icon icon-flag fs-80"></i>
                </span>
            </button>
        </div>
    );
}

export default Title;
