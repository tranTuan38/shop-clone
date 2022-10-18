import classNames from 'classnames/bind';
import styles from './UpadteNew.module.scss';

import { useGetProperties, useGetReadingBook, useGetCreateChater } from '~/hooks';
import { removeVietnameseTones } from '~/handler';
import Taga from '~/components/Taga';
import ListUpdate from './ListUpdate';

const cx = classNames.bind(styles);

function Home() {
    const data = useGetCreateChater();
    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2 className={cx('h2')}>Mới cập nhật</h2>
                <Taga href="/list-book/" className={cx('title-link')} title="Xem tất cả" />
            </div>
            <div className={cx('content')}>
                <ListUpdate data={data} formatLink={formatLink} />
            </div>
        </div>
    );
}

export default Home;
