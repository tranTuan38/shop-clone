import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { ContentPage, UpdateBook, Ranking, Rating, Status } from '~/components/HomePage';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ContentPage />
                <UpdateBook />
            </div>
            <div className={cx('ranking')}>
                <Ranking />
            </div>
            <div className={cx('container-2')}>
                <div className={cx('rating')}>
                    <Rating />
                </div>
                <div className={cx('status')}>
                    <Status />
                </div>
            </div>
        </div>
    );
}

export default Home;
