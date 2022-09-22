import classNames from 'classnames/bind';
import styles from './ModalContainer.module.scss';

import { Check } from '~/components/Icons';

const cx = classNames.bind(styles);

function ModalContainer({ close }) {
    return (
        <div className={cx('modal')}>
            <div className={cx('inner')}>
                <header className={cx('header')}>
                    <button className={cx('signIn')}>Đăng nhập</button>
                    <button className={cx('signUp')}>Đăng ký</button>

                    <button className={cx('close')} onClick={close}>
                        &times;
                    </button>
                </header>
                <div className={cx('body')}>
                    <div className={cx('item')}>
                        <div className={cx('email')}>
                            <span className={cx('title')}>Email</span>
                            <a href="#">Gửi lại email kích hoạt</a>
                        </div>
                        <input className={cx('input')} placeholder="Nhập email" />
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('password')}>
                            <span className={cx('title')}>Mật khẩu</span>
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <input className={cx('input')} placeholder="Nhập mật khẩu" />
                    </div>
                    <div className={cx('check-item')}>
                        <label className={cx('check-container')}>
                            <span className={cx('check-title')}>Ghi nhớ mật khẩu</span>
                            <input id="checkbox" className={cx('checkbox')} type="checkbox" />
                            <span className={cx('checkmark')}>
                                <Check className={cx('check-icon')} />
                            </span>
                        </label>
                    </div>
                    <button className={cx('button')}>
                        <span className={cx('button-title')}>Đăng nhập</span>
                    </button>
                </div>

                <div className={cx('footer')}>
                    <span className={cx('about-what')}>Bạn chưa có tài khoản?</span>
                    <a className={cx('signUp-down')}> Đăng ký ngay</a>
                </div>
            </div>
        </div>
    );
}

export default ModalContainer;
