import { useEffect, useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../Bxh.module.scss';
import BxhBook from './BxhBook';

const cx = classNames.bind(styles);

function BxhMedia({ data, icon, type }) {
    return (
        <div className={cx('media-wrapper')}>
            {!!data.length &&
                data.map((item, index) => (
                    <BxhBook key={item.idBook} data={item} type={type} icon={icon} rank={index} />
                ))}
        </div>
    );
}

export default memo(BxhMedia);
