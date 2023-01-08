import classNames from 'classnames/bind';
import { Fragment, memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import InputReply from './InputReply';
import SpinnerGrow from '~/components/SpinnerGrow';
import { handleTime, handlerGetPostData } from '~/handler';
import { requestData } from '~/services';

const cx = classNames.bind(styles);

function Reply({ data, listDataCmt, navActiveData, classActive, isLogin, ActionLogin, user, src }) {
    const [checkView, setCheckView] = useState(false);
    const [firstAll, setFirstAll] = useState(false);
    const [listReply, setListReply] = useState([]);
    const [checkRep, setCheckRep] = useState({});
    const [notIn, setNotIn] = useState(false);
    const InputReplyRef = useRef();
    let WrapperCom = 'div';

    if (isLogin) {
        WrapperCom = Fragment;
    }

    // console.log(data);
    // console.log('classActive: ', listReply);

    const { setTime, setCmtUser } = navActiveData;

    const handlerViewAll = () => {
        setNotIn(true);
        setFirstAll(true);
    };

    const handlerHideListRep = () => {
        setNotIn(false);
        setListReply([]);
        setCheckRep({});
    };

    const handlerCheckRep = (id) => {
        setCheckRep((prev) => ({ ...prev, [id]: !prev.id }));
    };

    const handlerBtn = () => {
        setFirstAll(true);
    };

    // console.log('pageCur :', pageCur);
    // console.log('checkPageCur: ', checkPageCur);

    useEffect(() => {
        if (notIn) {
            const listCheck = listDataCmt.reduce((acc, user, index) => {
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
                const result = await setDataRep(listDataCmt);
                setListReply(result);
                setCheckRep(listCheck);
            };
            asyncListData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notIn]);

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

    return (
        <div className={cx('wrapper', { classActive })}>
            <div className={cx('action')}>
                <div className={cx('all-reply')} onClick={handlerViewAll}>
                    {!!data.userReply.length && !notIn && `Xem ${data.userReply.length} trả lời`}
                </div>
                <div className={cx('action-btn')} style={{ display: 'flex' }}>
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={() => handlerCmtReplyOpen('like')}
                        onClose={() => handlerCmtReplyClose('like')}
                    >
                        <button data-cmt-reply={`like-${data?.idCmt}`} className={cx('btn', { active: false })}>
                            <i className="nh-icon icon-like"></i>
                            {data.cmtLike}
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
                            Trả lời
                        </button>
                    </ActionLogin>
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={() => handlerCmtReplyOpen('flag')}
                        onClose={() => handlerCmtReplyClose('flag')}
                    >
                        {user?.id === data?.idUser ? (
                            <button data-cmt-reply={`flag-${data?.idCmt}`} className={cx('btn', { active: false })}>
                                <i className="nh-icon icon-trash"></i>
                                Xóa
                            </button>
                        ) : (
                            <button data-cmt-reply={`flag-${data?.idCmt}`} className={cx('btn', { active: false })}>
                                <i className="nh-icon icon-flag"></i>
                                Báo xấu
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
                                        <div key={index} className={cx('media-item')}>
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
                                                        className={cx('btn', {
                                                            active: false,
                                                        })}
                                                    >
                                                        <i className="nh-icon icon-like-alt"></i>
                                                        {item.like}
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
                            Ẩn trả lời
                        </button>
                    </>
                )}
                {firstAll && (
                    <ActionLogin
                        isLogin={isLogin}
                        onOpen={() => handlerCmtReplyOpen()}
                        onClose={() => handlerCmtReplyClose()}
                    >
                        <WrapperCom>
                            <InputReply ref={InputReplyRef} src={src} />
                        </WrapperCom>
                    </ActionLogin>
                )}
                {/* <InputReply /> */}
            </div>
        </div>
    );
}

export default memo(Reply);
