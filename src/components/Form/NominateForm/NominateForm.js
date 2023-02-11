import classNames from 'classnames/bind';
import { memo, useRef, useState } from 'react';

import styles from './NominateForm.module.scss';

const cx = classNames.bind(styles);

function NominateForm({ toast, onCloseForm = () => {} }) {
    const wrapperRef = useRef();
    const containerRef = useRef();

    const handlerOnClick = (data) => {
        wrapperRef.current.classList.add(cx('fadeOut'));
        containerRef.current.classList.add(cx('containerFadeOut'));

        setTimeout(() => {
            onCloseForm();
        }, 155);
    };

    const handlerSubmit = () => {
        // if (value) {
        toast(1, 'Thành công', 'Đề cử thành công.');
        handlerOnClick();
        return;
        // }
        // toast(3, 'Thất bại', 'Điểm có giá trị không hợp lệ.');
    };

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <div className={cx('container')} ref={containerRef}>
                <div className={cx('content')}>
                    <div className={cx('heading')}>
                        <h5 className={cx('h5')}>Đề cử hoa</h5>
                        <button className={cx('close')} onClick={handlerOnClick}>
                            &times;
                        </button>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('body-content')}>
                            <div className={cx('title')}>Thống kê tháng này</div>
                        </div>
                        <div className="row w-100">
                            <div className="col c-6 text-center">
                                <i className="nh-icon icon-badge icon-2x"></i>
                                <h6 className={cx('rank')}>Hạng 100</h6>
                            </div>
                            <div className="col c-6 text-center">
                                <i className="nh-icon icon-flower icon-2x"></i>
                                <h6 className={cx('rank')}>100</h6>
                            </div>
                        </div>
                        <div className={cx('btn-submit')}>
                            <button className={cx('btn')} onClick={handlerSubmit}>
                                <span>Đề cử</span>
                                <span>(còn 1 hoa)</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(NominateForm);
