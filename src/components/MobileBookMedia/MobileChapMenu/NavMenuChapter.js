import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileChapMenu.module.scss';
import { handlerSetLink, handleTime } from '~/handler';

const cx = classNames.bind(styles);

function NavMenuChapter({ data = [], bookName = '', onChange = () => {} }) {
    // console.log(data);

    const handlerSetTime = (chapter) => {
        const timeCur = new Date();
        const chapTime = new Date(chapter.timeCreatChapter);

        return handleTime(timeCur, chapTime);
    };

    const { formatLink } = handlerSetLink();

    const handlerOnClick = () => {
        onChange();
    };

    // console.log(bookName);

    return (
        <div className={cx('list-chapter')}>
            {data.map((item) => {
                const nameFormat = formatLink(bookName);
                const chapNumber = item.numberChapter;
                const linkChange = `${nameFormat}/chuong-${chapNumber}`;

                return (
                    <div className={cx('chapter-item')} key={item.idChapter}>
                        <Link to={linkChange} className={cx('chapter-link')} onClick={handlerOnClick}>
                            <p>
                                {chapNumber < 10 ? 'Chương 0' : 'Chương'}
                                {chapNumber}: {item.nameChapter}.{' '}
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
