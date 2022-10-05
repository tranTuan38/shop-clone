import classNames from 'classnames/bind';
import styles from './UpadteNew.module.scss';

import { useGetProperties, useGetReadingBook, useGetCreateChater } from '~/hooks';
import Taga from '~/components/Taga';
import ListUpdate from './ListUpdate';

const cx = classNames.bind(styles);

function Home() {
    const data = useGetCreateChater();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <h2 className={cx('h2')}>Mới cập nhật</h2>
                <Taga href="#" className={cx('title-link')} title="Xem tất cả" />
            </div>
            <div className={cx('content')}>
                <ListUpdate data={data} />
            </div>
        </div>
    );
}

export default Home;
