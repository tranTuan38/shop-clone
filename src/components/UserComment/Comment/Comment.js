import classNames from 'classnames/bind';
import { memo, useState } from 'react';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

function Comment({ data = 'Chưa có gì', limitStrings = 400 }) {
    const handlerSetComment = (comment, limit) => {
        let cmtSlice;
        const cmtLength = comment.length;
        if (cmtLength > limit) {
            cmtSlice = `${comment.slice(0, limit + 1).trim()}... `;
            return cmtSlice;
        }

        return comment;
    };

    return <span className={cx('content')}>{handlerSetComment(data, limitStrings)}</span>;
}

export default memo(Comment);
