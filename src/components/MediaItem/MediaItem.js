import classNames from 'classnames/bind';
import styles from './MediaItem.module.scss';

import Taga from '~/components/Taga';
import Img from '~/components/Img';

const cx = classNames.bind(styles);

function MediaItem({ data, type }) {
    return (
        <div
            className={cx('media', {
                [type]: type,
            })}
        >
            <Img href="/" src={data.bookImg} className={cx('img-item')} />
            {data && type === 'sugges' ? (
                <div className={cx('body')}>
                    <h2 className={cx('item-title')}>
                        <Taga href="#" title={data.name} className={cx('item-link')} />
                    </h2>
                    <div className={cx('description')}>
                        <p>{data.description}</p>
                    </div>
                    <div className={cx('intimate')}>
                        <span className={cx('author')}>{data.authorName}</span>
                        <Taga href="#" className={cx('category', { ['item-link']: type })} title={data.category} />
                    </div>
                </div>
            ) : undefined}
            {data && type === 'reading' ? (
                <div className={cx('body-2')}>
                    <h3 className={cx('item-title')}>
                        <Taga className={cx('item-link')} href="#" title={data.name} />
                    </h3>
                    <span>{`Đã đọc: ${data.read}/${data.totalChapter}`}</span>
                </div>
            ) : undefined}
        </div>
    );
}

export default MediaItem;
