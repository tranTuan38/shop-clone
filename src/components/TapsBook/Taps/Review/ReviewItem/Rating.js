import classNames from 'classnames/bind';

import styles from '../Review.module.scss';

import { useViewport } from '~/hooks';

let cx = classNames.bind(styles);

function Rating({ title, percent, totalRate, read, time, setTime, styleChange }) {
    const timeCur = new Date();
    const itemTime = new Date(time);
    const viewPort = useViewport();

    if (styleChange) cx = classNames.bind(styleChange);

    return (
        <>
            {!!title && <div className={cx('h5')}>{title}</div>}
            <div className={cx('list-rating')}>
                {viewPort ? (
                    <>
                        <div>
                            <span className={cx('rating')} style={{ color: '#ffc000', marginRight: '4px' }}>
                                <i className="nh-icon icon-star mr-4"></i>
                            </span>
                            <span className={cx('total-rate')} style={{ margin: '0' }}>
                                {totalRate}
                            </span>
                        </div>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </>
    );
}

export default Rating;
