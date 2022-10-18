import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useGetCategory, useDebounce, useGetListSelecter } from '~/hooks';
import classNames from 'classnames/bind';

import { handlerGetDataWithRequest, handlerSelecedDataWithPath } from '~/handler';
import styles from './ListBook.module.scss';
import Loading from '~/components/Loading';
import { getListBookServices, requestData } from '~/services';
import { listBookData } from '~/initdata';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function ListBook() {
    const listSelecter = useGetListSelecter();
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limitPage, setLimitPage] = useState(10);
    let [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [renderCom, setRenderCom] = useState(0);

    const sort_by = searchParams.get('sort_by');
    const genre = searchParams.get('genre');
    const status = searchParams.get('status');
    const prototypes = searchParams.get('prototypes');
    const tag = searchParams.get('tag');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const keyword = searchParams.get('keyword');

    const listRequest = {
        sort_by,
        tag,
        genre,
        status,
        prototypes,
    };

    useEffect(() => {
        if (location.search) {
            if (sort_by) {
                if (sort_by === 'new_chap_at') {
                    if (limit && page) {
                        if (renderCom === 0) {
                            setRenderCom(renderCom + 1);
                            requestData({ setLoading, setListData }, listRequest, location, listSelecter);
                        }
                        return;
                    }
                    setRenderCom(renderCom + 1);
                    requestData({ setLoading, setListData }, listRequest, location, listSelecter);
                } else {
                    setRenderCom(renderCom + 1);
                    requestData({ setLoading, setListData }, listRequest, location, listSelecter);
                }
            } else {
                setRenderCom(renderCom + 1);
                requestData({ setLoading, setListData }, listRequest, location, listSelecter);
            }
        } else {
            setRenderCom(renderCom + 1);
            requestData({ setLoading, setListData }, listRequest, location, listSelecter);
        }
    }, [sort_by, tag, genre, status, prototypes]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            <Pagination
                                data={listData}
                                limitPage={limitPage}
                                listRequest={listRequest}
                                firstRender={renderCom}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListBook;
