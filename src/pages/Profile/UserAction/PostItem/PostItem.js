import classNames from 'classnames/bind';
import { useEffect, memo, useState } from 'react';

import styles from './PostItem.module.scss';
import CreateMedia from '~/components/CreateMedia';

const cx = classNames.bind(styles);

function PostItem({ type, data }) {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        if (data.length) {
            setPostData(data);
        }
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {postData.map((item, index) => (
                    <CreateMedia key={index} type={type} data={item} />
                ))}
            </div>
        </div>
    );
}

export default memo(PostItem);
