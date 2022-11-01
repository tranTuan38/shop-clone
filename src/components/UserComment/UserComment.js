import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './UserComment.module.scss';
import Comment from './Comment';
import Reply from './Reply';
import imgs from '~/assets/imgs';
import { handleTime } from '~/handler';
import { listBookData, listRating, userData } from '~/initdata';

const cx = classNames.bind(styles);

function UserComment({ data }) {
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

    return (
        <div className={cx('list-media')}>
            <div className={cx('media')}>
                <div className={cx('avatar')}>
                    <img src={imgs.avatarImg.userNoIn} alt={'NotThink'} />
                    <span className={cx('level')}>cấp 2</span>
                </div>
                <div className={cx('body')}>
                    <Link className={cx('name', { ['item-hover']: true })}>Trần Tuấn</Link>
                    <div className={cx('nav-info')}>
                        <span className={cx('info')}>
                            <i className="nh-icon icon-clock"></i>
                            20 giờ trước
                        </span>
                        <span className={cx('info')}>
                            <i className="nh-icon icon-eye-glasses"></i>
                            chương 1
                        </span>
                    </div>
                    <div className={cx('comment')}>
                        <Comment />
                    </div>
                    <Reply />
                </div>
            </div>
        </div>
    );
}

export default memo(UserComment);
