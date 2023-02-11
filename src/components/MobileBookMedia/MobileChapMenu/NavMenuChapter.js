import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileChapMenu.module.scss';
import { handlerSetLink, handleTime } from '~/handler';

const cx = classNames.bind(styles);

function NavMenuChapter({ data = [] }) {
    // console.log(data);

    const handlerSetTime = (chapter) => {
        const timeCur = new Date();
        const chapTime = new Date(chapter.timeCreatChapter);

        return handleTime(timeCur, chapTime);
    };

    return (
        <div className={cx('list-chapter')}>
            {data.map((item) => {
                return (
                    <div className={cx('chapter-item')} key={item.idChapter}>
                        <Link className={cx('chapter-link')}>
                            <p>
                                {item.numberChapter < 10 ? 'Chương 0' : 'Chương'}
                                {item.numberChapter}: {item.nameChapter}.{' '}
                                <span className={cx('chapter-time')}>({handlerSetTime(item)})</span>
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(NavMenuChapter);
