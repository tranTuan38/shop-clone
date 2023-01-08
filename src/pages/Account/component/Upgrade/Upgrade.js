import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './Upgrade.module.scss';

const cx = classNames.bind(styles);

function Upgrade({ type }) {
    const handlerClick = (e) => {
        alert('Chức năng chưa được hỗ trợ, vui lòng thông cảm!');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <p>- Sau khi nâng cấp tài khoản bạn sẽ không bị làm phiền bởi quảng cáo</p>
                <p>- Phí nâng cấp tài khoản 30,000 Kẹo / 30 ngày</p>
            </div>
            <button className={cx('btn')} onClick={handlerClick}>
                Nâng cấp
            </button>
        </div>
    );
}

export default memo(Upgrade);
