import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './Asset.module.scss';
import { iconFeel } from '~/assets/Icon-feels';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AssetFlower({ data }) {
    const [historyData, setHistoryData] = useState([]);

    return (
        <div className={cx('container')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('icon')}>
                        <i style={{ backgroundImage: `url(${iconFeel.flower})` }}></i>
                    </div>
                    <div className={cx('user-data')}>
                        <div className={cx('one')}>
                            Đang còn
                            <span> {data.flower} </span>
                            hoa
                        </div>
                        <div className={cx('two')}>Tự động bổ sung lại số hoa tối đa vào nửa đêm</div>
                    </div>
                    <div className={cx('change')}>
                        <h6>{data.flower}</h6>
                    </div>
                </div>
                <hr />
                <div className={cx('history')}>
                    <h6>Lịch sử</h6>
                </div>
            </div>
        </div>
    );
}

export default memo(AssetFlower);
