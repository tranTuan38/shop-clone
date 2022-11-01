import classNames from 'classnames/bind';
import Item from './Item';
import styles from './Pagination.module.scss';
import { memo } from 'react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Pagination({ data, listNav, limit }) {
    const [listData, setListData] = useState(null);
    const [pageCur, setPageCur] = useState(1);
    const [pageCount, setPageCount] = useState(pageCur);
    const [value, setValue] = useState(pageCur);
    const [pageOffset, setPageOffset] = useState(0);

    const { checkSpoliBtn, setCheckSpoliBtn } = listNav;

    const paginationRef = useRef();
    const prevcheckSpoliBtn = useRef();

    useEffect(() => {
        const endOffset = pageOffset + limit;
        setListData(data.slice(pageOffset, endOffset));
        setPageCount(Math.ceil(data.length / limit));
        if (!prevcheckSpoliBtn.current) {
            prevcheckSpoliBtn.current = checkSpoliBtn;
        }
    }, [pageOffset, limit, data]);

    const handlePageClick = (event) => {
        setCheckSpoliBtn(prevcheckSpoliBtn.current);
        const paginationOffsetTop = paginationRef.current.offsetTop;
        const newOffset = (event.selected * limit) % data.length;
        setPageOffset(newOffset);
        setPageCur(event.selected + 1);
        setValue(event.selected + 1);
        const dataLength = data.slice(newOffset, newOffset + limit).length;

        if (dataLength > 1) {
            window.scrollTo({ top: paginationOffsetTop + 250, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: paginationOffsetTop + 250, behavior: 'auto' });
        }
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
            const paginationOffsetTop = paginationRef.current.offsetTop;
            const newOffset = ((pageNumber - 1) * limit) % data.length;
            setPageOffset(newOffset);
            setPageCur(pageNumber);
            const dataLength = data.slice(newOffset, newOffset + limit).length;

            if (dataLength > 1) {
                window.scrollTo({ top: paginationOffsetTop + 250, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: paginationOffsetTop + 250, behavior: 'auto' });
            }
        }
    };

    return (
        <div className={cx('wrapper')} ref={paginationRef}>
            <Item data={listData} navActiveData={listNav} pageCur={pageCur} />
            <div className={cx('container')}>
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
                {listData?.length ? (
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

export default Pagination;
