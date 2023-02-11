import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../MobileBookMedia.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ListInfo({ data }) {
    const datas = Object.values(data);
    const datasLength = datas?.length;

    return (
        <div className={cx('list-info')}>
            <div className="row no-gutters">
                {Object.values(data).map((value, index) => {
                    return (
                        <div key={index} className="col c-3">
                            <div className={cx('info-content', { noBorder: index === datasLength - 1 })}>
                                <div className={cx('one')}>{value[0]}</div>
                                <div className={cx('two')}>{value[1]}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(ListInfo);
