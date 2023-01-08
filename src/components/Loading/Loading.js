import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading({ wrapperStyle = {}, borderStyle = {} }) {
    return (
        <div className={cx('wrapper')} style={{ ...wrapperStyle }}>
            <span className={cx('border')} style={{ ...borderStyle }}>
                <span className={cx('title')}>Loading</span>
            </span>
        </div>
    );
}

export default Loading;
