import { Fragment, useEffect, useRef, useState, memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../Chapter.module.scss';
import { removeVietnameseTones, removeSpaceString, handlerGetPostData } from '~/handler';

const cx = classNames.bind(styles);

function ChapterInfo({ chapterData }) {
    let timeChapter;

    if (chapterData) {
        timeChapter = chapterData.timeCreatChapter.replace('T', ' ');
    }

    return (
        <div className={cx('icons')}>
            <div className={cx('icon')}>
                <i className="nh-icon icon-book" />
                <Link to={`/list-book/${removeVietnameseTones(chapterData.bookName)}`}>{chapterData.bookName}</Link>
            </div>
            <div className={cx('icon')}>
                <i className="nh-icon icon-file-edit" />
                <Link to={`/profile/${handlerGetPostData(chapterData.poster).id}`}>{chapterData.poster}</Link>
            </div>
            <div className={cx('icon')}>
                <i className="nh-icon icon-text" />
                {removeSpaceString(chapterData.content, true).length} chữ
            </div>
            <div className={cx('icon')}>
                <i className="nh-icon icon-heart" />
                {chapterData.getTotalFeel()} cảm xúc
            </div>
            <div className={cx('icon')}>
                <i className="nh-icon icon-clock" />
                {timeChapter}
            </div>
        </div>
    );
}

export default memo(ChapterInfo);
