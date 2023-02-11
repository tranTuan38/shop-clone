import classNames from 'classnames/bind';
import styles from './MobileLayout.module.scss';

import MobileSearch from '../mobileComponent/MobileSearch';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { memo } from 'react';

const cx = classNames.bind(styles);

function MobileLayout({ children }) {
    return (
        <div>
            <MobileSearch />
            {/* <BackGrpImgs /> */}
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

export default memo(MobileLayout);
