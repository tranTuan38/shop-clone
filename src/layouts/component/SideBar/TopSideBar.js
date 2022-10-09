import { useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SideBar.module.scss';
import { ListTopSideBar } from '~/components/ListSideBar';
import { handleTopSideBarTitle } from '~/handler';

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

function TopSideBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const obj = useLocation();
    const sortBy = searchParams.get('sort_by');
    // const result = handleTopSideBarTitle();

    // console.log(result);

    return (
        <div className={cx('top-wrapper')}>
            {Object.entries(titleTopSideBar).map((item, index) => (
                <ListTopSideBar
                    key={index}
                    type={item[0]}
                    data={item[1]}
                    check={sortBy}
                    pathname={obj.pathname}
                    search={obj.search}
                    onSetTitle={handleTopSideBarTitle}
                />
            ))}
        </div>
    );
}

export default TopSideBar;
