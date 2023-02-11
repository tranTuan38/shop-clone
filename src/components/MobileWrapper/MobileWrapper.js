import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './MobileWrapper.module.scss';
import Taga from '~/components/Taga';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MobileWrapper({ title, allTitle = 'Xem tất cả', contentStyles = {}, navTitle, children, onClick = () => {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('media-title')}>
                    <h2 className={cx('title')}>{title}</h2>
                    {navTitle && <span className={cx('nav-title')}>{navTitle}</span>}
                </div>
                <div className={cx('content')} style={contentStyles}>
                    {children}
                </div>
            </div>
            <button className={cx('all')} onClick={onClick}>
                {allTitle}
            </button>
        </div>
    );
}

export default memo(MobileWrapper);
