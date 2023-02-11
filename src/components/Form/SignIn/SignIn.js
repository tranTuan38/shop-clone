import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './SignIn.module.scss';
import { CheckIcon } from '~/components/Icons';
import Input from '~/components/Input';
import { actions } from '~/components/store';
import { handlerSetUserLogin } from '~/handler';
import toastReact from '~/components/ToastMessages';

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

    const handlerFocusForm = (id) => {
        const listValues = Object.keys(data);
        const isCheckValueForm = listValues.filter((item) => !data[item]);

        if (isCheckValueForm.length) {
            const inputDoms = document.querySelectorAll('[data-form-type]');
            const listInputs = Array.from(inputDoms);

            if (id === 'email') listInputs[0].classList.remove(cx('formFalse'));
            if (id === 'password') listInputs[1].classList.remove(cx('formFalse'));
            return;
        }
    };

    const handlerLoginForm = () => {
        const listValues = Object.keys(data);
        const isCheckValueForm = listValues.filter((item) => !data[item]);

        if (isCheckValueForm.length) {
            const inputDoms = document.querySelectorAll('[data-form-type]');
            const listInputs = Array.from(inputDoms);

            for (let i of isCheckValueForm) {
                if (i === 'userEmail') listInputs[0].classList.add(cx('formFalse'));
                if (i === 'userPassword') listInputs[1].classList.add(cx('formFalse'));
            }
            return;
        }

        const isCheckUserLogin = handlerSetUserLogin(data);

        if (isCheckUserLogin.isLogin) {
            dispatch(actions.setUserLogin(data));
            toastReact(1, 'Thành công', 'Đăng nhập thành công.');
            return;
        }

        const listMessages = Object.keys(isCheckUserLogin.messages);
        const listCheck = listMessages.filter((mes) => !isCheckUserLogin.messages[mes]);
        const messages = { email: 'Email nhập vào không tồn tại.', password: 'Mật khẩu nhập vào không chính xác' };

        for (let i = 0; i < listCheck.length; i++) {
            const valueItem = listCheck[i];
            if (valueItem === 'email') {
                toastReact(3, 'Thất bại', messages[valueItem]);
                break;
            }

            toastReact(3, 'Thất bại', messages[valueItem]);
        }
    };

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
                        onFocus={(e) => handlerFocusForm(form.id)}
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
