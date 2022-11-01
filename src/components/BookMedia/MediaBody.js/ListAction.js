import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../BookMedia.module.scss';

const cx = classNames.bind(styles);

function ListAction() {
    return (
        <div className={cx('list-action')}>
            <div className={cx('action-item', { ['reading']: true })}>
                <Link className={cx('btn')} to="chuong-1">
                    <i className="nh-icon icon-glass"></i>
                    <span className={cx('action-title')}>Đọc truyện</span>
                </Link>
            </div>
            <div className={cx('action-item', { ['bookmark']: true })}>
                <button className={cx('btn')}>
                    <i className="nh-icon icon-save"></i>
                    <span className={cx('action-title')}>Đánh dấu</span>
                </button>
            </div>
            <div className={cx('action-item', { ['sugges']: true })}>
                <button className={cx('btn')}>
                    <i className="nh-icon icon-flower no-content"></i>
                    <span className={cx('action-title')}>Đề cử</span>
                </button>
            </div>
        </div>
    );
}

export default ListAction;
