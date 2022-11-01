import classNames from 'classnames/bind';

import styles from '../Review.module.scss';

const cx = classNames.bind(styles);

function Rating({ title, percent, totalRate, read, time, setTime }) {
    const timeCur = new Date();
    const itemTime = new Date(time);

    return (
        <>
            {!!title && <div className={cx('h5')}>{title}</div>}
            <div className={cx('list-rating')}>
                <span className={cx('rating')}>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <span className={cx('active')} style={{ width: `${percent}%` }}>
                        <i className="nh-icon icon-star mr-4"></i>
                        <i className="nh-icon icon-star mr-4"></i>
                        <i className="nh-icon icon-star mr-4"></i>
                        <i className="nh-icon icon-star mr-4"></i>
                        <i className="nh-icon icon-star mr-4"></i>
                    </span>
                </span>
                <span className={cx('total-rate')}>{totalRate}</span>
                {!!read && (
                    <div className={cx('read')}>
                        <i className="nh-icon icon-eye-glasses mr-8"></i>
                        {` Đã đọc: ${read} chương`}
                    </div>
                )}
                {!!time && (
                    <div className={cx('time')}>
                        <i className="nh-icon icon-clock mr-8"></i>
                        {setTime(timeCur, itemTime)}
                    </div>
                )}
            </div>
        </>
    );
}

export default Rating;
