import classNames from 'classnames/bind';

import styles from './MobileFormConstructor.module.scss';
import { CheckIcon } from '~/components/Icons';
import { memo, useEffect, useState, useRef } from 'react';
import { useStore } from '~/hooks';
import { actions } from '~/components/store';

const cx = classNames.bind(styles);

function MobileFormConstructor({
    title,
    wrapperProps = {},
    containerProps = {},
    children,
    open = () => {},
    close = () => {},
}) {
    const [state, dispatch] = useStore();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h6 className={cx('header-title')}>{title}</h6>
                <button className={cx('close')} onClick={close}>
                    <i className="nh-icon icon-close" />
                </button>
            </div>
            <div className={cx('container')} style={containerProps}>
                {children}
            </div>
        </div>
    );
}

export default memo(MobileFormConstructor);
