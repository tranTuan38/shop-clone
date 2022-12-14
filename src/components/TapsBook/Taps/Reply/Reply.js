import classNames from 'classnames/bind';
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import InputReply from './InputReply';
import SpinnerGrow from '~/components/SpinnerGrow';
import {
    handleTime,
    handlerGetPostData,
    handlerDeleteData,
    handlerGetRatingLength,
    handlerInteractData,
    handlerCheckLike,
} from '~/handler';
import { requestData } from '~/services';
import ActionLogin from '~/components/ActionLogin';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

function Reply({ data, idBook, isLogin, navActiveData, user, pageCur, setUpdateNum, onActionReports }) {
    const [checkPageCur, setCheckPageCur] = useState(pageCur);
    const [checkView, setCheckView] = useState(false);
    const [firstAll, setFirstAll] = useState(false);
    const [listReply, setListReply] = useState([]);
    const [checkRep, setCheckRep] = useState({});
    const [notIn, setNotIn] = useState(false);

    const { setRepData, setTime, setCmtUser } = navActiveData;

    // console.log(listReply);

    const btnReplyRef = useRef();
    const allBtnRef = useRef();

    const handlerViewAll = () => {
        setNotIn(true);
    };

    const handlerHideListRep = () => {
        setNotIn(false);
        setListReply([]);
        setCheckRep({});
    };

    const handlerCheckRep = (id) => {
        setCheckRep((prev) => ({ ...prev, [id]: !prev.id }));
    };

    // console.log(data);

    // console.log('pageCur :', pageCur);
    // console.log('checkPageCur: ', checkPageCur);

    useLayoutEffect(() => {
        if (pageCur !== checkPageCur) {
            setListReply([]);
            setCheckPageCur(pageCur);
            setNotIn(false);
            setFirstAll(false);
        }

        // console.log('notIn :', notIn);
        if (notIn && pageCur === checkPageCur) {
            const listData = setRepData(data.userReply);
            const listCheck = data.userReply.reduce((acc, user, index) => {
                return { ...acc, [`${index}`]: user.repCmt.length < 400 };
            }, {});

            const setDataRep = (data) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data);
                    }, 500);
                });
            };

            const asyncListData = async () => {
                setFirstAll(true);
                const result = await setDataRep(listData);
                setListReply(result);
                setCheckRep(listCheck);
            };
            asyncListData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notIn, pageCur]);

    useLayoutEffect(() => {
        // console.dir(allBtnRef.current);
        if (listReply.length) {
            const listCheck = data.userReply.reduce((acc, user, index) => {
                return { ...acc, [`${index}`]: user.repCmt.length < 400 };
            }, {});
            setCheckRep(listCheck);
        }
        // handlerSetNumberAllReply()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listReply.length]);

    const handlerOpen = (type) => {
        const textDom = document.querySelector(`[data-user-cmt-action=${type}-${data.idUser}]`);
        textDom?.focus();
    };

    const handlerClose = (type) => {
        const textDom = document.querySelector(`[data-user-cmt-action=${type}-${data.idUser}]`);
        textDom?.blur();
    };

    const handlerReport = (id, idReport) => {
        // console.log(onActionReports);

        onActionReports.openReport(id, idReport);
    };

    const handlerBtnLike = (dataSetValue = '', navUserId, type = 0, repIndex, scope) => {
        // console.log(scope);
        if (isLogin) {
            const idCur = Number.isInteger(navUserId) ? navUserId : data.idUser;
            const isCheck = handlerCheckLike(type, idBook, idCur, user.id, scope);
            const btnLikeDom = document.querySelector(dataSetValue);

            // console.log(isCheck);

            // toastReact(3, 'L???i', messages.message);
            if (isCheck) {
                const interactData = handlerInteractData(type, idBook, idCur, user?.id, 1, repIndex, scope);
                // console.log(interactData);

                if (!interactData.isResult) {
                    toastReact(3, 'L???i', interactData.message);
                    return;
                }

                if (interactData.isResult) {
                    if (Number.isInteger(navUserId)) {
                        const userDatas = data.userReply.find(
                            (item) => item.id === navUserId && item.idReplyIndex === repIndex,
                        );
                        if (userDatas) {
                            btnLikeDom?.classList.remove(cx('active'));
                            btnLikeDom.lastChild.textContent = userDatas.like(idBook, data.idUser);
                            return;
                        }
                        return;
                    }

                    btnLikeDom?.classList.remove(cx('active'));
                    btnLikeDom.lastChild.textContent = data.rateLike(idBook);
                }
            } else {
                const interactData = handlerInteractData(type, idBook, idCur, user?.id, 0, repIndex, scope);
                // console.log('repIndex: ', repIndex);

                if (!interactData.isResult) {
                    toastReact(3, 'L???i', interactData.message);
                    return;
                }

                if (interactData.isResult) {
                    if (Number.isInteger(navUserId)) {
                        const userDatas = data.userReply.find(
                            (item) => item.id === navUserId && item.idReplyIndex === repIndex,
                        );

                        if (userDatas) {
                            btnLikeDom.classList.add(cx('active'));
                            btnLikeDom.lastChild.textContent = userDatas.like(idBook, data.idUser);
                            return;
                        }
                        return;
                    }
                    btnLikeDom?.classList.add(cx('active'));
                    btnLikeDom.lastChild.textContent = data.rateLike(idBook);
                }
            }
        } else {
            toastReact(3, 'L???i', 'Vui l??ng ????ng nh???p ????? th???c hi???n thao t??c.');
        }
    };

    // console.log(data);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <div className={cx('all-reply')} onClick={handlerViewAll} ref={allBtnRef}>
                    {!!data.userReply.length && !notIn && `Xem ${data.userReply.length} tr??? l???i`}
                </div>
                <div className={cx('action-btn')} style={{ display: 'flex' }}>
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={(e) => handlerOpen(`like`)}
                        onClose={(e) => handlerClose('like')}
                    >
                        <button
                            data-user-cmt-action={`like-${data.idUser}`}
                            className={cx('btn', {
                                active: isLogin && handlerCheckLike(0, idBook, data.idUser, user?.id),
                            })}
                            onClick={() => handlerBtnLike(`[data-user-cmt-action=like-${data.idUser}]`)}
                        >
                            <i className="nh-icon icon-like"></i>
                            {data.rateLike(idBook)}
                        </button>
                    </ActionLogin>
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={(e) => handlerOpen('reply')}
                        onClose={(e) => handlerClose('reply')}
                    >
                        <button
                            ref={btnReplyRef}
                            data-user-cmt-action={`reply-${data.idUser}`}
                            className={cx('btn', { active: notIn || firstAll })}
                            onClick={() => {
                                setFirstAll(true);
                                setTimeout(() => {
                                    btnReplyRef.current.blur();
                                    const textareaDom = document.querySelector(
                                        `[data-text-user-reply="${data.idUser}"]`,
                                    );
                                    textareaDom?.focus();
                                }, 200);
                            }}
                        >
                            <i className="nh-icon icon-reply"></i>
                            Tr??? l???i
                        </button>
                    </ActionLogin>
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={(e) => handlerOpen('flag')}
                        onClose={(e) => handlerClose('flag')}
                    >
                        {user?.id === data?.idUser ? (
                            <button
                                data-cmt-reply={`flag-${data?.idCmt}`}
                                className={cx('btn', { active: false })}
                                onClick={() => {
                                    const isCheck = handlerDeleteData('rating', idBook, user.id);
                                    if (isCheck) {
                                        const spanDom = document.querySelector('[data-sub-tap=review]');
                                        spanDom.innerText = handlerGetRatingLength(idBook);
                                        setUpdateNum((prev) => prev - 1);
                                    }
                                    // console.log(isCheck);
                                }}
                            >
                                <i className="nh-icon icon-trash"></i>
                                X??a
                            </button>
                        ) : (
                            <button
                                data-cmt-reply={`flag-${data?.idCmt}`}
                                className={cx('btn', { active: false })}
                                onClick={(e) => {
                                    handlerReport(user?.id, data?.idUser);
                                }}
                            >
                                <i className="nh-icon icon-flag"></i>
                                B??o x???u
                            </button>
                        )}
                    </ActionLogin>
                </div>
            </div>
            <div className={cx('list')}>
                {notIn && (
                    <>
                        <div className={cx('media')}>
                            {!!listReply.length &&
                                listReply.map((item, index) => {
                                    return (
                                        <div key={item.idReplyIndex} className={cx('media-item')}>
                                            <div className={cx('avatar')}>
                                                <img src={item.avatar} alt={item.name} />
                                                <span className={cx('level')}>{`C???p ${item.level}`}</span>
                                            </div>
                                            <div className={cx('media-body')}>
                                                <Link
                                                    to={`/profile/${handlerGetPostData(item.name).id}`}
                                                    className={cx('media-name')}
                                                >
                                                    {item.name}
                                                </Link>
                                                <div className={cx('media-cmt')}>
                                                    <span className={cx('media-description')}>
                                                        {checkRep[`${index}`] ? item.repCmt : setCmtUser(item.repCmt)}
                                                    </span>
                                                    <span className={cx('media-check')}>
                                                        <button
                                                            className={cx('media-btn')}
                                                            onClick={() => handlerCheckRep(index)}
                                                        >
                                                            {checkRep[`${index}`] ? undefined : '?????c ti???p'}
                                                        </button>
                                                    </span>
                                                </div>
                                                <div className={cx('media-info')}>
                                                    <button
                                                        data-nav-user-likes={`user-${item.id}`}
                                                        className={cx('btn', {
                                                            active:
                                                                isLogin &&
                                                                handlerCheckLike(
                                                                    2,
                                                                    idBook,
                                                                    item.id,
                                                                    user?.id,
                                                                    data.idUser,
                                                                ),
                                                        })}
                                                        onClick={() =>
                                                            handlerBtnLike(
                                                                `[data-nav-user-likes=user-${item.id}]`,
                                                                item.id,
                                                                2,
                                                                item.idReplyIndex,
                                                                data.idUser,
                                                            )
                                                        }
                                                    >
                                                        <i className="nh-icon icon-like-alt"></i>
                                                        {item.like(idBook, data.idUser)}
                                                    </button>
                                                    <div className={cx('btn')}>
                                                        <i className="nh-icon icon-clock"></i>
                                                        {setTime(new Date(), new Date(item.time))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <button className={cx('hide-rep')} onClick={handlerHideListRep}>
                            ???n tr??? l???i
                        </button>
                    </>
                )}
                {firstAll && (
                    <InputReply
                        src={isLogin ? user?.avatar : undefined}
                        isLogin={isLogin}
                        ActionLogin={ActionLogin}
                        user={user}
                        listUser={data}
                        onSetUserReply={setListReply}
                    />
                )}
            </div>
        </div>
    );
}

export default memo(Reply);
