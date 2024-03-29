import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, memo, useState } from 'react';

import styles from './Post.module.scss';
import PaginationPage from '~/components/PaginationPage';
import PostItem from '../PostItem';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

function Post({ data }) {
    const [postData, setPostData] = useState([]);
    const viewPort = useViewport();

    useEffect(() => {
        if (data) {
            setPostData(data);
        }
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('h2')}>Truyện đã đăng</h2>
                <div className={cx('content')}>
                    <PaginationPage
                        data={postData}
                        limit={5}
                        PageItem={PostItem}
                        type="user"
                        isScroll={viewPort ? false : true}
                    />
                </div>
            </div>
        </div>
    );
}

export default memo(Post);
