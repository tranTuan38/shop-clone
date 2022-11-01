import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import SpinnerGrow from '~/components/SpinnerGrow';
import { handleTime } from '~/handler';
import { requestData } from '~/services';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function InputReply({ src = imgs.avatarImg.userNoIn }) {
    const [value, setValue] = useState('');

    const handlerOnChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={cx('from')}>
            <div className={cx('from-avata')}>
                <img src={src} alt="Đạo hữu" />
            </div>
            <div className={cx('from-body')}>
                <textarea
                    placeholder="Nội dung trả lời"
                    className={cx('from-control')}
                    value={value}
                    onChange={handlerOnChange}
                ></textarea>
                <button className={cx('btn')}>
                    {/* <SpinnerGrow /> */}
                    <i className="nh-icon icon-send"></i>
                </button>
            </div>
        </div>
    );
}

export default memo(InputReply);
