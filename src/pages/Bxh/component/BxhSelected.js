import { useEffect, useState, memo } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../Bxh.module.scss';
import { BxhPopper } from '~/components/Popper';
import { BxhMenu } from '~/components/Popper';

const cx = classNames.bind(styles);

function BxhSelected({ bxhData, timeBxh }) {
    return (
        <div className={cx('selected')}>
            <BxhPopper
                name="menu"
                navName="bxh-menu"
                navItem="bxh-item"
                data={bxhData}
                trigger="click"
                placement="bottom-end"
                offset={[0, 0]}
                TypeMenu={BxhMenu}
                isArrow={true}
            >
                <button className={cx('btn')}>
                    Xếp hạng:
                    <span className={cx('time')}>{timeBxh}</span>
                </button>
            </BxhPopper>
        </div>
    );
}

export default memo(BxhSelected);
