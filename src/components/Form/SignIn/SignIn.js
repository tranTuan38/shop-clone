import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './SignIn.module.scss';
import { CheckIcon } from '~/components/Icons';
import Input from '~/components/Input';
import { actions } from '~/components/store';
import { handlerSetUserLogin } from '~/handler';

const cx = classNames.bind(styles);

function SignIn({ listFormGroup, dispatch }) {
    const [data, setData] = useState({ userEmail: '', userPassword: '' });
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);

    const handlerChangeFormGroup = (value, key) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const handlerLoginForm = () => {
        const isCheckUserLogin = handlerSetUserLogin(data);

        if (isCheckUserLogin) {
            dispatch(actions.setUserLogin(data));
        }
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
                        className={cx('form-control')}
                        type={form.type}
                        placeholder={form.placeholder}
                        onChange={(e) => handlerChangeFormGroup(e.target.value, dataKeys[index])}
                    />
                </div>
            ))}
            <div className={cx('group')}>
                <label className={cx('check-container')}>
                    <span className={cx('check-title')}>Ghi nhớ mật khẩu</span>
                    <input className={cx('checkbox')} type="checkbox" />
                    <span className={cx('checkmark')}>
                        <CheckIcon className={cx('check-icon')} />
                    </span>
                </label>
            </div>
            <div className={cx('group')}>
                <button className={cx('btn')} onClick={handlerLoginForm}>
                    Đăng nhập
                </button>
            </div>
        </div>
    );
}

export default memo(SignIn);
