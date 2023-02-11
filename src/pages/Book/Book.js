import { memo, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

import TapsBook from '~/components/TapsBook';
import { listBookData, listRating, userData, listComment } from '~/initdata';
import styles from './Book.module.scss';
import BookMedia from '~/components/BookMedia';
import MobileChapter from '~/components/MobileBookMedia/MobileChapter';
import MobileBookMedia from '~/components/MobileBookMedia';
import MobileTapsBook from '~/components/MobileTapsBook';
import { removeVietnameseTones } from '~/handler';
import { useStore, useViewport } from '~/hooks';

// import { getState, saveState } from '~/components/StateSaver';

const cx = classNames.bind(styles);

function Book() {
    const { name } = useParams();
    const [data, setData] = useState({});
    const [state] = useStore();
    const viewPort = useViewport();

    // console.log(123);

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

    // console.log(data);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('book-content')}>
                    {!viewPort && data.name && <BookMedia data={{ book: data, rating: listRating }} />}
                    {viewPort && data.name && <MobileBookMedia data={{ book: data, rating: listRating }} />}
                </div>
                {viewPort && <MobileChapter data={data} />}
                <div className={cx('book-content')}>
                    {!viewPort && data.name ? (
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
                    ) : (
                        <MobileTapsBook data={data} loginData={state} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(Book);
