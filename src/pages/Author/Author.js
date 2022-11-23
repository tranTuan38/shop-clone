import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './Author.module.scss';
import { useGetAuthorData } from '~/hooks';
import AuthorItem from './AuthorItem';

const cx = classNames.bind(styles);

function Author() {
    const { id } = useParams();
    const data = useGetAuthorData(+id);

    useEffect(() => {
        if (data.name) {
            document.title = `Tác giả: ${data.name}`;
        }
    }, [id, data]);

    return <div className={cx('wrapper')}>{data.name && <AuthorItem type="author" data={data} />}</div>;
}

export default Author;
