import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Review.module.scss';
import imgs from '~/assets/imgs';
import { Reviewer, InputBox, BySelected, ListReviewCmt, Rating, Note } from './ReviewItem';
import { memo } from 'react';

const cx = classNames.bind(styles);

const listSelected = [
    { title: 'Tính cách nhân vật', type: 'character' },
    { title: 'Nội dung cốt truyện', type: 'story' },
    { title: 'Bố cục thế giới', type: 'background' },
];

function Review({
    checkTapsIndex,
    data,
    listRating,
    userData,
    totalNumberUser,
    setListRating,
    setPerson,
    setTime,
    className,
}) {
    const [bookData, setBooData] = useState({
        character: 0,
        story: 0,
        background: 0,
        totalRate: 0,
    });

    const [ratingInput, setRatingInput] = useState({
        character: 0,
        story: 0,
        background: 0,
    });

    // console.log(listRating)

    const [textValue, setTextValue] = useState('');

    const [value, setValue] = useState('like_count');

    const [listReviewCmt, setListReviewCmt] = useState([]);

    const handlerOnChangeInput = (event, type) => {
        const valueData = +event.target.value;
        setRatingInput((prev) => {
            const newData = { ...prev, [type]: valueData };
            return newData;
        });
    };

    const handlerTextValue = (value) => {
        setTextValue(value);
    };

    const getListReviewCmt = (id, by) => {
        const book = listRating.find((rate) => rate.idBook === id);
        if (book) {
            const setListBook = book.rating.map((item) => {
                const users = userData.find((user) => user.id === item.idUser);
                return {
                    idBook: id,
                    rateLike: item.rateLike,
                    name: users.name,
                    level: users.level,
                    avatar: users.avatar,
                    time: item.time,
                    spoli: item.spoli,
                    userReply: item.userReply,
                    comment: item.comment,
                    totalViewChapter: item.totalViewChapter,
                    totalRate: item.getTotalRate(),
                };
            });
            if (by === 'id') {
                setListBook.sort((a, b) => {
                    const aTime = new Date(a.time);
                    const bTime = new Date(b.time);
                    return bTime - aTime;
                });
            }
            return setListBook;
        } else {
            return [];
        }
    };

    const handlerSetReplyCmt = (userReply) => {
        const listRepData = userReply.map((repUser) => {
            const user = userData.find((item) => item.id === repUser.id);
            return {
                ...repUser,
                name: user.name,
                level: user.level,
                avatar: user.avatar,
            };
        });

        return listRepData;
    };

    const totalUser = totalNumberUser(data.idBook);

    useEffect(() => {
        if (checkTapsIndex) {
            const listRating = setListRating(data.idBook);
            setBooData(listRating);
            setListReviewCmt(getListReviewCmt(data.idBook, value));
        }
    }, [data.idBook, value, checkTapsIndex]);

    return (
        <div className={cx('wrapper', { [className]: !!className })}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <Reviewer data={listSelected} bookData={ratingInput} OnChangeInput={handlerOnChangeInput} />
                            <InputBox data={textValue} OnTextValue={handlerTextValue} />
                        </div>
                        <BySelected imgs={imgs} setValue={setValue} value={value} />
                        {!!listReviewCmt.length && (
                            <ListReviewCmt
                                setRepData={handlerSetReplyCmt}
                                checkTapsIndex={checkTapsIndex}
                                data={listReviewCmt}
                                by={value}
                                Rating={Rating}
                                setPerson={setPerson}
                                setTime={setTime}
                            />
                        )}
                    </div>
                </div>
                <div className="col c-4">
                    <div className={cx('note-content')}>
                        <div className={cx('c4', { ['rated']: true })}>
                            <div className={cx('info')}>
                                <Rating
                                    title={`Đã có ${totalUser} đánh giá`}
                                    percent={setPerson(bookData.totalRate)}
                                    totalRate={bookData.totalRate}
                                />
                            </div>
                            <div className={cx('hr')} />
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Tính cách nhân vật'}
                                    percent={setPerson(bookData.character)}
                                    totalRate={bookData.character}
                                />
                            </div>
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Nội dung cốt  truyện'}
                                    percent={setPerson(bookData.story)}
                                    totalRate={bookData.story}
                                />
                            </div>
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Bố cục thế giới'}
                                    percent={setPerson(bookData.background)}
                                    totalRate={bookData.background}
                                />
                            </div>
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating title={'Chất lượng bản dịch'} percent={100} totalRate={'5.00'} />
                            </div>
                        </div>
                        <Note />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Review);
