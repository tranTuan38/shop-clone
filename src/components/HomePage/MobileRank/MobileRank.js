import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileRank.module.scss';
import MobileRankTaps from './MobileRankTaps';

const cx = classNames.bind(styles);

function MobileRank({ data }) {
    const [reads, populars, votes] = data;
    // console.log(data);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Bảng xếp hạng tuần</h2>
            <div className={cx('container')}>
                <MobileRankTaps data={data} />
            </div>
            <Link className={cx('all-view')} to="/bxh/week/popular">
                Xem tất cả
            </Link>
        </div>
    );
}

export default memo(MobileRank);
