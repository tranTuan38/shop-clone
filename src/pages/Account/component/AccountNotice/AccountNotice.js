import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { memo } from 'react';

import styles from './AccountNotice.module.scss';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function AccountNotice({ type }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}></div>
            <button className={cx('btn')}>Xem thêm</button>
        </div>
    );
}

export default memo(AccountNotice);
