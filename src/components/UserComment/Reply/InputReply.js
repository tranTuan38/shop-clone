import classNames from 'classnames/bind';
import { forwardRef, memo, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import SpinnerGrow from '~/components/SpinnerGrow';
import { handleTime, handlerPustData, handlerGetCommentLength } from '~/handler';
import { requestData } from '~/services';
import imgs from '~/assets/imgs';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

function InputReply(
    {
        type,
        src = imgs.avatarImg.userNoIn,
        idBook,
        styleAvatar,
        styleForm,
        setListData = () => {},
        setUpdateData = () => {},
        setListReply = () => {},
        user,
        idUser,
        isLogin,
        scopeItem,
    },
    ref,
) {
    const [value, setValue] = useState('');
    const [grow, setGrow] = useState(false);

    const handlerOnChange = (e) => {
        if (isLogin) setValue(e.target.value);
        return;
    };

    // console.log(isLogin);

    const textAreaRef = useRef();

    useImperativeHandle(ref, () => ({
        focus() {
            textAreaRef.current.focus();
        },
        blur() {
            textAreaRef.current.blur();
        },
    }));

    const handlerBtnClick = () => {
        if (isLogin) {
            setGrow(true);
            const isCheck = type === 'comment' ? value.length >= 5 : type === 'navComment' ? true : false;

            if (isCheck) {
                let data;
                let pushType;
                let idCur;

                if (type === 'comment') {
                    pushType = 1;
                    idCur = user.id;
                    data = { cmtInChap: false, cmtOutChap: true, time: +new Date(), userReply: [], comment: value };
                } else if (type === 'navComment') {
                    pushType = 3;
                    idCur = idUser;
                    data = { idUserRep: user.id, idUserIndex: 0, time: +new Date(), repCmt: value };
                }

                let updateData = handlerPustData(pushType, idBook, idCur, data, scopeItem);

                // console.log(pushType);

                if (updateData === false || updateData === undefined) {
                    // console.log(updateData === undefined);
                    setTimeout(() => {
                        toastReact(3, 'Lỗi', 'Type truyền vào không đúng');
                        setGrow(false);
                    }, 400);
                    return;
                }

                if (updateData) {
                    setTimeout(() => {
                        if (type === 'comment') {
                            setUpdateData((prev) => prev + 1);
                        } else if (type === 'navComment') {
                            setListReply((prev) => {
                                if (prev.length) {
                                    const newUser = {
                                        ...updateData,
                                        name: user.name,
                                        avatar: user.avatar,
                                        level: user.level,
                                    };
                                    const newData = [...prev, newUser];
                                    return newData;
                                }

                                return [...prev];
                            });
                        }

                        setGrow(false);
                        setValue('');
                    }, 400);
                }
                return;
            }

            setTimeout(() => {
                toastReact(3, 'Lỗi', 'Độ dài bình luận tối thiểu là 5 ký tự.');
                setGrow(false);
            }, 400);
        }
    };

    return (
        <div className={cx('form')} style={styleForm}>
            <div className={cx('form-avatar')} style={styleAvatar}>
                <img src={src} alt="Đạo hữu" />
            </div>
            <div className={cx('form-body')}>
                <textarea
                    ref={textAreaRef}
                    placeholder="Nội dung trả lời"
                    className={cx('form-control')}
                    value={value}
                    onChange={handlerOnChange}
                ></textarea>
                <button
                    className={cx('btn')}
                    onClick={() => {
                        if (grow) return;

                        handlerBtnClick();
                    }}
                >
                    {grow ? (
                        <SpinnerGrow style={{ style: { color: 'var(--text-primary)' } }} />
                    ) : (
                        <i className="nh-icon icon-send"></i>
                    )}
                </button>
            </div>
        </div>
    );
}

export default memo(forwardRef(InputReply));
