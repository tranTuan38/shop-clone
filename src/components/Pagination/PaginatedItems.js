import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { handleLeftSideBarPath, handlerSetpathWitPagination, removeVietnameseTones } from '~/handler';

import Item from './BookItem';
import styles from './Pagination.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function PaginatedItems({ limitPage, data, listRequest, firstRender }) {
    const [pageCur, setPageCur] = useState(1);
    const [listData, setListData] = useState([]);
    const [pageCount, setPageCount] = useState(pageCur);
    const [pageOffset, setPageOffset] = useState(0);
    const [value, setValue] = useState(pageCur);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const location = useLocation();

    useEffect(() => {
        if (firstRender === 1) {
            if (limit && page) {
                const newOffset = ((Number(page) - 1) * limitPage) % data.length;
                const endOffset = newOffset + limitPage;
                setPageOffset(newOffset);
                setPageCur(Number(page));
                setValue(Number(page));
                setListData(data.slice(newOffset, endOffset));
                setPageCount(Math.ceil(data.length / limitPage));
            }
        } else {
            const endOffset = pageOffset + limitPage;
            setListData(data.slice(pageOffset, endOffset));
            setPageCount(Math.ceil(data.length / limitPage));
        }
    }, [pageOffset, limitPage]);

    const handlerPageChange = (event) => {
        const newOffset = (event.selected * limitPage) % data.length;
        setPageOffset(newOffset);
        setPageCur(event.selected + 1);
        setValue(event.selected + 1);
        handlerSetpathWitPagination(
            { limit: limitPage, page: event.selected + 1 },
            { ...listRequest, limit: limit, page: page },
            location,
            setSearchParams,
        );
        window.scrollTo({
            top: 200,
            behavior: 'smooth',
        });
    };

    const handlerOnChange = (e) => {
        const pageChange = Number(e.target.value);
        setValue(pageChange);
    };

    const handlerOnBlur = (e) => {
        const newPage = Number(e.target.value);
        if (newPage < 0 || newPage > pageCount || !newPage) {
            setValue(pageCur);
        } else {
            setValue(newPage);
        }
    };

    const handlerOnClickBtn = (e) => {
        const pageNumber = Number(value);
        const isCheck = pageNumber === pageCur;
        if (!isCheck) {
            const newOffset = ((pageNumber - 1) * limitPage) % data.length;
            setPageOffset(newOffset);
            setPageCur(pageNumber);
            window.scrollTo({
                top: 200,
                behavior: 'smooth',
            });
            handlerSetpathWitPagination(
                { limit: limitPage, page: pageNumber },
                { ...listRequest, limit: limit, page: page },
                location,
                setSearchParams,
            );
        }
    };

    return (
        <>
            <div className="row">
                <Item data={listData} />
            </div>
            <div className={cx('container')}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlerPageChange}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName={cx('pagination')}
                    pageClassName={cx('item')}
                    pageLinkClassName={cx('link')}
                    activeClassName={cx('active')}
                    activeLinkClassName={cx('link-active')}
                    previousClassName={cx('prev')}
                    nextClassName={cx('next')}
                    forcePage={pageCur - 1}
                />
                {listData.length ? (
                    <div className={cx('input-jumb')}>
                        <input
                            className={cx('input')}
                            value={value}
                            onChange={handlerOnChange}
                            onBlur={handlerOnBlur}
                        />
                        <button className={cx('go')} onClick={handlerOnClickBtn}>
                            Go
                        </button>
                    </div>
                ) : undefined}
            </div>
        </>
    );
}

export default memo(PaginatedItems);
