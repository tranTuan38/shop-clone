import classNames from 'classnames/bind';
import { getListBookServices } from '~/services';
import { BookInfo, UserPost } from './IntroItem';

import styles from './Intro.module.scss';
import { handleTime } from '~/handler';
import { userData, listAuthors } from '~/initdata';
import { handlerSetDataSubIntro } from '~/handler';
import { useState, useEffect, memo } from 'react';

const cx = classNames.bind(styles);

const listRank = ['Đồng', 'Bạc', 'Vàng', 'Bạch Kim', 'Kim Cương'];

function Intro({ data, nameSearch, checkTapsIndex, className }) {
    const [curBook, setCurBook] = useState();
    const [listBookAuthor, setListBookAuthor] = useState([]);
    const [listPostData, setListPostData] = useState([]);
    const { getUserData, userTotalPost, userListPostData, getListBookWithAuthor, setDescription } =
        handlerSetDataSubIntro(data, userData, listRank, handleTime);

    const user = getUserData();
    const listTotal = userTotalPost();

    // console.log(data);

    useEffect(() => {
        if (curBook && nameSearch !== curBook) {
            setListBookAuthor([]);
            setListPostData([]);
            setCurBook(nameSearch);
            return;
        }

        if (checkTapsIndex) {
            const result = getListBookWithAuthor();
            const listPost = userListPostData();

            const dataAsync = async () => {
                setCurBook(nameSearch);
                const listBookAuthor = await getListBookServices(result, 'intro', 700);
                setListBookAuthor(listBookAuthor);
                const dataUser = await getListBookServices(listPost, 'intro', 100);
                setListPostData(dataUser);
            };

            dataAsync();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkTapsIndex, curBook, nameSearch]);

    return (
        <div className={cx('wrapper', { [className]: !!className })}>
            <div className="row">
                <BookInfo data={data} />
                <UserPost
                    authorName={data.authorName}
                    data={[listBookAuthor, listPostData]}
                    nameSearch={nameSearch}
                    setDescription={setDescription}
                    userData={user}
                    listTotal={listTotal}
                    listAuthors={listAuthors}
                />
            </div>
        </div>
    );
}

export default memo(Intro);
