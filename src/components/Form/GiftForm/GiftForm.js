import classNames from 'classnames/bind';
import { memo, useRef, useState } from 'react';

import styles from './GiftForm.module.scss';
import { iconFeel, iconGifts } from '~/assets/Icon-feels';

const cx = classNames.bind(styles);

function GiftForm({ toast, onCloseForm = () => {} }) {
    const [actionClass, setActionClass] = useState(0);
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
        toast(1, 'Thành công', 'Tặng quà thành công.');
        handlerOnClick();
        return;
        // }
        // toast(3, 'Thất bại', 'Điểm có giá trị không hợp lệ.');
    };

    const handlerSetAction = (id) => {
        setActionClass(id);
    };

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            <div className={cx('container')} ref={containerRef}>
                <div className={cx('content')}>
                    <div className={cx('heading')}>
                        <h5 className={cx('h5')}>Tặng quà</h5>
                        <button className={cx('close')} onClick={handlerOnClick}>
                            &times;
                        </button>
                    </div>
                    <div className={cx('body')}>
                        <div className={cx('list')}>
                            {iconGifts.map((item) => {
                                return (
                                    <div className={cx('item')} key={item.id} onClick={() => handlerSetAction(item.id)}>
                                        <div className={cx('item-content', { actionClass: item.id === actionClass })}>
                                            <div className={cx('item-img')}>
                                                <img src={item.src} alt={item.title} />
                                            </div>
                                            <div className={cx('item-title')}>{item.title}</div>
                                            <div className={cx('item-point')}>
                                                {item.point.toLocaleString()}
                                                <i style={{ backgroundImage: `url("${iconFeel.candy}")` }} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={cx('btn-submit')}>
                            <div className={cx('candy')}>
                                Bạn còn 0 <i style={{ backgroundImage: `url("${iconFeel.candy}")` }} />
                            </div>
                            <button className={cx('btn')} onClick={handlerSubmit}>
                                Tặng
                            </button>
                        </div>
                    </div>
                    <div className={cx('list-fans')}></div>
                </div>
            </div>
        </div>
    );
}

export default memo(GiftForm);
