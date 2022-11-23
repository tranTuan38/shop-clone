import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './Guide.module.scss';
import imgs from '~/assets/imgs';

const listLevelpoint = [1000000, 700000, 500000, 400000, 300000, 200000, 100000, 50000, 20000, 5000, 0];

const cx = classNames.bind(styles);

function Guide({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('h2')}>
                <h2>Hướng dẫn</h2>
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('title')}>Một, làm sao để trở thành người hâm mộ</div>
                    <p>
                        <span>&sdot;</span>
                        Khi bạn tặng hoa, tặng quà cho truyện hoặc trả phí đọc truyện, bạn trở thành người hâm mộ của
                        truyện.
                    </p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>Hai, cách tính điểm hâm mộ?</div>
                    <p>
                        <span>&sdot;</span>
                        Tiêu xài 1 Kẹo = 1 điểm hâm mộ (trả phí đọc, tặng quà)
                    </p>
                    <p>
                        <span>&sdot;</span>
                        Tặng 1 Hoa = 1000 điểm hâm mộ
                    </p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>Ba, điểm hâm mộ hiện tại của tôi?</div>
                    <p>
                        <span>&sdot;</span>
                        Bạn cần đăng nhập mới xem được điểm hâm mộ và xếp hạng của mình
                    </p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('title')}>Bốn, đẳng cấp cùng xưng hào?</div>
                    <div className={cx('level')}>
                        <div className={cx('level-content')}>
                            <div className={cx('level-list-title')}>
                                <div className={cx('level-title')}>Đẳng cấp</div>
                                <div className={cx('level-title')}>Điểm hâm mộ</div>
                            </div>
                            <div className={cx('level-info')}>
                                {imgs.imgsGuide.map((item, index) => {
                                    return (
                                        <div className={cx('level-list-item')} key={index}>
                                            <div className={cx('level-item', { ['level-img']: true })}>
                                                <img src={item.src} />
                                            </div>
                                            <div className={cx('level-item', { point: true })} key={index}>
                                                {listLevelpoint[index]}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Guide);
