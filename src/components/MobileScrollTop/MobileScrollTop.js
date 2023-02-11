import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { memo, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useViewport } from '~/hooks';
import styles from './MobileScrollTop.module.scss';

const cx = classNames.bind(styles);

function MobileScrollTop() {
    const viewPort = useViewport();
    const location = useLocation();

    const wrapperDom = useRef();
    const prevHeight = useRef(window.scrollY);

    const handlerScrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (viewPort) {
            const handlerShow = (e) => {
                const scrollTop = window.scrollY;

                if (scrollTop > 200) {
                    if (scrollTop > prevHeight.current) {
                        wrapperDom.current.classList.remove(cx('show'));
                    } else {
                        wrapperDom.current.classList.add(cx('show'));
                    }
                    prevHeight.current = scrollTop;
                } else {
                    wrapperDom.current.classList.remove(cx('show'));
                    prevHeight.current = scrollTop;
                }

                // console.log(wrapperDom.current);
            };

            window.addEventListener('scroll', handlerShow);

            return () => {
                window.removeEventListener('scroll', handlerShow);
            };
        }
    }, [viewPort, location.pathname]);

    return (
        viewPort && (
            <div className={cx('wrapper')} ref={wrapperDom}>
                <button className={cx('btn')} onClick={handlerScrollTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        )
    );
}

export default memo(MobileScrollTop);
