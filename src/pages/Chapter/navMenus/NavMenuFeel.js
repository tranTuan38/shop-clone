import classNames from 'classnames/bind';
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { memo } from 'react';

import styles from '../Chapter.module.scss';
import { listIcons } from '~/initdata';
import { handlerChangeIconData } from '~/handler';

const cx = classNames.bind(styles);

function NavMenuFeel({ idIcon, data, onIconChange = () => {} }, ref) {
    const navFeelRef = useRef();

    // console.log(idIcon);

    useImperativeHandle(ref, () => ({
        contains() {
            return navFeelRef.current.classList.contains(cx('feel-active'));
        },
        change() {
            navFeelRef.current.classList.add(cx('feel-active'));
        },
        remove() {
            navFeelRef.current.classList.remove(cx('feel-active'));
        },
        setPosition(position = '', positionSize) {
            // const { top, right, bottom, left } = positions;
            const listPosition = ['top', 'right', 'bottom', 'left'];
            const isCheck = listPosition.includes(position);

            if (isCheck) navFeelRef.current.style[position] = positionSize - 1 + 'px';
        },
    }));

    const handlerClickBtn = (type, iconSrc, idIcon) => {
        const btnClickEle = document.querySelector(`[data-feel=${type}`);
        const btnClickEles = document.querySelectorAll(`[data-feel]`);

        if (btnClickEle) {
            const isCheck = btnClickEle.classList.contains(cx('feel-action'));

            if (isCheck) {
                return;
            } else {
                const listBtnFeell = Array.from(btnClickEles);

                const prevActionBtn = listBtnFeell.find(
                    (item) => item !== btnClickEle && item.classList.contains(cx('feel-action')),
                );

                if (prevActionBtn) {
                    prevActionBtn.classList.remove(cx('feel-action'));
                }
                navFeelRef.current.classList.remove(cx('feel-active'));
                btnClickEle.classList.add(cx('feel-action'));
                handlerChangeIconData(idIcon, data);
                onIconChange(iconSrc);
            }
        }
    };

    return (
        <div className={cx('nav-feel')} ref={navFeelRef}>
            {listIcons.map((item) => {
                return (
                    <div
                        key={item.name}
                        data-feel={item.name}
                        className={cx('feel-item', { ['feel-action']: idIcon === item.idIcon })}
                        onClick={(e) => handlerClickBtn(item.name, `url(${item.icon})`, item.idIcon)}
                    >
                        <i className={cx('icon-feel')} style={{ backgroundImage: `url(${item.icon})` }} />
                    </div>
                );
            })}
        </div>
    );
}

export default memo(forwardRef(NavMenuFeel));
