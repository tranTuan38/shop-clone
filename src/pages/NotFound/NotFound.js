import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';
import imgs from '~/assets/imgs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function NotFound() {
    const handlerReload = (event) => {
        event.view.location.reload();
    };

    useEffect(() => {
        document.title = '401';

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [document.title]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img src={imgs.notFound} alt="Not Found" className={cx('err-img')} />
                <h3 className={cx('title')}>Rất tiếc!</h3>
                <div className={cx('info')}>
                    Bạn chưa đăng nhập hoặc đăng nhập đã hết hạn. Nếu bạn thấy đây là sự nhầm lẫn, vui lòng tải lại
                    trang hoặc trở về trang chủ
                </div>
                <div className={cx('control')}>
                    <Link to="/" className={cx('back-home')}>
                        <strong>Trở về trang chủ</strong>
                    </Link>
                    <span className={cx('space')}>-</span>
                    <button onClick={handlerReload} className={cx('reload')}>
                        <strong>Tải lại trang</strong>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
