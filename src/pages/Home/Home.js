import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}></div>
                <div className={cx('new-update')}></div>
            </div>
            <div className={cx('ranking')}></div>
            <div className={cx('rating')}></div>
        </div>
    );
}

export default Home;
