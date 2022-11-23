import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './CreateMedia.module.scss';
import { handlerViewBookData } from '~/handler';

const cx = classNames.bind(styles);

function MediaIcon({ type, data }) {
    return (
        <div className={cx('book-info')}>
            <div className={cx('info-item', { left: true })}>
                {type === 'user' && (
                    <span className={cx('icon')}>
                        <i className="nh-icon icon-user-edit"></i>
                        {data.authorName}
                    </span>
                )}
                <span className={cx('icon')}>
                    <i className="nh-icon icon-book"></i>
                    {data.category}
                </span>
                <span className={cx('icon')}>
                    <i className="nh-icon icon-page"></i>
                    {`${data.totalChapter} chương`}
                </span>
            </div>
            <div className={cx('info-item', { right: true })}>
                <span className={cx('icon')}>
                    <i className="nh-icon icon-eye-glasses"></i>
                    {handlerViewBookData(data.view)}
                </span>
                <span className={cx('icon')}>
                    <i className="nh-icon icon-flower"></i>
                    {data.rankWeekNomination}
                </span>
            </div>
        </div>
    );
}

export default memo(MediaIcon);
