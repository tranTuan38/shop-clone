import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from '../Review.module.scss';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function InputBox({ data, OnTextValue }) {
    return (
        <div className={cx('input-box')}>
            <textarea
                className={cx('textarea')}
                placeholder="Đánh giá của bạn về truyện này"
                value={data}
                onChange={(e) => OnTextValue(e.target.value)}
            ></textarea>
            <button className={cx('btn')}>
                <i className="nh-icon icon-send"></i>
            </button>
        </div>
    );
}

export default InputBox;
