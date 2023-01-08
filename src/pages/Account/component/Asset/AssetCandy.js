import classNames from 'classnames/bind';
import { memo, useState } from 'react';

import styles from './Asset.module.scss';
import { iconFeel } from '~/assets/Icon-feels';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function AssetCandy({ data }) {
    const [historyData, setHistoryData] = useState([]);
    const navigate = useNavigate();

    const handlerClick = (e) => {
        navigate('/account/#bonus');
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('icon')}>
                    <i style={{ backgroundImage: `url(${iconFeel.candy})` }}></i>
                </div>
                <div className={cx('user-data')}>
                    <div className={cx('one')}>
                        Đang có
                        <span> {data.candy + data.freeCandy} </span>
                        kẹo
                    </div>
                    <div className={cx('two')}>
                        Bao gồm
                        <span> {data.freeCandy} </span>
                        kẹo miễn phí
                    </div>
                </div>
                <div className={cx('change')}>
                    <button onClick={handlerClick}>Nhận thưởng</button>
                </div>
            </div>
            <hr />
            <div className={cx('history')}>
                <h6>Lịch sử</h6>
            </div>
        </div>
    );
}

export default memo(AssetCandy);
