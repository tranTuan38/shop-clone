import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './BookRead.module.scss';
import { handlerGetBookReadData, handlerDeleteBookReadData, removeVietnameseTones } from '~/handler';
import { useStore } from '~/hooks';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const listIcons = [
    { type: 'reading', icons: ['icon-bell', 'icon-trash'] },
    { type: 'mark', icons: ['icon-trash'] },
];

function BookRead({ type }) {
    const [state] = useStore();
    const [bookData, setBookData] = useState([]);
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        setBookData(handlerGetBookReadData(type, state.userData().id));
        const iconsData = listIcons.find((item) => item.type === type);
        setIcons(iconsData.icons);
    }, []);

    const handlerClickBtn = (e, icon, classParent, idBook) => {
        if (icon === 'icon-bell') e.target.parentNode.classList.toggle(`${cx('active')}`);
        if (icon === 'icon-trash') {
            const parentNode = e.target.closest(`.${classParent}`);
            parentNode.classList.add(`${cx('hide')}`);
            handlerDeleteBookReadData(type, idBook, state.userData().id);

            setTimeout(() => {
                setBookData((prev) => prev.filter((book) => book.idBook !== idBook));
            }, 400);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {bookData.map((book, index) => {
                    const navNumber = book.chapter.length ? book.chapter[0].number : '';
                    const linkName = `/list-book/${removeVietnameseTones(book.bookName)}`;
                    const link = navNumber ? `${linkName}/chuong-${navNumber}` : linkName;

                    return (
                        <div className={cx('item')} key={book.idBook}>
                            <Link to={link} className={cx('img')}>
                                <img src={book.bookImg} />
                            </Link>
                            <div className={cx('media')}>
                                <div className={cx('body')}>
                                    <Link to={link} className={cx('title')}>
                                        {book.bookName}
                                    </Link>
                                    <div className={cx('nav')}>
                                        {type === 'reading'
                                            ? `Đã đọc: ${navNumber}/${book.totalChapter}`
                                            : `Đánh dấu: ${navNumber}/${book.totalChapter}`}
                                    </div>
                                </div>
                                <div className={cx('btn')}>
                                    {icons.map((icon, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => handlerClickBtn(e, icon, cx('item'), book.idBook)}
                                        >
                                            <i className={`nh-icon ${icon}`}></i>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(BookRead);
