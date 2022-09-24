import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';

import { Check } from '~/components/Icons';

const cx = classNames.bind(styles);

function SignIn({ close }) {
    return (
        <div className={cx('signInForm')}>
            <header className={cx('header')}>
                <button className={cx('signIn', { ['in-Form']: true })}>Đăng nhập</button>
                <button className={cx('signUp')}>Đăng ký</button>

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
                    <input id="password" className={cx('input')} placeholder="Nhập mật khẩu" />
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
                        <span className={cx('button-title')}>Đăng nhập</span>
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

export default SignIn;
