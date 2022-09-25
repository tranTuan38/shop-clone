import classNames from 'classnames/bind';
import styles from './ListBookLayout.module.scss';

import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';

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
                            {children}
                            ListBookLayout
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
