import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Taga from '~/components/Taga';
import MediaItem from '~/components/MediaItem';
import Guide from './Guide';

const cx = classNames.bind(styles);

function Reading({ data, type }) {
    const [listReading, listGuide] = data;
    return (
        <div className="col c-4">
            <div className={cx('reading')}>
                <div className={cx('media-title', { ['reading-title']: type })}>
                    <h2 className={cx('title')}>Đang đọc</h2>
                    <Taga href="/account/1" className={cx('all')} title="Xem tất cả" />
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
            <Guide data={listGuide} />
        </div>
    );
}

export default Reading;
