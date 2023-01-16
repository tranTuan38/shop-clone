import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './Comment.module.scss';

const cx = classNames.bind(styles);

function Comment({ data = 'Chưa có gì', limitStrings = 400, classActive }) {
    const [checkValue, setCheckValue] = useState(false);

    const handlerSetComment = (comment) => {
        let cmtSlice;
        if (data.length > limitStrings) {
            cmtSlice = `${comment.slice(0, limitStrings + 1).trim()}... `;
            return cmtSlice;
        }

        return comment;
    };

    useEffect(() => {
        if (data.length > limitStrings) {
            setCheckValue(true);
            // console.log(checkValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, limitStrings]);

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
