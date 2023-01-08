import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

function Comment({ data = 'Chưa có gì', limitStrings = 400, classActive }) {
    const [checkValue, setCheckValue] = useState(data.length);

    const handlerSetComment = (comment) => {
        let cmtSlice;
        if (checkValue) {
            cmtSlice = `${comment.slice(0, limitStrings + 1).trim()}... `;
            return cmtSlice;
        }

        return comment;
    };

    return (
        <>
            <span className={cx('content')}>{handlerSetComment(data)}</span>
            <span className={cx('check')} onClick={() => setCheckValue(!checkValue)}>
                <button className={cx('btn', { classActive: classActive })}>{checkValue && `đọc tiếp`}</button>
            </span>
        </>
    );
}

export default memo(Comment);
