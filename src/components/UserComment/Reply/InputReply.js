import classNames from 'classnames/bind';
import { forwardRef, memo, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import SpinnerGrow from '~/components/SpinnerGrow';
import { handleTime } from '~/handler';
import { requestData } from '~/services';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function InputReply({ src = imgs.avatarImg.userNoIn, styleAvatar, styleForm }, ref) {
    const [value, setValue] = useState('');

    const handlerOnChange = (e) => {
        setValue(e.target.value);
    };

    const textAreaRef = useRef();

    useImperativeHandle(ref, () => ({
        focus() {
            textAreaRef.current.focus();
        },
        blur() {
            textAreaRef.current.blur();
        },
    }));

    return (
        <div className={cx('form')} style={styleForm}>
            <div className={cx('form-avatar')} style={styleAvatar}>
                <img src={src} alt="Đạo hữu" />
            </div>
            <div className={cx('form-body')}>
                <textarea
                    ref={textAreaRef}
                    placeholder="Nội dung trả lời"
                    className={cx('form-control')}
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

export default memo(forwardRef(InputReply));
