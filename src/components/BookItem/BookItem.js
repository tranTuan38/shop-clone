import classNames from 'classnames/bind';
import styles from './BookItem.module.scss';

import MediaItem from '~/components/MediaItem';
import RatingItem from '~/components/HomePage/Rating/RatingItem';

const cx = classNames.bind(styles);

function BookItem({ data, type }) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className={cx('wrapper')} key={index}>
                        <div className="row">
                            {item.map((item, index) => {
                                return (
                                    <div key={index} className="col c-6">
                                        {type === 'rating' ? (
                                            <RatingItem data={item} type={type} />
                                        ) : (
                                            <MediaItem data={item} type={type} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <hr className={cx('hr')} />
                    </div>
                );
            })}
        </>
    );
}

export default BookItem;
