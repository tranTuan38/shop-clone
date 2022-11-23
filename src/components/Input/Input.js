import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ value, id, className, type, placeholder, autoComplete = 'on', onChange }) {
    return (
        <input
            id={id}
            autoComplete={autoComplete}
            className={`${cx('input')} ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
