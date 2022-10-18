import classNames from 'classnames/bind';
import styles from './MediaItem.module.scss';
import { useLocation } from 'react-router-dom';

import Taga from '~/components/Taga';
import Img from '~/components/Img';
import { removeVietnameseTones } from '~/handler';
import { useGetCategory } from '~/hooks';

const cx = classNames.bind(styles);

function MediaItem({ data, type }) {
    const location = useLocation();
    const [listGenre] = useGetCategory();
    // console.log(location);
    const formatLink = (link) => {
        let linkValue;
        if (location.pathname === '/') {
            linkValue = `/list-book/${removeVietnameseTones(link)}`;
            return linkValue;
        } else if (location.pathname === '/list-book/') {
            return removeVietnameseTones(link);
        }
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
        <div
            className={cx('media', {
                [type]: type,
            })}
        >
            <Img href={formatLink(data.name)} src={data.bookImg} className={cx('img-item')} loading="lazy" />
            {(data && type === 'sugges') || (data && type === 'status') || (data && type === 'listBook') ? (
                <div className={cx('body')}>
                    <h2 className={cx('item-title')}>
                        <Taga href={formatLink(data.name)} title={data.name} className={cx('item-link')} />
                    </h2>
                    <div className={cx('description')}>
                        <p>{data.description}</p>
                    </div>
                    <div className={cx('intimate')}>
                        <div className={cx('author')}>
                            <div className={cx('author-inner')}>
                                <i className="nh-icon icon-user-edit"></i>
                                {data.authorName}
                            </div>
                            {type === 'listBook' ? (
                                <div className={cx('author-inner')}>
                                    <i className="nh-icon icon-menu"></i>
                                    {data.totalChapter} chương
                                </div>
                            ) : undefined}
                        </div>
                        <Taga
                            href={genreLink(data.category)}
                            className={cx('category', { ['item-link']: type })}
                            title={data.category}
                        />
                    </div>
                </div>
            ) : undefined}
            {data && type === 'reading' ? (
                <div className={cx('body-2')}>
                    <h3 className={cx('item-title')}>
                        <Taga className={cx('item-link')} href={formatLink(data.name)} title={data.name} />
                    </h3>
                    <span>{`Đã đọc: ${data.read}/${data.totalChapter}`}</span>
                </div>
            ) : undefined}
        </div>
    );
}

export default MediaItem;
