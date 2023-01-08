import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import TapsBook from '~/components/TapsBook';
import { listBookData, listRating, userData, listComment } from '~/initdata';
import styles from './Book.module.scss';
import BookMedia from '~/components/BookMedia';
import { removeVietnameseTones } from '~/handler';
import { useStore } from '~/hooks';

// import { getState, saveState } from '~/components/StateSaver';

const cx = classNames.bind(styles);

function Book() {
    const { name } = useParams();
    const [data, setData] = useState({});
    const [state] = useStore();

    useEffect(() => {
        const bookData = (bookName) => {
            const data = listBookData.find((item) => {
                const dataSearch = removeVietnameseTones(item.name);
                return dataSearch === bookName;
            });

            return data;
        };
        const book = bookData(name);

        if (book) {
            document.title = book.name;
            setData(book);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('book-content')}>
                    {data.name && <BookMedia data={{ book: data, rating: listRating }} />}
                </div>
                <div className={cx('book-content')}>
                    {data.name && (
                        <TapsBook
                            data={data}
                            nameSearch={name}
                            listBookData={listBookData}
                            rating={listRating}
                            userData={userData}
                            listComment={listComment}
                            isLogin={state.login}
                            user={state.userData()}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Book;
