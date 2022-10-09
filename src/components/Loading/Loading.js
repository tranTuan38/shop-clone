import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('border')}>
                <span className={cx('title')}>Loading</span>
            </span>
        </div>
    );
}

export default Loading;
