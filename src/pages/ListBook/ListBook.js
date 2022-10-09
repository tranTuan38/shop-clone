import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGetCategory } from '~/hooks';

import Loading from '~/components/Loading';

function ListBook() {
    const [category, setCategory] = useGetCategory();
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const keyword = searchParams.get('keyword');

    useEffect(() => {}, [searchParams]);

    return (
        <div>
            {/* <h1 color="#ccc">ListBook-id: {id}</h1>
            <h1 color="#ccc">ListBook-keyword: {keyword}</h1> */}
            {/* <Loading /> */}
        </div>
    );
}

export default ListBook;
