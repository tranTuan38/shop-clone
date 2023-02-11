import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Taga from '~/components/Taga';
import MediaItem from '~/components/MediaItem';
import Guide from './Guide';

const cx = classNames.bind(styles);

function Reading({ data, type, viewPort = false }) {
    const [listReading, listGuide] = data;
    return (
        <>
            <div className={cx('reading')}>
                <div className={cx('media-title', { ['reading-title']: type })}>
                    <h2 className={cx('title')}>Đang đọc</h2>
                    {!viewPort && <Taga href="/account/#books" className={cx('all')} title="Xem tất cả" />}
                </div>
                <div className={cx('content')}>
                    {listReading.map((item, index) => (
                        <div key={index}>
                            <MediaItem data={item} type={type} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className={cx('hr')} />
            {viewPort ? (
                <Taga href="/account/#books" className={cx('all')} title="Xem tất cả" />
            ) : (
                <Guide data={listGuide} />
            )}
        </>
    );
}

export default Reading;
