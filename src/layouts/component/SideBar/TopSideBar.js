import { useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import { ListTopSideBar } from '~/components/ListSideBar';
import { handleTopSideBarTitle, handleTopSideBarSetPath, handleCheckActive, detectDeviceType } from '~/handler';
import { useEffect, useState, useRef, memo } from 'react';

const cx = classNames.bind(styles);

const titleTopSideBar = {
    update: { title: 'Mới cập nhật', children: ['Mới cập nhật', 'Mới đăng'], search: ['new_chap_at', 'create_at'] },
    view: {
        title: 'Lượt đọc',
        children: ['Lượt đọc[ngày]', 'Lượt đọc[tuần]', 'Lượt đọc[tháng]', 'Lượt đọc[toàn]'],
        search: ['view_day', 'view_week', 'view_month', 'view_count'],
    },
    rate: {
        title: 'Điểm đánh giá',
        children: ['Lượt đánh giá', 'Điểm đánh giá'],
        search: ['review_count', 'review_score'],
    },
    keeper: { title: 'Cất giữ', search: 'bookmark' },
    like: { title: 'Yêu thích', search: 'like' },
    nominations: {
        title: 'Đề cử',
        children: ['Đề cử[ngày]', 'Đề cử[tuần]', 'Đề cử[tháng]', 'Đề cử[toàn]'],
        search: ['vote_day', 'vote_week', 'vote_month', 'vote_count'],
    },
    comment: { title: 'Bình luận', search: 'comment' },
    chaps: { title: 'Số chương', search: 'chapter' },
};

function TopSideBar({ viewPort, onShowLeftMenu = () => {} }) {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [listData, setListData] = useState([]);
    const [isDevice, setIsDevice] = useState(detectDeviceType());

    const sort_by = searchParams.get('sort_by');
    const genre = searchParams.get('genre');
    const status = searchParams.get('status');
    const prototypes = searchParams.get('prototypes');
    const tag = searchParams.get('tag');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const keyword = searchParams.get('keyword');

    const listRequest = { sort_by, tag, genre, status, prototypes, keyword };

    // console.log('listRequest: ', listRequest);
    // console.log('sort_by: ', sort_by);

    // const isCheckActive = handleCheckActive('update', listRequest, location, 0);

    // console.log(isCheckActive);

    useEffect(() => {
        setListData(Object.entries(titleTopSideBar));
    }, []);

    const funcEmpty = () => {};

    const handlerOpenLeftMenu = () => {
        onShowLeftMenu();
    };

    // console.log(isDevice);

    return (
        <div className={cx('top-wrapper', { mobile: isDevice })}>
            {viewPort && (
                <div className={cx('mobile-left-menu')}>
                    <button className={cx('mobile-btn')} onClick={handlerOpenLeftMenu}>
                        <i className="nh-icon icon-filter" />
                    </button>
                </div>
            )}
            <div style={{ overflowX: 'auto', display: 'flex', alignItems: 'center' }}>
                {listData.map((item, index) => (
                    <ListTopSideBar
                        key={index}
                        type={item[0]}
                        data={item[1]}
                        check={listRequest.sort_by}
                        pathname={location.pathname}
                        search={location.search}
                        onSetTitle={handleTopSideBarTitle}
                        onSetPath={handleTopSideBarSetPath}
                        onSetActive={handleCheckActive}
                        onSetSearch={setSearchParams}
                        listRequest={listRequest}
                        location={location}
                        funcEmpty={funcEmpty}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(TopSideBar);
