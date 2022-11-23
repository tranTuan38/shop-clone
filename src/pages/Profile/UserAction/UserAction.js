import classNames from 'classnames/bind';
import { useEffect, memo, useState } from 'react';

import styles from './UserAction.module.scss';
import { requestData } from '~/services';
import Loading from '~/components/Loading';
import Read from './Read';
import Post from './Post';

const cx = classNames.bind(styles);

function UserAction({ data }) {
    const [userRead, userPost] = data;
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState([]);

    useEffect(() => {
        requestData({ dataList: data, type: 'userAction', setLoading, setListData });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {loading && <Loading style={{ marginTop: '46px' }} />}
                {!loading && !userRead && !userPost?.length && <span className={cx('no-data')}>Chưa có hoạt động</span>}
                {!loading && userRead && <Read data={listData[0]} />}
                {!loading && !!userPost?.length && <Post data={listData[1]} />}
            </div>
        </div>
    );
}

export default memo(UserAction);
