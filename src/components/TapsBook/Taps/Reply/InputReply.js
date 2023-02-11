import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import SpinnerGrow from '~/components/SpinnerGrow';
import { handleTime, handlerPustData } from '~/handler';
import { requestData } from '~/services';
import imgs from '~/assets/imgs';
import toastReact from '~/components/ToastMessages';
import { useViewport } from '~/hooks';

let cx = classNames.bind(styles);

function InputReply({
    src = imgs.avatarImg.userNoIn,
    user,
    listUser,
    isLogin,
    ActionLogin,
    onSetUserReply,
    styleChange,
}) {
    const viewPort = useViewport();
    const [value, setValue] = useState('');
    const [isGrow, setGrow] = useState(false);

    // console.log(user);
    // console.log(listUser);
    // if (styleChange) cx = classNames.bind(styleChange);

    const textAreaRef = useRef();

    const handlerOnChange = (e) => {
        setValue(e.target.value);
    };

    const handlerOpen = () => {
        textAreaRef.current.focus();
    };

    const handlerClose = () => {
        textAreaRef.current.blur();
    };

    const handlerClickBtn = () => {
        setGrow(true);
        if (value) {
            let prevIdReplyIndex;
            let curIdReplyIndex;
            const lastReplyUser = listUser.userReply[listUser.userReply.length - 1];

            // console.log(listUser.userReply);
            // console.log(lastReplyUser);

            if (lastReplyUser) {
                prevIdReplyIndex = lastReplyUser.idReplyIndex;
                curIdReplyIndex = prevIdReplyIndex + 1;
            } else {
                curIdReplyIndex = 0;
            }

            const datas = {
                id: user.id,
                idReplyIndex: curIdReplyIndex,
                time: +new Date(),
                repCmt: value.trim(),
            };

            const userDatas = handlerPustData(2, listUser.idBook, listUser.idUser, datas);

            if (userDatas) {
                setTimeout(() => {
                    onSetUserReply((prev) => {
                        const newUser = {
                            ...userDatas,
                            name: user.name,
                            avatar: user.avatar,
                            level: user.level,
                        };
                        if (prev.length) {
                            const newData = [...prev, newUser];
                            return newData;
                        }

                        if (viewPort) {
                            return [newUser];
                        }

                        return [...prev];
                    });
                    setGrow(false);
                    setValue('');
                }, 500);
                return;
            } else {
                toastReact(3, 'Lỗi', 'Có lỗi xảy ra.');
            }
        }

        setTimeout(() => {
            toastReact(3, 'Lỗi', 'Nội dung không được để trống.');
            setGrow(false);
        }, 500);
    };

    return (
        <div className={cx('from')}>
            <div className={cx('from-avata')}>
                <img src={src} alt="Đạo hữu" />
            </div>
            <ActionLogin isLogin={isLogin} style={{ width: '100%' }} onOpen={handlerOpen} onClose={handlerClose}>
                <div className={cx('from-body')}>
                    <textarea
                        data-text-user-reply={listUser.idUser}
                        ref={textAreaRef}
                        placeholder="Nội dung trả lời"
                        className={cx('from-control')}
                        value={value}
                        onChange={handlerOnChange}
                    ></textarea>
                    <button className={cx('btn')} onClick={handlerClickBtn}>
                        {isGrow ? (
                            <SpinnerGrow style={{ style: { color: 'var(--text-primary)' } }} />
                        ) : (
                            <i className="nh-icon icon-send"></i>
                        )}
                    </button>
                </div>
            </ActionLogin>
        </div>
    );
}

export default memo(InputReply);
