import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import { memo, useEffect } from 'react';
import Header from '../component/Header';
import MobileSearch from '../mobileComponent/MobileSearch';
import MobileNavigation from '../mobileComponent/MobileNavigation';
import { useViewport } from '~/hooks';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const location = useLocation();
    const viewPort = useViewport();

    // console.log(location);

    return (
        <div>
            {viewPort ? <MobileSearch /> : <Header />}
            {viewPort && location.pathname === '/' && <MobileNavigation />}
            <BackGrpImgs />
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
            <Footer />
            <div id="popup-root" />
        </div>
    );
}

export default memo(DefaultLayout);
