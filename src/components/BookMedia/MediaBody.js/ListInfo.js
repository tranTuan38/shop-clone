import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../BookMedia.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ListInfo({ data }) {
    return (
        <div className={cx('list-info')}>
            {Object.values(data).map((value, index) => {
                return (
                    <div key={index} className={cx('info-content')}>
                        <div className={cx('one')}>{value[0]}</div>
                        <div className={cx('two')}>{value[1]}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(ListInfo);
