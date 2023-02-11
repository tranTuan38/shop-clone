import classNames from 'classnames/bind';
import { memo, useEffect, useState, useRef, Fragment } from 'react';

import styles from './MobileTapCom.module.scss';

import {
    Reviewer,
    InputBox,
    BySelected,
    ListReviewCmt,
    Rating,
    Note,
} from '~/components/TapsBook/Taps/Review/ReviewItem';
import imgs from '~/assets/imgs';
import { SetPersonRatingForBook, handlerGetBookMediaData, getListRatingForBook, handleTime } from '~/handler';
import { listBookData, listRating, userData, listComment } from '~/initdata';
import ActionLogin from '~/components/ActionLogin';
import ReportForm from '~/components/Form/ReportForm';

const cx = classNames.bind(styles);

const listSelected = [
    { title: 'Tính cách nhân vật', type: 'character' },
    { title: 'Nội dung cốt truyện', type: 'story' },
    { title: 'Bố cục thế giới', type: 'background' },
];

function MobileRate({ data, loginData }) {
    const isLogin = loginData.login;
    const user = loginData.userData();
    const [updateNum, setUpdateNum] = useState(0);

    const [value, setValue] = useState('like_count');

    const [textValue, setTextValue] = useState('');

    const [listReviewCmt, setListReviewCmt] = useState([]);

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

    const handlerSetValue = (event) => {
        setValue(event.target.value);
    };

    const handlerOpen = (e) => {
        const textDom = document.querySelector('[data-user-rate="false"]');
        textDom?.focus();
    };

    const handlerClose = (e) => {
        const textDom = document.querySelector('[data-user-rate="false"]');
        textDom?.blur();
    };

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

    const { listInfo, setRating, setRate, rateUser, totalNumberUser, getCommentById } = handlerGetBookMediaData(
        listRating,
        listComment,
        userData,
    );

    const totalUser = totalNumberUser(data.idBook);

    let WrapperCom = 'div';
    const reportRef = useRef();

    if (loginData.login) {
        WrapperCom = Fragment;
    }

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

    useEffect(() => {
        const dataReview = getListReviewCmt(data.idBook, value);

        const listRating = getListRatingForBook(data.idBook);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.idBook, value, updateNum, isLogin]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('rate')}>
                <div className={cx('content-title')}>
                    <h2>Đánh giá</h2>
                    <div className={cx('by')}>
                        <select
                            className={cx('select')}
                            style={{ backgroundImage: `url('${imgs.arrow}')` }}
                            value={value}
                            onChange={handlerSetValue}
                        >
                            <option className={cx('selected')} value="like_count">
                                Lượt thích
                            </option>
                            <option className={cx('selected')} value="id">
                                Mới nhất
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('container')}>
                    <div className={cx('note-content')}>
                        <div className={cx('c4', { ['rated']: true })}>
                            <div className={cx('info')}>
                                <Rating
                                    title={`Đã có ${totalUser} đánh giá`}
                                    percent={SetPersonRatingForBook(bookData.totalRate)}
                                    totalRate={bookData.totalRate}
                                    styleChange={styles}
                                />
                            </div>
                            <div className={cx('hr')} />
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Tính cách nhân vật'}
                                    percent={SetPersonRatingForBook(bookData.character)}
                                    totalRate={bookData.character}
                                    styleChange={styles}
                                />
                            </div>
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Nội dung cốt truyện'}
                                    percent={SetPersonRatingForBook(bookData.story)}
                                    totalRate={bookData.story}
                                    styleChange={styles}
                                />
                            </div>
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Bố cục thế giới'}
                                    percent={SetPersonRatingForBook(bookData.background)}
                                    totalRate={bookData.background}
                                    styleChange={styles}
                                />
                            </div>
                            <div className={cx('info', { ['nav']: true })}>
                                <Rating
                                    title={'Chất lượng bản dịch'}
                                    percent={100}
                                    totalRate={'5.00'}
                                    styleChange={styles}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('rate-content')}>
                        <Reviewer
                            isLogin={isLogin}
                            data={listSelected}
                            bookData={ratingInput}
                            OnChangeInput={handlerOnChangeInput}
                            classBind={cx}
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
                                    classBind={cx}
                                />
                            </WrapperCom>
                        </ActionLogin>
                    </div>
                    {!!listReviewCmt.length && (
                        <ListReviewCmt
                            setRepData={handlerSetReplyCmt}
                            checkTapsIndex={true}
                            data={listReviewCmt}
                            by={value}
                            Rating={Rating}
                            setPerson={SetPersonRatingForBook}
                            setTime={handleTime}
                            isLogin={isLogin}
                            user={user}
                            idBook={data.idBook}
                            setUpdateNum={setUpdateNum}
                            onActionReports={reportRef.current}
                            styleChange={styles}
                        />
                    )}
                </div>
                <ReportForm ref={reportRef} />
            </div>
        </div>
    );
}

export default memo(MobileRate);
