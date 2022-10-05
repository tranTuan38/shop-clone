import classNames from 'classnames/bind';
import styles from './ListBookLayout.module.scss';
import { useParams, useSearchParams } from 'react-router-dom';

import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';
import { LeftSideBar, TopSideBar } from '../component/SideBar';

const cx = classNames.bind(styles);

function ListBookLayout({ children }) {
    return (
        <div>
            <Header />
            <BackGrpImgs />
            <div className={cx('wrapper')}>
                <div className="grid wide">
                    <div className={cx('container')}>
                        <div className={cx('content')}>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <div id="popup-root" />
        </div>
    );
}

export default ListBookLayout;
