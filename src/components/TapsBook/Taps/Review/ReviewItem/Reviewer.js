import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from '../Review.module.scss';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function Reviewer({ data, bookData, OnChangeInput, classBind }) {
    const cb = (strs = '') => {
        let classChange = cx;
        if (classBind) classChange = classBind;

        return classChange(strs);
    };

    // console.log(bookData);
    return (
        <div className={cb('reviewer')}>
            {data.map((item, index) => {
                return (
                    <div className={cb('content-item')} key={index}>
                        <div className="row align-center">
                            <div className="col l-3 c-12">
                                <div className={cb('title')}>{item.title}</div>
                            </div>
                            <div className="col l-8 c-11">
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
                                    step="0.5"
                                    className={cb('input', { [item.type]: item.type })}
                                    value={bookData[item.type]}
                                    onChange={(e) => OnChangeInput(e, item.type)}
                                />
                            </div>
                            <div className="col l-1 c-1">
                                <span className={cb('value')}>{bookData[item.type]}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Reviewer;
