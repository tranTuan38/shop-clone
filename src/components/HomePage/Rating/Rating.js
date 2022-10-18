import classNames from 'classnames/bind';
import styles from './Rating.module.scss';

import { useGetRate, useGetBookRating, useGetComment } from '~/hooks';
import { removeVietnameseTones } from '~/handler';
import Taga from '~/components/Taga';
import BookItem from '~/components/BookItem';
import RatingItem from '~/components/HomePage/Rating/RatingItem';

const cx = classNames.bind(styles);

function Rating() {
    const data = useGetRate();
    const datas = useGetBookRating(data);
    const commentData = useGetComment();

    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('content')}>
                        <div className={cx('appreciate')}>
                            <h2 className={cx('h2')}>Đánh giá cao</h2>
                            <Taga
                                className={cx('rating-link')}
                                href="/list-book/?sort_by=review_score"
                                title="Xem tất cả"
                            />
                        </div>
                        <div className={cx('inner')}>
                            <BookItem data={datas} type="rating" />
                        </div>
                    </div>
                </div>
                <div className="col c-4">
                    <div className={cx('content')}>
                        <div className={cx('judge')}>
                            <h2 className={cx('h2')}>Mới đánh giá</h2>
                            <Taga
                                className={cx('rating-link')}
                                href="/list-book/?sort_by=review_score"
                                title="Xem tất cả"
                            />
                        </div>
                        <div className={cx('inner')}>
                            <RatingItem data={commentData} type="new-rating" formatLink={formatLink} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
