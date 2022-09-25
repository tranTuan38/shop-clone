import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Button({ className, title, icon = undefined, onClick }) {
    return (
        <button className={`${cx('btn')} ${className}`} onClick={onClick}>
            {icon && (
                <span className={cx('icon')}>
                    <FontAwesomeIcon icon={icon} />
                </span>
            )}
            {title}
        </button>
    );
}

export default Button;
