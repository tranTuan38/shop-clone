import classNames from 'classnames/bind';
import { memo, useRef } from 'react';

import styles from './RatingForm.module.scss';

const cx = classNames.bind(styles);

function RatingForm({ onConFirm = () => {} }) {
    const wrapperRef = useRef();
    const containerRef = useRef();

    const handlerOnClick = (data) => {
        onConFirm(data);
        wrapperRef.current.classList.add(cx('fadeOut'));
        containerRef.current.classList.add(cx('containerFadeOut'));
    };

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <div className={cx('container')} ref={containerRef}>
                <div className={cx('content')}>
                    <h5 className={cx('h5')}>Đánh giá của bạn có tiết lộ nội dung truyện?</h5>
                    <div className={cx('body')}>
                        <div className={cx('form')}>
                            <button className={cx('btn')} onClick={() => handlerOnClick(false)}>
                                Không
                            </button>
                            <button className={cx('btn')} onClick={() => handlerOnClick(true)}>
                                Có
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(RatingForm);
