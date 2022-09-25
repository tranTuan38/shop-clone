import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Search.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Search({ className, icon }) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/list-book/?keyword=${value}`);
    };
    const onChange = (e) => setValue(e.target.value);

    return (
        <div className={cx(className)}>
            <Input value={value} className={cx('input')} placeholder="Tìm kiếm" onChange={onChange} />
            <Button className={cx('btn')} icon={icon} onClick={onClick} />
        </div>
    );
}

export default Search;
