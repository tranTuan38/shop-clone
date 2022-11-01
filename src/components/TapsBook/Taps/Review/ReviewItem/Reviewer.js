import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from '../Review.module.scss';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function Reviewer({ data, bookData, OnChangeInput }) {
    return (
        <div className={cx('reviewer')}>
            {data.map((item, index) => {
                return (
                    <div className={cx('content-item')} key={index}>
                        <div className="row align-center" key={index}>
                            <div className="col c-3">
                                <div className={cx('title')}>{item.title}</div>
                            </div>
                            <div className="col c-8">
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
                                    step="0.5"
                                    className={cx('input', { [item.type]: item.type })}
                                    value={bookData[item.type]}
                                    onChange={(e) => OnChangeInput(e, item.type)}
                                />
                            </div>
                            <div className="col c-1">
                                <span className={cx('value')}>{bookData[item.type]}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Reviewer;
