import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './UserComment.module.scss';
import Comment from './Comment';
import Reply from './Reply';
import imgs from '~/assets/imgs';
import { handleTime, handlerGetPostData } from '~/handler';
import { listBookData, listRating, userData } from '~/initdata';

const cx = classNames.bind(styles);

function UserComment({ data, classActive, isLogin, ActionLogin, user, src }) {
    const [listUserData, setListUserData] = useState([]);

    // console.log(listUserData);

    const handlerSetComment = (comment, limit = 400) => {
        let cmtSlice;
        const cmtLength = comment.length;
        if (cmtLength > limit) {
            cmtSlice = `${comment.slice(0, limit + 1).trim()}... `;
            return cmtSlice;
        }

        return comment;
    };

    const handlerSetReplyCmt = (userReply) => {
        const listRepData = userReply.map((repUser) => {
            const user = userData.find((item) => item.id === repUser.idUserRep);
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
        setListUserData(data);
    }, [data]);

    return (
        <div className={cx('list-media')}>
            {!!listUserData &&
                listUserData.map((item, index) => {
                    return (
                        <div className={cx('media')} key={index}>
                            <div className={cx('avatar')}>
                                <img src={item.avatar} alt={item.name} />
                                <span className={cx('level')}>{`Cấp ${item.level}`}</span>
                            </div>
                            <div className={cx('body')}>
                                <Link
                                    to={`/profile/${handlerGetPostData(item.name).id}`}
                                    className={cx('name', {
                                        ['item-hover']: !classActive,
                                        ['white-color']: classActive,
                                    })}
                                >
                                    {item.name}
                                </Link>
                                <div className={cx('nav-info')}>
                                    <span className={cx('info')}>
                                        <i className="nh-icon icon-clock"></i>
                                        {`${handleTime(new Date(), new Date(item.time))}`}
                                    </span>
                                    <span className={cx('info')}>
                                        <i className="nh-icon icon-eye-glasses"></i>
                                        {!item.cmtOutChap && `chương ${item.cmtInChap}`}
                                    </span>
                                </div>
                                <div className={cx('comment')}>
                                    <Comment data={item.comment} limitStrings={303} classActive={classActive} />
                                </div>
                                <Reply
                                    user={user}
                                    src={src}
                                    data={item}
                                    isLogin={isLogin}
                                    ActionLogin={ActionLogin}
                                    classActive={classActive}
                                    listDataCmt={handlerSetReplyCmt(item.userReply)}
                                    navActiveData={{ setTime: handleTime, setCmtUser: handlerSetComment }}
                                />
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}

export default memo(UserComment);
