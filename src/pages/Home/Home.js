import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { ContentPage, UpdateBook } from '~/components/HomePage';

import { useGetProperties, useGetReadingBook } from '~/hooks';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ContentPage />
                <UpdateBook />
            </div>
            <div className={cx('ranking')}></div>
            <div className={cx('rating')}></div>
        </div>
    );
}

export default Home;
