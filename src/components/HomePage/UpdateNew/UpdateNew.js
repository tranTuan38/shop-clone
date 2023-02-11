import classNames from 'classnames/bind';
import styles from './UpadteNew.module.scss';

import { useGetProperties, useGetReadingBook, useGetCreateChater } from '~/hooks';
import { removeVietnameseTones } from '~/handler';
import Taga from '~/components/Taga';
import ListUpdate from './ListUpdate';
import { memo } from 'react';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

function Home() {
    const data = useGetCreateChater();
    const viewPort = useViewport();
    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2 className={cx('h2')}>Mới cập nhật</h2>
                {!viewPort && <Taga href="/list-book/" className={cx('title-link')} title="Xem tất cả" />}
            </div>
            <div className={cx('content')}>
                <ListUpdate data={data} formatLink={formatLink} viewPort={viewPort} />
            </div>
            {viewPort && <Taga href="/list-book/" className={cx('title-link')} title="Xem tất cả" />}
        </div>
    );
}

export default memo(Home);
