import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { memo } from 'react';

import styles from './UserGuide.module.scss';
import UserInfo from './UserInfo';
import PaginationPage from '~/components/PaginationPage';

const cx = classNames.bind(styles);

function UserGuide({ data, limit, nameSearch }) {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        setListUser(data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, limit]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('h2')}>
                <h2>Người hâm mộ hàng đầu</h2>
            </div>
            <PaginationPage data={listUser} limit={limit} PageItem={UserInfo} nameSearch={nameSearch} />
        </div>
    );
}

export default memo(UserGuide);
