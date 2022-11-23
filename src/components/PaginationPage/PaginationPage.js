import classNames from 'classnames/bind';
import styles from './PaginationPage.module.scss';
import { memo, useRef } from 'react';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { handlerSetChangePagination } from '~/handler';

const cx = classNames.bind(styles);

function PaginationPage({ type, data, limit, nameSearch, PageItem }) {
    const [prevSearch, setPrevSearch] = useState(nameSearch);
    const [listData, setListData] = useState([]);
    const [pageCur, setPageCur] = useState(1);
    const [pageCount, setPageCount] = useState(pageCur);
    const [value, setValue] = useState(pageCur);
    const [pageOffset, setPageOffset] = useState(0);

    const wrapperRef = useRef();

    useEffect(() => {
        if (nameSearch) {
            if (nameSearch !== prevSearch) {
                setPageCur(1);
                setPageCount(1);
                setValue(1);
                setPageOffset(0);
                setPrevSearch(nameSearch);
                return;
            }
        }

        if (data.length >= limit) {
            const endOffset = pageOffset + limit;
            setListData(data.slice(pageOffset, endOffset));
            setPageCount(Math.ceil(data.length / limit));
        }
    }, [pageOffset, limit, data, nameSearch, PageItem, prevSearch]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % data.length;
        const wrapperRefOffSetHeight = wrapperRef.current.offsetTop;
        setPageOffset(newOffset);
        setPageCur(event.selected + 1);
        setValue(event.selected + 1);
        window.scrollTo({ top: wrapperRefOffSetHeight + 290, behavior: 'smooth' });
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
            const newOffset = ((pageNumber - 1) * limit) % data.length;
            const wrapperRefOffSetHeight = wrapperRef.current.offsetTop;
            setPageOffset(newOffset);
            setPageCur(pageNumber);
            window.scrollTo({ top: wrapperRefOffSetHeight + 290, behavior: 'smooth' });
        }
    };

    return (
        <div className={cx('wrapper')} ref={wrapperRef}>
            {data.length >= limit ? (
                <PageItem data={listData} pageCur={pageCur} type={type} />
            ) : (
                <PageItem data={data} type={type} />
            )}
            <div className={cx('container')}>
                {!!listData.length && data.length >= limit && (
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
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
                )}

                {!!listData.length && data.length >= limit ? (
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
        </div>
    );
}

export default memo(PaginationPage);
