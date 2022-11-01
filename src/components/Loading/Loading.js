import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading(props) {
    return (
        <div className={cx('wrapper')} {...props}>
            <span className={cx('border')}>
                <span className={cx('title')}>Loading</span>
            </span>
        </div>
    );
}

export default Loading;
