import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../BookMedia.module.scss';
import ActionLogin from '~/components/ActionLogin';
import { useStore } from '~/hooks';
import { memo } from 'react';
import {
    handlerSaveLocalData,
    handlerLocalStorage,
    handlerChangeBookLink,
    handlerGetChapterData,
    handlerGetLocalData,
    removeVietnameseTones,
} from '~/handler';

const cx = classNames.bind(styles);

function ListAction({ data }) {
    let chapter;
    const navigate = useNavigate();
    const [state] = useStore();
    const localStorageAction = handlerLocalStorage();
    const isLogin = state.login;
    const readingData = handlerGetLocalData(data.idBook, localStorageAction);
    const linkChapter = handlerChangeBookLink(readingData);
    if (readingData) {
        chapter = handlerGetChapterData(readingData.nameFormat, readingData.numBerFormat, state.userData());
    } else {
        chapter = handlerGetChapterData(removeVietnameseTones(data.name), linkChapter, state.userData());
    }
    // const chapterData = handlerGetChapterData(name, chapter, state.userData());

    // console.log(chapter);

    return (
        <div className={cx('list-action')}>
            <div className={cx('action-item', { ['reading']: true, ['read-action']: readingData })}>
                <Link className={cx('btn')} to={linkChapter}>
                    <i className="nh-icon icon-glass"></i>
                    <span className={cx('action-title')}>{readingData ? 'Đọc tiếp' : 'Đọc truyện'}</span>
                </Link>
            </div>
            <div className={cx('action-item', { ['bookmark']: true })}>
                <ActionLogin isLogin={isLogin}>
                    <button className={cx('btn')}>
                        <i className="nh-icon icon-save"></i>
                        <span className={cx('action-title')}>Đánh dấu</span>
                    </button>
                </ActionLogin>
            </div>
            <div className={cx('action-item', { ['sugges']: true })}>
                <ActionLogin isLogin={isLogin} style={{ color: 'inherit' }}>
                    <button className={cx('btn')}>
                        <i className="nh-icon icon-flower no-content"></i>
                        <span className={cx('action-title')}>Đề cử</span>
                    </button>
                </ActionLogin>
            </div>
        </div>
    );
}

export default memo(ListAction);
