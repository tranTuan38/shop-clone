import classNames from 'classnames/bind';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Author.module.scss';
import { useGetAuthorData } from '~/hooks';
import AuthorItem from './AuthorItem';
import PaginationPage from '~/components/PaginationPage';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

function Author() {
    const [firstRender, setFirstRender] = useState(0);
    const { id } = useParams();
    const data = useGetAuthorData(+id);
    const navigate = useNavigate();
    const viewPort = useViewport();

    useEffect(() => {
        if (data.name) {
            document.title = `Tác giả: ${data.name}`;
        }
        if (!firstRender) {
            setFirstRender(firstRender + 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, data]);

    useEffect(() => {
        if (firstRender && !data.name) {
            navigate('/not-found', { state: { title: 'Nội dung không tồn tại hoặc đã bị xóa.' } });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstRender]);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('name')}>{data?.name}</h2>
            {data?.books && (
                <PaginationPage
                    data={data.books}
                    limit={10}
                    PageItem={AuthorItem}
                    containerProps={{ style: { justifyContent: viewPort && 'center' } }}
                />
            )}
        </div>
    );
}

export default Author;
