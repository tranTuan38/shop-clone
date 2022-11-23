import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { CheckIcon } from '~/components/Icons';
import { memo, useEffect, useState, useRef } from 'react';
import { useStore } from '~/hooks';
import { actions } from '~/components/store';
import SignIn from './SignIn';
import RegisForm from './RegisForm';

const cx = classNames.bind(styles);

const listFormGroup = [
    { title: 'Email', id: 'email', type: 'email', placeholder: 'Email' },
    { title: 'Mật khẩu', id: 'password', type: 'password', placeholder: 'Nhập mật khẩu' },
    {
        title: 'Nhập lại mật khẩu',
        id: 'retype-password',
        type: 'password',
        placeholder: 'Nhập lại mật khẩu',
    },
];

function Form({ formName, close }) {
    const [typeForm, setTypeForm] = useState(formName);
    const [state, dispatch] = useStore();

    const handlerSetFormType = (type) => {
        if (type !== typeForm) {
            setTypeForm(type);
        }
    };

    useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <button
                    className={cx('header-title', { active: typeForm === 'login' })}
                    onClick={() => handlerSetFormType('login')}
                >
                    Đăng nhập
                </button>
                <button
                    className={cx('header-title', { active: typeForm === 'regis' })}
                    onClick={() => handlerSetFormType('regis')}
                >
                    Đăng ký
                </button>
                <button className={cx('close')} onClick={close}>
                    &times;
                </button>
            </div>
            <div className={cx('container')}>
                {typeForm === 'login' && <SignIn listFormGroup={listFormGroup.slice(0, 2)} dispatch={dispatch} />}
                {typeForm === 'regis' && <RegisForm listFormGroup={listFormGroup} dispatch={dispatch} />}
            </div>

            {typeForm === 'login' && (
                <div className={cx('footer')}>
                    <span className={cx('about-what')}>Bạn chưa có tài khoản? </span>
                    <button className={cx('signUp-now')} onClick={() => handlerSetFormType('regis')}>
                        Đăng ký ngay
                    </button>
                </div>
            )}
        </div>
    );
}

export default memo(Form);
