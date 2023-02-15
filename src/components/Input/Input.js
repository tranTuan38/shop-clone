import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Input({
    value,
    id,
    className,
    type,
    placeholder,
    autoComplete = 'on',
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    onKeyDown = () => {},
    onKeyUp = () => {},
}) {
    return (
        <input
            id={id}
            data-form-type={id}
            autoComplete={autoComplete}
            className={`${cx('input')} ${className}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
        />
    );
}

export default memo(Input);
