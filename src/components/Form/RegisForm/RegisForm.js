import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';

import { CheckIcon } from '~/components/Icons';
import styles from './RegisForm.module.scss';
import Input from '~/components/Input';

const cx = classNames.bind(styles);

function RegisForm({ listFormGroup }) {
    const [data, setData] = useState({ userEmail: '', userPassword: '', userRePassword: '' });
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);

    const handlerChangeFormGroup = (value, key) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')}>
            {listFormGroup.map((form, index) => (
                <div className={cx('group')} key={index}>
                    <label htmlFor={form.id} className={cx('title')}>
                        {form.title}
                    </label>
                    <Input
                        id={form.id}
                        value={dataValues[index]}
                        autoComplete="new-password"
                        className={cx('form-control')}
                        type={form.type}
                        placeholder={form.placeholder}
                        onChange={(e) => handlerChangeFormGroup(e.target.value, dataKeys[index])}
                    />
                </div>
            ))}
            <div className={cx('group')}>
                <button className={cx('btn')}>Đăng ký</button>
            </div>
        </div>
    );
}

export default memo(RegisForm);
