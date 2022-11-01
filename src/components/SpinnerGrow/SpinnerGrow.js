import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SpinnerGrow.module.scss';

const cx = classNames.bind(styles);

function SpinnerGrow(props) {
    return (
        <div className={cx('wrapper')} {...props}>
            <span className={cx('spinner-grow')}></span>
        </div>
    );
}

export default SpinnerGrow;
