import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ value, className, placeholder, onChange }) {
    return (
        <input value={value} className={`${cx('input')} ${className}`} placeholder={placeholder} onChange={onChange} />
    );
}

export default Input;
