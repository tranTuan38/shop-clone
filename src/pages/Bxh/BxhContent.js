import { useEffect, useState, memo } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Bxh.module.scss';
import { BxhSelected, BxhMedia } from './component';
import PaginationPage from '~/components/PaginationPage';
import Loading from '~/components/Loading';
import { requestData } from '~/services';

const cx = classNames.bind(styles);

function BxhContent({ bxhData, mediaData, icon, type }) {
    const [timeBxh, setTimeBxh] = useState('');
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState([]);

    const location = useLocation();

    useEffect(() => {
        const bxh = bxhData.find((item) => location.pathname.includes(item.path));

        if (bxh) {
            setTimeBxh(bxh.title);
        } else {
            setTimeBxh('Theo tuần');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    useEffect(() => {
        if (mediaData.length) {
            requestData({ dataList: mediaData, type: 'bxh', delay: 500, setLoading, setListData });
        }
    }, [type, mediaData]);

    return (
        <div className={cx('content')}>
            <BxhSelected bxhData={bxhData} timeBxh={timeBxh} />
            {loading && <Loading wrapperStyle={{ marginTop: '70px' }} />}
            {!!listData.length && !loading && (
                <PaginationPage
                    data={listData}
                    limit={10}
                    PageItem={BxhMedia}
                    pageItemProps={{ icon, type }}
                    nameSearch={type}
                />
            )}
        </div>
    );
}

export default memo(BxhContent);
