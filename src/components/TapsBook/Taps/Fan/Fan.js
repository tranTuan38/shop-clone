import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './Fan.module.scss';
import Guide from './Guide';
import UserGuide from './UserGuide';
import { listFanData } from '~/initdata';
import { handlerSetFanData } from '~/handler';

const cx = classNames.bind(styles);

function Fan({ data, nameSearch, className }) {
    const [listFan, setListFan] = useState([]);

    useEffect(() => {
        const users = listFanData.find((item) => item.idBook === data.idBook);
        if (users) {
            const result = handlerSetFanData(users.fans);
            setListFan(result);
        } else {
            setListFan([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className={cx('wrapper', { [className]: !!className })}>
            <UserGuide data={listFan} limit={20} nameSearch={nameSearch} />
            <Guide data="" />
        </div>
    );
}

export default memo(Fan);
