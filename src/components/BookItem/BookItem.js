import classNames from 'classnames/bind';
import styles from './BookItem.module.scss';

import { useGetCategory } from '~/hooks';
import MediaItem from '~/components/MediaItem';
import RatingItem from '~/components/HomePage/Rating/RatingItem';
import { removeVietnameseTones } from '~/handler';

const cx = classNames.bind(styles);

function BookItem({ data, type }) {
    const [listGenre] = useGetCategory();

    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    const genreLink = (value) => {
        let indexValue;
        for (let i = 0; i < listGenre.length; i++) {
            const element = listGenre[i];
            if (listGenre[i].includes(value)) {
                indexValue = i;
                break;
            }
        }

        return `/list-book/?genre=${indexValue}`;
    };

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
                                            <RatingItem
                                                data={item}
                                                type={type}
                                                formatLink={formatLink}
                                                genreLink={genreLink}
                                            />
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
