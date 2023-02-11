import classNames from 'classnames/bind';
import styles from './ListRankLayout.module.scss';

import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ListRankLayout({ children }) {
    return (
        <div>
            <Header />
            <BackGrpImgs />
            <div className={cx('wrapper')}>
                <div className="grid wide">
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            {children}
                            ListRankLayout
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div id="popup-root" />
        </div>
    );
}

export default memo(ListRankLayout);
