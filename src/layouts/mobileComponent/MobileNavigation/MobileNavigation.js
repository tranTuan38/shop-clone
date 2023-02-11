import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNavigation.module.scss';

const cx = classNames.bind(styles);

function MobileNavigation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to="/list-book/">
                    <i className="nh-icon icon-grid" />
                    Danh sách
                </Link>
                <Link to="/bxh/week/popular">
                    <i className="nh-icon icon-chart" />
                    Xếp hạng
                </Link>
                <a href="https://pub.truyen.onl/books/create" rel="noreferrer" target="_blank">
                    <i className="nh-icon icon-send" />
                    Đăng truyện
                </a>
            </div>
        </div>
    );
}

export default memo(MobileNavigation);
