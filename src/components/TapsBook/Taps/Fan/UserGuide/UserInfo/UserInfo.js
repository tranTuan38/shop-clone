import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './UserInfo.module.scss';
import Loading from '~/components/Loading';
import UserItem from '../UserItem';
import { requestData } from '~/services';

const cx = classNames.bind(styles);

function UserInfo({ data, pageCur }) {
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);

    // console.log(data);

    useEffect(() => {
        const asynData = async () => {
            await requestData({ dataList: data, type: 'fan', delay: 500, setLoading, setListData });
        };

        asynData();
    }, [data, pageCur]);

    return (
        <div className={cx('wrapper')}>
            {!listData.length && (
                <p>
                    Hiện chưa có ai hâm mộ cuốn sách này, hãy tặng hoa, tặng quà hoặc mở khóa chương để trở thành người
                    hâm mộ của bộ truyện nhé bạn.
                </p>
            )}
            {!!listData.length && (
                <div className="row">
                    {loading && <Loading style={{ margin: 'auto' }} />}

                    {!!listData.length &&
                        !loading &&
                        listData.map((item, index) => {
                            return (
                                <div className="col c-3" key={index}>
                                    {!!data.length && <UserItem data={item} />}
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
}

export default memo(UserInfo);
