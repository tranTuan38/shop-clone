import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Search({ className, icon }) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const searchRef = useRef();

    const onClick = () => {
        const newLink = `/list-book/?keyword=${value.trim().replaceAll(' ', '+')}`;
        navigate(newLink);
        setValue('');
    };
    const onChange = (e) => setValue(e.target.value);

    const handlerFocus = () => {
        searchRef.current.classList.add(cx('active'));
    };

    const handlerBlur = () => {
        searchRef.current.classList.remove(cx('active'));
    };

    return (
        <div className={cx(className)} ref={searchRef}>
            <Input
                value={value}
                type="text"
                className={cx('input')}
                placeholder="Tìm kiếm"
                onChange={onChange}
                autoComplete="off"
                onFocus={handlerFocus}
                onBlur={handlerBlur}
            />
            <Button className={cx('btn')} icon={icon} onClick={onClick} />
        </div>
    );
}

export default memo(Search);
