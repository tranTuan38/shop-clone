import classNames from 'classnames/bind';
import styles from '~/components/MediaItem/MediaItem.module.scss';

import { useGetProperties, useGetReadingBook, useGetRankWeek, useGetRate, useGetBookRating } from '~/hooks';
import Taga from '~/components/Taga';
import Img from '~/components/Img';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RatingItem({ data, type, formatLink, genreLink }) {
    return (
        <div
            className={cx('media', {
                [type]: type,
            })}
        >
            {data[0] && type === 'rating' && (
                <Img href={formatLink(data[0].name)} src={data[0].bookImg} className={cx('img-item')} />
            )}
            {data[0] && type === 'rating' ? (
                <div className={cx('body')}>
                    <h2 className={cx('item-title')}>
                        <Taga href={formatLink(data[0].name)} title={data[0].name} className={cx('item-link')} />
                    </h2>
                    <div className={cx('user-rate')}>
                        <div className={cx('number')}>
                            <span>5.00</span>
                        </div>
                        <div className={cx('write')}>{`${data[1]} đánh giá`}</div>
                    </div>
                    <div className={cx('description')}>
                        <p>{data[0].description}</p>
                    </div>
                    <div className={cx('intimate')}>
                        <span className={cx('author')}>
                            <span className={cx('author-inner')}>
                                <i className="nh-icon icon-user-edit"></i>
                                {data[0].authorName}
                            </span>
                        </span>
                        <Taga
                            href={genreLink(data[0].category)}
                            className={cx('category', { ['item-link']: type })}
                            title={data[0].category}
                        />
                    </div>
                </div>
            ) : undefined}
            {data && type === 'new-rating' && (
                <>
                    <div className={cx('body-2', { [type]: type })}>
                        {data.map((item, index) => (
                            <div className={cx('user-container')} key={index}>
                                <div key={index} className={cx('user-info')}>
                                    <Link to="#" className={cx('user-avatar')}>
                                        <img className={cx('avatar')} src={item.user[0].userAvata} />
                                    </Link>
                                    <div className={cx('newLink')}>
                                        <Link className={cx('item-link')} to="#">
                                            {item.user[0].userName}
                                            <span> đánh giá</span>
                                        </Link>
                                        <Link
                                            className={cx('item-link', { ['book-name']: type })}
                                            to={formatLink(item.bookName)}
                                        >
                                            <span>{item.bookName}</span>
                                        </Link>
                                    </div>
                                    <div className={cx('user-rate')}>
                                        <span className={cx('number-2')}>
                                            {item.user[0].dataRating[
                                                item.user[0].dataRating.length - 1
                                            ].rate.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </div>
                                <div className={cx('comment')}>
                                    <span>{item.user[0].dataRating[item.user[0].dataRating.length - 1].comment}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default RatingItem;
