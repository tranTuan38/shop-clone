import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Chap.module.scss';
import { handleTime } from '~/handler';
import Loading from '~/components/Loading';
import { requestData } from '~/services';

const cx = classNames.bind(styles);

function Chap({ data, checkTapsIndex }) {
    const [id, setId] = useState(data.idBook);
    const [firstRender, setFirstRender] = useState(0);
    const [listChap, setListChap] = useState([]);
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);

    // console.log('idPrev: ', id);
    // console.log('idBook: ', data.idBook);
    // console.log('checkTapsIndex : ', checkTapsIndex);
    // console.log('firstRender : ', firstRender);

    useEffect(() => {
        if (checkTapsIndex && !firstRender) {
            const dataAsync = async () => {
                const dataList = data.listChapter;
                requestData({ dataList, setLoading, setListData: setListChap, type: 'chapter' });
            };
            dataAsync();
            setFirstRender(firstRender + 1);
        }

        if (id !== data.idBook) {
            setId(data.idBook);
            setFirstRender(0);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.idBook, checkTapsIndex]);

    const setChap = (bookData) => {
        if (bookData.numberChapter < 10) {
            return `Chương 0${bookData.numberChapter}: ${bookData.nameChapter}`;
        } else {
            return `Chương ${bookData.numberChapter}: ${bookData.nameChapter}`;
        }
    };

    const setTime = (bookData) => {
        const timeCur = new Date();
        const timeItem = new Date(bookData.timeCreatChapter);
        const time = handleTime(timeCur, timeItem);

        return ` (${time})`;
    };

    const handlerBtnClick = (event) => {
        if (data.listChapter.length > 1) {
            setListChap((prev) => {
                let newData = [...prev];

                return newData.reverse();
            });
            setCheck(!check);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <h4 className={cx('h4')}>Danh sách chương</h4>
                <button className={cx('btn')} onClick={handlerBtnClick}>
                    {check ? <i className="nh-icon icon-sort-desc"></i> : <i className="nh-icon icon-sort-asc"></i>}
                </button>
            </div>

            {loading ? (
                <Loading style={{ margin: 'auto' }} />
            ) : (
                <div className={cx('content')}>
                    <div className="row mt-2">
                        {listChap.map((item, index) => {
                            return (
                                <div key={index} className="col c-4 border-bottom-dashed">
                                    <Link to={`chuong-${item.numberChapter}`} className={cx('link')}>
                                        <div className={cx('item')}>
                                            <div className={cx('body')}>
                                                {setChap(item)}
                                                <span className={cx('time')}>{setTime(item)}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(Chap);
