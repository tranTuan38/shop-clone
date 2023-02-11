import classNames from 'classnames/bind';

import styles from './NotFoundLayout.module.scss';
import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { memo } from 'react';

const cx = classNames.bind(styles);

function NotFoundLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <BackGrpImgs />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <div id="popup-root" />
            <Footer />
        </div>
    );
}

export default memo(NotFoundLayout);
