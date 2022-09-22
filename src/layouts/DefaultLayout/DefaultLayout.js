import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../Header';
import BackGrpImgs from '~/components/BackGrpImgs';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <BackGrpImgs />
            <div className={cx('wrapper')}>
                <div className="grid wide">
                    <div className={cx('container')}>
                        <div className={cx('content')}>{children}</div>
                    </div>
                </div>
            </div>
            <div id="popup-root" />
        </div>
    );
}

export default DefaultLayout;
