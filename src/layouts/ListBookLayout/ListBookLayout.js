import classNames from 'classnames/bind';

import styles from './ListBookLayout.module.scss';
import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { LeftSideBar, TopSideBar } from '../component/SideBar';
import MobileSearch from '../mobileComponent/MobileSearch';
import { Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useViewport } from '~/hooks';
import MobileFormConstructor from '~/components/Form/MobileFormConstructor';
import { detectDeviceType } from '~/handler';

const cx = classNames.bind(styles);

function ListBookLayout({ children }) {
    const viewPort = useViewport();
    const [showLeftMenuMobile, setShowLeftMenuMobile] = useState(false);
    const [isDevice, setIsDevice] = useState(detectDeviceType());
    let ComWrapper = Fragment;
    let comProps = {};

    const leftMenuRef = useRef();

    const handlerOpenSideBar = useCallback(() => {
        if (viewPort) {
            leftMenuRef.current?.classList.remove(cx('hide-on-mobile-tablet'));
            document.body.style.overflowY = 'hidden';
        }
    }, [viewPort]);

    const handlerCloseSideBar = useCallback(() => {
        if (viewPort) {
            leftMenuRef.current?.classList.add(cx('hide-on-mobile-tablet'));
            document.body.style.overflowY = 'auto';
        }
    }, [viewPort]);

    if (viewPort) {
        ComWrapper = MobileFormConstructor;
        comProps = { title: 'Bộ lọc', close: handlerCloseSideBar };
    }

    useEffect(() => {
        document.title = 'Danh sách truyện Convert';
    }, []);

    return (
        <div>
            {viewPort ? <MobileSearch /> : <Header />}
            <BackGrpImgs />
            <div className={cx('wrapper')}>
                <div className="grid wide w-rp-100">
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <div className="row no-gutters no-gutters-1024">
                                <div className="col l-3 m-12 c-12" hide-on-mobile-tablet={viewPort.toString()}>
                                    <div
                                        className={cx('left-side-bar', { ['hide-on-mobile-tablet']: viewPort })}
                                        ref={leftMenuRef}
                                    >
                                        <ComWrapper {...comProps}>
                                            <LeftSideBar viewPort={viewPort} />
                                        </ComWrapper>
                                    </div>
                                </div>
                                <div className="col l-9 l-100 m-12 c-12" hide-on-mobile-tablet={(!viewPort).toString()}>
                                    <div className={cx('top-side-bar')}>
                                        <TopSideBar viewPort={viewPort} onShowLeftMenu={handlerOpenSideBar} />
                                    </div>
                                    {children}
                                </div>
                            </div>
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
