import classNames from 'classnames/bind';

import styles from './NotFoundLayout.module.scss';
import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { memo } from 'react';
import { useViewport } from '~/hooks';
import MobileSearch from '../mobileComponent/MobileSearch';

const cx = classNames.bind(styles);

function NotFoundLayout({ children }) {
    const viewPort = useViewport();

    return (
        <div className={cx('wrapper')}>
            {viewPort ? <MobileSearch /> : <Header />}
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
