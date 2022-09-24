import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useGetCategory } from '~/hooks';

function ListBook() {
    const obj = useParams();
    const [category, setCategory] = useGetCategory();
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');

    useEffect(() => {}, [searchParams]);

    return (
        <div>
            <h1 color="#ccc">ListBook: {id}</h1>
        </div>
    );
}

export default ListBook;
