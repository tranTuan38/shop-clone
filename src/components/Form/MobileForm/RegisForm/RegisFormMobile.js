import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';

import { CheckIcon } from '~/components/Icons';
import styles from './RegisFormMobile.module.scss';
import Input from '~/components/Input';
import { validateForm, handlerRegister, randomStrings } from '~/handler';
import toastReact from '~/components/ToastMessages';
import { actions } from '~/components/store';

const cx = classNames.bind(styles);

function RegisFormMobile({ listFormGroup, dispatch, onClose = () => {} }) {
    const [data, setData] = useState({ userEmail: '', userPassword: '', userRePassword: '' });
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);

    const handlerChangeFormGroup = (value, key) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const handlerFocusForm = (id) => {
        const listKeys = Object.keys(data);
        const isCheckValueForm = listKeys.filter((item) => !data[item]);

        if (isCheckValueForm.length) {
            const inputDoms = document.querySelectorAll('[data-form-type]');
            const listInputs = Array.from(inputDoms);

            if (id === 'email') listInputs[0].classList.remove(cx('formFalse'));
            if (id === 'password') listInputs[1].classList.remove(cx('formFalse'));
            if (id === 'retype-password') listInputs[2].classList.remove(cx('formFalse'));
            return;
        }
    };

    const handlerSubmitForm = () => {
        const listKeys = Object.keys(data);
        const isCheckValueForm = listKeys.filter((item) => !data[item]);

        if (isCheckValueForm.length) {
            const inputDoms = document.querySelectorAll('[data-form-type]');
            const listInputs = Array.from(inputDoms);

            for (let i of isCheckValueForm) {
                if (i === 'userEmail') listInputs[0].classList.add(cx('formFalse'));
                if (i === 'userPassword') listInputs[1].classList.add(cx('formFalse'));
                if (i === 'userRePassword') listInputs[2].classList.add(cx('formFalse'));
            }
            return;
        }

        const listValids = listKeys.map((key) => {
            let result = { type: '', value: data[key] };
            if (key === 'userEmail') {
                return { ...result, type: 'email' };
            } else if (key === 'userPassword') {
                return { ...result, type: 'password' };
            } else if (key === 'userRePassword') {
                return { ...result, type: 're-password' };
            }
        });

        let isCheckForm = true;

        for (let i of listValids) {
            const payLoad = { value: i.value, data };
            const checkValue = validateForm(i.type, payLoad);
            if (!checkValue?.isCheck) {
                toastReact(3, 'Thất bại', checkValue.message);
                isCheckForm = false;
                break;
            }
        }

        if (!isCheckForm) return;

        const isUsers = handlerRegister({ email: data.userEmail, password: data.userPassword });

        if (isUsers.check) {
            dispatch(actions.setUserLogin(data));
            toastReact(1, 'Thành công', 'Đăng ký thành công.');
            onClose();
            return;
        }

        toastReact(3, 'Thất bại', isUsers.message);
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
                        autoComplete="new-password"
                        className={cx('form-control')}
                        type={form.type}
                        placeholder={form.placeholder}
                        onChange={(e) => handlerChangeFormGroup(e.target.value, dataKeys[index])}
                        onFocus={(e) => handlerFocusForm(form.id)}
                    />
                </div>
            ))}
            <div className={cx('group')} onClick={handlerSubmitForm}>
                <button className={cx('btn')}>Đăng ký</button>
            </div>
        </div>
    );
}

export default memo(RegisFormMobile);
