import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';

import styles from './Pagination.module.scss';
import MediaItem from '~/components/MediaItem';

const cx = classNames.bind(styles);

function Item({ data }) {
    return (
        <>
            {!!data?.length &&
                data.map((item) => (
                    <div className="col l-6 m-12 c-12" key={item.idBook}>
                        <MediaItem data={item} type="listBook" />
                    </div>
                ))}
        </>
    );
}

export default Item;
