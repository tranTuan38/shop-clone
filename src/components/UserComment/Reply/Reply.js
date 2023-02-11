import classNames from 'classnames/bind';
import { Fragment, memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import styles from './Reply.module.scss';
import InputReply from './InputReply';
import SpinnerGrow from '~/components/SpinnerGrow';
import {
    handleTime,
    handlerGetPostData,
    handlerCheckLike,
    handlerDeleteData,
    handlerGetCommentLength,
    handlerInteractData,
} from '~/handler';
import { requestData } from '~/services';
import toastReact from '~/components/ToastMessages';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

function Reply({
    data,
    idBook,
    listDataCmt,
    navActiveData,
    classActive,
    isLogin,
    ActionLogin,
    user,
    src,
    onActionReports,
    setDeleteData,
    getListDataCmt = () => {},
    scopeItem,
}) {
    const [checkView, setCheckView] = useState(false);
    const [firstAll, setFirstAll] = useState(false);
    const [listReply, setListReply] = useState([]);
    const [checkRep, setCheckRep] = useState({});
    const [notIn, setNotIn] = useState(false);
    const InputReplyRef = useRef();
    const params = useParams();
    const viewPort = useViewport();

    // console.log(params);

    let WrapperCom = 'div';

    if (isLogin) {
        WrapperCom = Fragment;
    }

    // console.log(data);
    // console.log('classActive: ', listReply);

    const { setTime, setCmtUser } = navActiveData;

    const btnLikkeRef = useRef();

    const handlerViewAll = () => {
        setNotIn(true);
        setFirstAll(true);
    };

    const handlerHideListRep = () => {
        setNotIn(false);
        if (viewPort) setFirstAll(false);
        setListReply([]);
        setCheckRep({});
    };

    const handlerCheckRep = (id) => {
        setCheckRep((prev) => ({ ...prev, [id]: !prev.id }));
    };

    // console.log(firstAll);

    const handlerBtn = () => {
        setFirstAll(true);
        if (viewPort) {
            setNotIn(true);
            const dataChange = getListDataCmt(scopeItem);

            if (dataChange?.length) {
                InputReplyRef.current?.focus();
            }
        }
    };

    // console.log('pageCur :', listDataCmt);
    // console.log('dataChange: ', getListDataCmt(scopeItem));

    useLayoutEffect(() => {
        if (notIn) {
            const dataChange = getListDataCmt(scopeItem);
            const listCheck = dataChange.reduce((acc, user, index) => {
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
                const result = await setDataRep(dataChange);
                setListReply(result);
                setCheckRep(listCheck);
            };
            asyncListData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notIn]);

    useLayoutEffect(() => {
        // console.dir(allBtnRef.current);
        if (isLogin && listReply.length) {
            const dataChange = getListDataCmt(scopeItem);
            const listCheck = dataChange.reduce((acc, user, index) => {
                return { ...acc, [`${index}`]: user.repCmt.length < 400 };
            }, {});
            setCheckRep(listCheck);
        }
        // handlerSetNumberAllReply()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listReply.length]);

    const handlerCmtReplyOpen = (type) => {
        const btnDom = document.querySelector(`[data-cmt-reply=${type}-${data?.idCmt}]`);
        btnDom?.focus();
        InputReplyRef.current?.focus();
    };

    const handlerCmtReplyClose = (type) => {
        const btnDom = document.querySelector(`[data-cmt-reply=${type}-${data?.idCmt}]`);
        btnDom?.blur();
        InputReplyRef.current?.blur();
    };

    const handlerReport = (id, idReport) => {
        // console.log(id, idReport);

        onActionReports.openReport(id, idReport);
    };

    const handlerAction = (type, navUserId, repIndex, domBtn, getLike = () => {}) => {
        if (isLogin) {
            const idCur = Number.isInteger(navUserId) ? navUserId : data.idUser;
            const listType = ['comment', 'navComment'];
            const checks = { comment: 1, navComment: 3 };
            const isCheck = handlerCheckLike(checks[listType[type]], idBook, idCur, user?.id, data.idCmt, repIndex);
            const actions = { true: 1, false: 0 };
            const classActions = { true: 'remove', false: 'add' };
            const interactData = handlerInteractData(
                checks[listType[type]],
                idBook,
                idCur,
                user?.id,
                actions[isCheck],
                Number.isInteger(repIndex) ? repIndex : data.idCmt,
                data.idCmt,
            );

            // console.log('checks[listType[type]: ', checks[listType[type]]);
            // console.log('user: ', user?.id);
            // console.log('repIndex: ', repIndex);
            // console.log('data.idCmt: ', data.idCmt);

            const navBtn = document.querySelector(domBtn);

            if (!interactData?.isResult) {
                toastReact(3, 'Lỗi', interactData?.message);
                return;
            }

            // console.log(btnLikkeRef.current);

            if (isCheck) {
                if (type === 0) {
                    btnLikkeRef.current.childNodes[1].textContent = data.cmtLike(idBook);
                    btnLikkeRef.current.classList[classActions[isCheck]](cx('active'));
                } else if (type === 1) {
                    // console.log(navBtn);
                    if (navBtn) {
                        navBtn.childNodes[1].textContent = getLike(idBook, data.idCmt);
                        navBtn.classList[classActions[isCheck]](cx('active'));
                        return;
                    }
                    toastReact(3, 'Lỗi', 'Phần tử DOM lấy ra không đúng');
                }
            } else {
                if (type === 0) {
                    // console.dir(btnLikkeRef.current.childNodes[1]);
                    btnLikkeRef.current.childNodes[1].textContent = data.cmtLike(idBook);
                    btnLikkeRef.current.classList[classActions[isCheck]](cx('active'));
                } else if (type === 1) {
                    // console.log(navBtn);
                    if (navBtn) {
                        navBtn.childNodes[1].textContent = getLike(idBook, data.idCmt);
                        navBtn.classList[classActions[isCheck]](cx('active'));
                        return;
                    }
                    toastReact(3, 'Lỗi', 'Phần tử DOM lấy ra không đúng');

                    // console.dir(btnLikkeRef.current.childNodes[1]);
                }
            }
        }
    };

    return (
        <div className={cx('wrapper', { classActive, ['page-comment']: params.chapter })}>
            <div className={cx('action')}>
                {!viewPort && (
                    <div className={cx('all-reply')} onClick={handlerViewAll}>
                        {!!data.userReply.length && !notIn && `Xem ${data.userReply.length} trả lời`}
                    </div>
                )}
                <div
                    className={cx('action-btn')}
                    style={{ display: 'flex', justifyContent: viewPort && 'space-between', flex: viewPort && '1' }}
                >
                    <div>
                        <ActionLogin
                            isLogin={isLogin}
                            onOpen={() => handlerCmtReplyOpen('like')}
                            onClose={() => handlerCmtReplyClose('like')}
                        >
                            <button
                                ref={btnLikkeRef}
                                data-cmt-reply={`like-${data?.idCmt}`}
                                className={cx('btn', {
                                    active: isLogin
                                        ? handlerCheckLike(1, idBook, data.idUser, user?.id, data.idCmt)
                                        : false,
                                })}
                                onClick={() => handlerAction(0)}
                            >
                                <i className="nh-icon icon-like"></i>
                                {data.cmtLike(idBook)}
                            </button>
                        </ActionLogin>
                        <ActionLogin
                            isLogin={isLogin}
                            onOpen={() => handlerCmtReplyOpen('reply')}
                            onClose={() => handlerCmtReplyClose('reply')}
                        >
                            <button
                                data-cmt-reply={`reply-${data?.idCmt}`}
                                className={cx('btn', {
                                    active: notIn || firstAll,
                                    [`btn-classActive`]: (notIn || firstAll) && classActive,
                                })}
                                onClick={handlerBtn}
                            >
                                <i className="nh-icon icon-reply"></i>
                                {viewPort ? data.userReply.length : 'Trả lời'}
                            </button>
                        </ActionLogin>
                    </div>
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={() => handlerCmtReplyOpen('flag')}
                        onClose={() => handlerCmtReplyClose('flag')}
                    >
                        {user?.id === data?.idUser ? (
                            <button
                                data-cmt-reply={`flag-${data?.idCmt}`}
                                className={cx('btn', { active: false })}
                                onClick={() => {
                                    const isCheck = handlerDeleteData('comment', idBook, user.id, data?.idCmt);
                                    if (isCheck) {
                                        setDeleteData((prev) => prev + 1);
                                    }
                                }}
                            >
                                <i
                                    className="nh-icon icon-trash"
                                    style={{ marginRight: viewPort && '0', fontSize: viewPort && '1.4rem' }}
                                ></i>
                                {!viewPort && 'Xóa'}
                            </button>
                        ) : (
                            <button
                                data-cmt-reply={`flag-${data?.idCmt}`}
                                className={cx('btn', { active: false })}
                                onClick={() => handlerReport(user?.id, data?.idUser)}
                            >
                                <i
                                    className="nh-icon icon-flag"
                                    style={{ marginRight: viewPort && '0', fontSize: viewPort && '1.4rem' }}
                                ></i>
                                {!viewPort && 'Báo xấu'}
                            </button>
                        )}
                    </ActionLogin>
                </div>
            </div>
            <div className={cx('list')}>
                {notIn && (
                    <>
                        <div
                            className={cx('media')}
                            style={{
                                backgroundColor: viewPort && '#f7f7f7',
                                borderRadius: viewPort && '8px',
                                overflow: viewPort && 'hidden',
                            }}
                        >
                            {!!listReply.length &&
                                listReply.map((item, index) => {
                                    const isCheckView = !index && viewPort;

                                    return (
                                        <div
                                            key={item.idUserIndex}
                                            className={cx('media-item')}
                                            style={{ borderTopColor: isCheckView && 'transparent' }}
                                        >
                                            <div className={cx('avatar')}>
                                                <img src={item.avatar} alt={item.name} />
                                                <span className={cx('level')}>{`Cấp ${item.level}`}</span>
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
                                                            {checkRep[`${index}`] ? undefined : 'đọc tiếp'}
                                                        </button>
                                                    </span>
                                                </div>
                                                <div className={cx('media-info')}>
                                                    <button
                                                        data-nav-comment-users={`${item.idUserRep}-${item.idUserIndex}-${data.idCmt}`}
                                                        // idUser - index - scope
                                                        className={cx('btn', {
                                                            active: isLogin
                                                                ? handlerCheckLike(
                                                                      3,
                                                                      idBook,
                                                                      item.idUserRep,
                                                                      user?.id,
                                                                      data.idCmt,
                                                                      item.idUserIndex,
                                                                  )
                                                                : false,
                                                        })}
                                                        onClick={() =>
                                                            handlerAction(
                                                                1,
                                                                item.idUserRep,
                                                                item.idUserIndex,
                                                                `[data-nav-comment-users='${item.idUserRep}-${item.idUserIndex}-${data.idCmt}']`,
                                                                item.like.bind(item),
                                                            )
                                                        }
                                                    >
                                                        <i className="nh-icon icon-like-alt"></i>
                                                        {item.like(idBook, data.idCmt)}
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
                        {!!listReply.length && (
                            <button
                                className={cx('hide-rep')}
                                onClick={handlerHideListRep}
                                style={{ marginTop: viewPort && '8px' }}
                            >
                                Ẩn trả lời
                            </button>
                        )}
                    </>
                )}
                {firstAll && (
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={() => handlerCmtReplyOpen()}
                        onClose={() => handlerCmtReplyClose()}
                    >
                        <WrapperCom>
                            <InputReply
                                type="navComment"
                                idUser={data?.idUser}
                                ref={InputReplyRef}
                                src={src}
                                isLogin={isLogin}
                                user={user}
                                idBook={idBook}
                                setListReply={setListReply}
                                scopeItem={data.idCmt}
                                // getListDataCmt={getListDataCmt}
                                // scopeItem={scopeItem}
                            />
                        </WrapperCom>
                    </ActionLogin>
                )}
            </div>
        </div>
    );
}

export default memo(Reply);
