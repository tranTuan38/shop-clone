import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { Check } from '~/components/Icons';
import { useEffect, useLayoutEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Form({ formName, close }) {
    const [check, setCheck] = useState(formName);

    useLayoutEffect(() => {
        setCheck(formName);
    }, [formName]);

    const handleClick = (title) => {
        setCheck(title);
    };
    return (
        <div className={cx('Form', { [check]: check })}>
            <header className={cx('header')}>
                <button
                    onClick={() => handleClick('SignIn')}
                    className={cx('signIn', { ['in-form']: check === 'SignIn' })}
                >
                    Đăng nhập
                </button>
                <button
                    onClick={() => handleClick('Regis')}
                    className={cx('regis', { ['in-form']: check === 'Regis' })}
                >
                    Đăng ký
                </button>

                <button className={cx('close')} onClick={close}>
                    &times;
                </button>
            </header>
            <div className={cx('body')}>
                <div className={cx('item')}>
                    <div className={cx('email')}>
                        <label htmlFor="email" className={cx('title')}>
                            Email
                        </label>
                        <a className={cx('what')} href="#">
                            Gửi lại email kích hoạt
                        </a>
                    </div>
                    <input id="email" className={cx('input')} placeholder="Nhập email" />
                </div>
                <div className={cx('item')}>
                    <div className={cx('password')}>
                        <label htmlFor="password" className={cx('title')}>
                            Mật khẩu
                        </label>
                        <a className={cx('what')} href="#">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <input id="password" type="password" className={cx('input')} placeholder="Nhập mật khẩu" />
                </div>
                <div className={cx('item', { ['re-item']: true })}>
                    <div className={cx('re-password')}>
                        <label htmlFor="re-password" className={cx('title')}>
                            Nhập lại mật khẩu
                        </label>
                    </div>
                    <input id="re-password" type="password" className={cx('input')} placeholder="Nhập mật khẩu" />
                </div>
                <div className={cx('item', { ['check-item']: true })}>
                    <label className={cx('check-container')}>
                        <span className={cx('check-title')}>Ghi nhớ mật khẩu</span>
                        <input className={cx('checkbox')} type="checkbox" />
                        <span className={cx('checkmark')}>
                            <Check className={cx('check-icon')} />
                        </span>
                    </label>
                </div>
                <div className={cx('item')}>
                    <button className={cx('button')}>
                        <span className={cx('button-title')}>{check === 'SignIn' ? 'Đăng nhập' : 'Đăng ký'}</span>
                    </button>
                </div>
            </div>

            <div className={cx('footer')}>
                <span className={cx('about-what')}>Bạn chưa có tài khoản?</span>
                <a className={cx('signUp-now')}> Đăng ký ngay</a>
            </div>
        </div>
    );
}

export default Form;
