import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SpinnerGrow.module.scss';

const cx = classNames.bind(styles);

function SpinnerGrow({ style = {} }) {
    return (
        <div className={cx('wrapper')} {...style}>
            <span className={cx('spinner-grow')}></span>
        </div>
    );
}

export default SpinnerGrow;
