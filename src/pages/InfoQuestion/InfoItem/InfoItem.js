import classNames from 'classnames/bind';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './InfoItem.module.scss';

const cx = classNames.bind(styles);

function InfoItem({ id, value, data, itemCheck, setListCheck }) {
    const [firstRender, setFirstRender] = useState(0);

    const location = useLocation();

    const handlerClick = () => {
        setListCheck((prev) => {
            const newObj = { ...prev };

            const listDataCheck = Object.keys(newObj);
            const keyItem = listDataCheck.find((item) => newObj[item] && item !== value);

            if (keyItem) {
                newObj[keyItem] = false;
            }

            newObj[value] = !itemCheck;

            return newObj;
        });
    };

    const guideRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        if (location.hash && !firstRender) {
            const idCheck = location.hash.includes(`${id}`);

            if (idCheck) {
                setListCheck((prev) => {
                    const newObj = { ...prev };

                    newObj[value] = true;

                    return newObj;
                });
                guideRef.current.style.height = guideRef.current.scrollHeight + 'px';
                contentRef.current.scrollIntoView();
                setFirstRender(firstRender + 1);
                return;
            }
        }

        if (itemCheck) {
            guideRef.current.style.height = guideRef.current.scrollHeight + 'px';
        } else {
            guideRef.current.style.height = '0px';
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemCheck, location.hash]);

    return (
        <div id={data.id + 1} className={cx('content')} ref={contentRef}>
            <div className={cx('question')}>
                <button className={cx('btn')} onClick={handlerClick}>
                    {data.title}
                </button>
            </div>
            <div className={cx('guide', { active: itemCheck })} ref={guideRef}>
                <div className={cx('guide-body')}>{data.content}</div>
            </div>
        </div>
    );
}

export default memo(InfoItem);
