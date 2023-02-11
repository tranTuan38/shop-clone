import classNames from 'classnames/bind';
import { memo, useRef, useState } from 'react';

import styles from './TranslateForm.module.scss';

const cx = classNames.bind(styles);

function TranslateForm({ toast, onCloseForm = () => {} }) {
    const [value, setValue] = useState(0);

    const wrapperRef = useRef();
    const containerRef = useRef();

    const handlerOnClick = (data) => {
        wrapperRef.current.classList.add(cx('fadeOut'));
        containerRef.current.classList.add(cx('containerFadeOut'));

        setTimeout(() => {
            onCloseForm();
        }, 155);
    };

    const handlerChange = (e) => {
        setValue(e.target.value);
    };

    const handlerSubmit = () => {
        if (value) {
            toast(1, 'Thành công', 'Cảm ơn bạn đã chấm điểm.');
            handlerOnClick();
            return;
        }
        toast(3, 'Thất bại', 'Điểm có giá trị không hợp lệ.');
    };

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <div className={cx('container')} ref={containerRef}>
                <div className={cx('content')}>
                    <div className={cx('heading')}>
                        <h5 className={cx('h5')}>Đánh giá</h5>
                        <button className={cx('close')} onClick={handlerOnClick}>
                            &times;
                        </button>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('body-content')}>
                            <div className={cx('title')}>
                                Bạn đánh giá chất lượng bản dịch của chương này được mấy điểm? Kéo nút tròn để cho điểm,
                                điểm tối đa là 5 điểm.
                            </div>
                            <div className={cx('input')}>
                                <input
                                    className={cx('input-custom')}
                                    type="range"
                                    step={0.5}
                                    min={0}
                                    max={5}
                                    value={value}
                                    onChange={handlerChange}
                                />
                            </div>
                            <div className={cx('ratio')}>{value}/5 điểm</div>
                        </div>
                        <div className={cx('btn-submit')}>
                            <button className={cx('btn')} onClick={handlerSubmit}>
                                Gửi đánh giá
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(TranslateForm);
