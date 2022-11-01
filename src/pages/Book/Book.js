import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import TapsBook from '~/components/TapsBook';
import { listBookData, listRating, userData, listComment } from '~/initdata';
import styles from './Book.module.scss';
import BookMedia from '~/components/BookMedia';
import { removeVietnameseTones } from '~/handler';

const cx = classNames.bind(styles);

function Book() {
    const { name } = useParams();

    const bookData = (bookName) => {
        const data = listBookData.find((item) => {
            const dataSearch = removeVietnameseTones(item.name);
            return dataSearch === bookName;
        });

        return data;
    };

    const book = bookData(name);

    // console.log(book);

    useEffect(() => {
        document.title = book.name;
        window.scrollTo({
            top: 0,
        });
    }, [book.idBook]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('book-content')}>
                    <BookMedia data={{ book: book, rating: listRating }} />
                </div>
                <div className={cx('book-content')}>
                    <TapsBook
                        data={book}
                        listBookData={listBookData}
                        rating={listRating}
                        userData={userData}
                        listComment={listComment}
                    />
                </div>
            </div>
        </div>
    );
}

export default Book;
