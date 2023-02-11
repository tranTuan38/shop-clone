import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import imgs from '~/assets/imgs';
import footerImg from '~/assets/imgs/footer';
import Img from '~/components/Img';
import { memo } from 'react';
import { useViewport } from '~/hooks';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    const viewPort = useViewport();
    const { logo, Logo } = imgs;
    const { appStoreImg, googleImg } = footerImg;

    return (
        <>
            <hr></hr>
            <footer id="footer">
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <Img href="/" className={cx('logo')} src={logo} alt="Logo" />
                        <div className={cx('for-me')}>
                            <p>
                                {' '}
                                Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch
                                kỹ lưỡng, do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được
                                cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...{' '}
                            </p>
                        </div>
                        <div className={cx('app-down')}>
                            <p className={cx('down-title')}>TẢI APP TẠI</p>
                            <div className={cx('logo-wrapper')}>
                                <Img href="/" className={cx('logo-down')} src={appStoreImg} alt="Logo" />
                                <Img href="/" className={cx('logo-down')} src={googleImg} alt="Logo" />
                            </div>
                        </div>
                        <div className={cx('list-unstyled')}>
                            <Link href="/" className={cx('unstyled-item')}>
                                Điều khoản dịch vụ
                            </Link>
                            <Link href="/" className={cx('unstyled-item')}>
                                Chính sách bảo mật
                            </Link>
                            <Link href="/" className={cx('unstyled-item')}>
                                Về bản quyền
                            </Link>
                            <Link href="/info/question" className={cx('unstyled-item')}>
                                Hướng dẫn sử dụng
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default memo(Footer);
