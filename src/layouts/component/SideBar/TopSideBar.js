import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function TopSideBar() {
    return <div className={cx('top-wrapper')}></div>;
}

export default TopSideBar;
