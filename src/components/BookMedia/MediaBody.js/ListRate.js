import classNames from 'classnames/bind';

import styles from '../BookMedia.module.scss';

const cx = classNames.bind(styles);
function ListRate({ data }) {
    const { idBook, rating, rate, user } = data;
    return (
        <div className={cx('list-rate')}>
            <span className={cx('rating')}>
                <i className="nh-icon icon-star mr-4"></i>
                <i className="nh-icon icon-star mr-4"></i>
                <i className="nh-icon icon-star mr-4"></i>
                <i className="nh-icon icon-star mr-4"></i>
                <i className="nh-icon icon-star mr-4"></i>
                <span className={cx('active')} style={{ width: `${rating(idBook)}%` }}>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                    <i className="nh-icon icon-star mr-4"></i>
                </span>
            </span>
            <span className={cx('rate')}>
                <strong className="fw-6">{rate(rating(idBook))}</strong>
                /5
            </span>
            <span className={cx('rate-user')}>({user(idBook)} đánh giá)</span>
        </div>
    );
}

export default ListRate;
