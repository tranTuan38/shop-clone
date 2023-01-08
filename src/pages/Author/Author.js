import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './Author.module.scss';
import { useGetAuthorData } from '~/hooks';
import AuthorItem from './AuthorItem';
import PaginationPage from '~/components/PaginationPage';

const cx = classNames.bind(styles);

function Author() {
    const { id } = useParams();
    const data = useGetAuthorData(+id);

    console.log(data);

    useEffect(() => {
        if (data.name) {
            document.title = `Tác giả: ${data.name}`;
        }
    }, [id, data]);

    return (
        <div className={cx('wrapper')}>
            {data.name && <PaginationPage data={data.books} limit={10} PageItem={AuthorItem} />}
        </div>
    );
}

export default Author;
