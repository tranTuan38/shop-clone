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
    // const limit = searchParams.get('limit');
    const keyword = searchParams.get('keyword');

    // console.log(keyword);

    const listRequest = {
        sort_by,
        tag,
        genre,
        status,
        prototypes,
    };

    const tagsRef = useRef(
        !sort_by && (genre || status || tag || prototypes) && `${genre},${status},${tag},${prototypes}`,
    );
    // const sortByCur = useRef();

    // if (!sort_by && (genre || status || tag)) {
    //     tagsRef.current = genre || status || tag;
    //     console.log('tagsRef: ', tagsRef.current);
    // }
    // console.log('tag: ', genre);
    // console.log('tagsRef: ', tagsRef.current);
    // console.log('sortByCur: ', sortByCur.current);

    // console.log(listData);
    // console.log('renderCom: ', renderCom);

    useEffect(() => {
        // console.log('Search: ', location);
        document.title = 'Danh Sách Truyện Covert';

        if (location.search) {
            if (sort_by) {
                if (sort_by === 'new_chap_at') {
                    if (page) {
                        if (renderCom === 0) {
                            setRenderCom(renderCom + 1);
                            tagsRef.current = `${genre},${status},${tag},${prototypes}`;
                            requestData({ setLoading, setListData }, listRequest, location, listSelecter, keyword);
                        }
                        return;
                    }
                    requestData({ setLoading, setListData }, listRequest, location, listSelecter, keyword);
                    tagsRef.current = `${genre},${status},${tag},${prototypes}`;
                    window.scrollTo({
                        top: 200,
                    });
                } else {
                    requestData({ setLoading, setListData }, listRequest, location, listSelecter, keyword);
                    tagsRef.current = `${genre},${status},${tag},${prototypes}`;
                    window.scrollTo({
                        top: 200,
                    });
                }
            } else {
                if (renderCom > 0) {
                    if (`${genre},${status},${tag},${prototypes}` !== tagsRef.current) {
                        requestData({ setLoading, setListData }, listRequest, location, listSelecter, keyword);
                        tagsRef.current = `${genre},${status},${tag},${prototypes}`;
                        return;
                    } else {
                        return;
                    }
                }
                requestData({ setLoading, setListData }, listRequest, location, listSelecter, keyword);
                setRenderCom(renderCom + 1);
                window.scrollTo({
                    top: 200,
                });
            }
        } else {
            requestData({ setLoading, setListData }, listRequest, location, listSelecter);
            setRenderCom(renderCom + 1);
            tagsRef.current = `${genre},${status},${tag},${prototypes}`;
            window.scrollTo({
                top: 200,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort_by, tag, genre, status, prototypes, keyword]);

    useEffect(() => {
        if (renderCom && keyword) {
            requestData({ setLoading, setListData }, listRequest, location, listSelecter, keyword);
            tagsRef.current = `${genre},${status},${tag},${prototypes}`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('content')}>
                            {!loading && keyword && (
                                <p className={cx('search-title')}>
                                    Kết quả cho: <span className={cx('keyword')}>{keyword}</span>
                                </p>
                            )}
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
