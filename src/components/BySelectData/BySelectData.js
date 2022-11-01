import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './BySelectData.module.scss';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function BySelectData({ data, value, setValue }) {
    const [listOption, setListOption] = useState([]);
    const handlerSetValue = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        setListOption(data);
    }, [value]);

    return (
        <div className={cx('wrapper')}>
            <select
                className={cx('select')}
                style={{ backgroundImage: `url('${imgs.arrow}')` }}
                value={value}
                onChange={handlerSetValue}
            >
                {!!listOption.length &&
                    listOption.map((item, index) => {
                        return (
                            <option key={index} className={cx('selected')} value={item.value}>
                                {item.title}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
}

export default memo(BySelectData);
