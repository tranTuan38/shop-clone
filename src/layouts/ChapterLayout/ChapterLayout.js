import classNames from 'classnames/bind';

import Header from '../component/Header';
import styles from './ChapterLayout.module.scss';

const cx = classNames.bind(styles);

function ChapterLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default ChapterLayout;
