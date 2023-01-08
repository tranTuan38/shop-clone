import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './AuthoItem.module.scss';
import CreateMedia from '~/components/CreateMedia';

const cx = classNames.bind(styles);

function AuthorItem({ type, data }) {
    const [bookDatas, setBookDatas] = useState([]);

    useEffect(() => {
        setBookDatas(data);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('h2')}>{data.name}</h2>
            <div className={cx('content')}>
                {!!bookDatas.length &&
                    bookDatas.map((item, index) => {
                        return <CreateMedia type={type} key={index} data={item} />;
                    })}
            </div>
        </div>
    );
}

export default memo(AuthorItem);
