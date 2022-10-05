import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function LeftSideBar() {
    return (
        <div className={cx('left-wrapper')}>
            <div className={cx('selected')}>
                <h5>Đã chọn</h5>
            </div>
        </div>
    );
}

export default LeftSideBar;
