import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from '../Review.module.scss';

const cx = classNames.bind(styles);

function BySelected({ imgs, value, setValue }) {
    const handlerSetValue = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={cx('by')}>
            <select
                className={cx('select')}
                style={{ backgroundImage: `url('${imgs.arrow}')` }}
                value={value}
                onChange={handlerSetValue}
            >
                <option className={cx('selected')} value="like_count">
                    Lượt thích
                </option>
                <option className={cx('selected')} value="id">
                    Mới nhất
                </option>
            </select>
        </div>
    );
}

export default BySelected;
