import classNames from 'classnames/bind';

import styles from './NotFoundLayout.module.scss';
import Header from '../component/Header';
import BackGrpImgs from '../component/BackGrpImgs';
import Footer from '../component/Footer';

const cx = classNames.bind(styles);

function NotFoundLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <BackGrpImgs />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
            <div id="popup-root" />
        </div>
    );
}

export default NotFoundLayout;
