import classNames from 'classnames/bind';
import { useEffect, useState, memo, Fragment, useRef } from 'react';

import styles from './Review.module.scss';
import imgs from '~/assets/imgs';
import { Reviewer, InputBox, BySelected, ListReviewCmt, Rating, Note } from './ReviewItem';
import ActionLogin from '~/components/ActionLogin';
import ReportForm from '~/components/Form/ReportForm';

const cx = classNames.bind(styles);

const listSelected = [
    { title: 'Tính cách nhân vật', type: 'character' },
    { title: 'Nội dung cốt truyện', type: 'story' },
    { title: 'Bố cục thế giới', type: 'background' },
];

function Review({
    checkTapsIndex,
    data,
    user,
    listRating,
    userData,
    totalNumberUser,
    setListRating,
    setPerson,
    setTime,
    className,
    isLogin,
}) {
    const [updateNum, setUpdateNum] = useState(0);

    const [bookData, setBooData] = useState({
        character: 0,
        story: 0,
        background: 0,
        totalRate: 0,
    });

    // console.log(user);

    const [ratingInput, setRatingInput] = useState({
        character: 0,
        story: 0,
        background: 0,
    });

    // console.log(isLogin);

    let WrapperCom = 'div';
    const reportRef = useRef();

    if (isLogin) {
        WrapperCom = Fragment;
    }

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
                    idUser: users.id,
                    name: users.name,
                    level: users.level,
                    avatar: users.avatar,
                    time: item.time,
                    spoli: item.spoli,
                    rateCharacter: item.rateCharacter,
                    rateContent: item.rateContent,
                    rateBgr: item.rateBgr,
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
            } else if (by === 'like_count') {
                setListBook.sort((a, b) => {
                    const aLikes = a.rateLike(id);
                    const bLikes = b.rateLike(id);
                    return bLikes - aLikes;
                });
            }
            return setListBook;
        } else {
            return [];
        }
    };

    // console.log(123);

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

    const handlerOpen = (e) => {
        const textDom = document.querySelector('[data-user-rate="false"]');
        textDom?.focus();
    };

    const handlerClose = (e) => {
        const textDom = document.querySelector('[data-user-rate="false"]');
        textDom?.blur();
    };

    useEffect(() => {
        if (checkTapsIndex) {
            const dataReview = getListReviewCmt(data.idBook, value);

            const listRating = setListRating(data.idBook);
            setBooData(listRating);
            setListReviewCmt(dataReview);

            if (isLogin) {
                const userRateData = dataReview.find((item) => item.idUser === user.id);

                if (userRateData)
                    setRatingInput({
                        character: userRateData.rateCharacter,
                        story: userRateData.rateContent,
                        background: userRateData.rateBgr,
                    });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.idBook, value, checkTapsIndex, updateNum, isLogin]);

    // console.log(listRating);

    return (
        <div className={cx('wrapper', { [className]: !!className })}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <Reviewer
                                isLogin={isLogin}
                                data={listSelected}
                                bookData={ratingInput}
                                OnChangeInput={handlerOnChangeInput}
                            />
                            <ActionLogin isLogin={isLogin} onOpen={handlerOpen} onClose={handlerClose}>
                                <WrapperCom>
                                    <InputBox
                                        setUpdateNum={setUpdateNum}
                                        idBook={data.idBook}
                                        ratingInput={ratingInput}
                                        data={textValue}
                                        OnTextValue={handlerTextValue}
                                        isLogin={isLogin}
                                        user={user}
                                        onSetListReviewCmt={setListReviewCmt}
                                    />
                                </WrapperCom>
                            </ActionLogin>
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
                                isLogin={isLogin}
                                user={user}
                                idBook={data.idBook}
                                setUpdateNum={setUpdateNum}
                                onActionReports={reportRef.current}
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
                                    title={'Nội dung cốt truyện'}
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
            <ReportForm ref={reportRef} />
        </div>
    );
}

export default memo(Review);
