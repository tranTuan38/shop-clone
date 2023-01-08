import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './InfoMenu.module.scss';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function InfoMenu({ close }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h5 className={cx('title')}>Hướng dẫn</h5>
                <button className={cx('close')} onClick={close}>
                    &times;
                </button>
            </div>
            <div className={cx('container')}>
                <img src={imgs.imgSupport.src} alt="Hướng dẫn" className={cx('img')} />
                <button className={cx('btn')} onClick={close}>
                    Tắt
                </button>
            </div>
        </div>
    );
}

export default memo(InfoMenu);
