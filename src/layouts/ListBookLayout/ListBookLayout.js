import classNames from 'classnames/bind';

import styles from './ListBookLayout.module.scss';
import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { LeftSideBar, TopSideBar } from '../component/SideBar';
import MobileSearch from '../mobileComponent/MobileSearch';
import { memo, useEffect } from 'react';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

function ListBookLayout({ children }) {
    const viewPort = useViewport();

    useEffect(() => {
        document.title = 'Danh sách truyện Convert';
    }, []);

    return (
        <div>
            {viewPort ? <MobileSearch /> : <Header />}
            <BackGrpImgs />
            <div className={cx('wrapper')}>
                <div className="grid wide">
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            {viewPort ? (
                                <></>
                            ) : (
                                <div className="row">
                                    <div className="col c-3">
                                        <div className={cx('left-side-bar')}>
                                            <LeftSideBar />
                                        </div>
                                    </div>
                                    <div className="col c-9">
                                        <div className={cx('top-side-bar')}>
                                            <TopSideBar />
                                        </div>
                                        {children}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div id="popup-root" />
        </div>
    );
}

export default memo(ListBookLayout);
