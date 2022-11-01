import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '~/components/Loading';
import Reply from '~/components/TapsBook/Taps/Reply';
import { requestData } from '~/services';
import styles from '../Review.module.scss';
import Pagination from '~/components/TapsBook/Taps/Review/Pagination';

const cx = classNames.bind(styles);

function ListReviewCmt({ data, Rating, setPerson, setRepData, setTime, checkTapsIndex }) {
    const [listData, setListData] = useState([]);
    const [checkBtn, setCheckBtn] = useState({});
    const [checkSpoliBtn, setCheckSpoliBtn] = useState({});
    const [loading, setLoading] = useState(false);

    // console.log(listData);

    useEffect(() => {
        const checkSpoli = data.reduce((acc, item, index) => {
            return { ...acc, [`${index}`]: item.spoli };
        }, {});

        const check = data.reduce((acc, item, index) => {
            return { ...acc, [`${index}`]: item.comment.length < 400 };
        }, {});
        if (checkTapsIndex) {
            const dataAsync = async () => {
                const dataList = data;
                requestData({ dataList, setLoading, setListData, type: 'review' });
                setCheckBtn(check);
                setCheckSpoliBtn(checkSpoli);
            };

            dataAsync();
        }

        return () => {
            setCheckBtn(check);
            // console.log('checkSpoli', checkSpoli);
            setCheckSpoliBtn(checkSpoli);
        };
    }, [data.idBook, data, checkTapsIndex]);

    const setCmtUser = (cmt) => {
        let cmtSlice;
        const cmtLength = cmt.length;
        if (cmtLength > 400) {
            cmtSlice = `${cmt.slice(0, 401).trim()}... `;
            return cmtSlice;
        }

        return cmt;
    };

    // console.log('re-render');

    return (
        <div className={cx('list-review-cmt')}>
            {loading && <Loading style={{ marginTop: '50px' }} />}
            {listData.length <= 10 &&
                !loading &&
                listData.map((item, index) => {
                    return (
                        <div key={index} className={cx('review-cmt-item')}>
                            <div className={cx('review-avata')}>
                                <img src={item.avatar} alt={item.name} />
                                <span className={cx('review-level')}>{`Cấp ${item.level}`}</span>
                            </div>
                            <div className={cx('review-body')}>
                                <Link to="" className={cx('review-name')}>
                                    {item.name}
                                </Link>
                                <div className={cx('review-rate')}>
                                    <div className={cx('info')}>
                                        <Rating
                                            percent={setPerson(item.totalRate)}
                                            totalRate={item.totalRate}
                                            read={item.totalViewChapter}
                                            time={item.time}
                                            setTime={setTime}
                                        />
                                    </div>
                                </div>
                                <div className={cx('review-cmt')}>
                                    <span className={cx('review-description')}>
                                        {checkSpoliBtn[`${index}`]
                                            ? undefined
                                            : checkBtn[`${index}`]
                                            ? item.comment
                                            : setCmtUser(item.comment)}
                                    </span>
                                    <span className={cx('review-check')}>
                                        {!checkBtn[`${index}`] && !checkSpoliBtn[`${index}`] && (
                                            <button
                                                className={cx('review-btn')}
                                                onClick={() =>
                                                    setCheckBtn((prev) => {
                                                        return { ...prev, [`${index}`]: true };
                                                    })
                                                }
                                            >
                                                {' '}
                                                đọc tiếp
                                            </button>
                                        )}
                                        {checkSpoliBtn[`${index}`] && (
                                            <button
                                                className={cx('review-btn', { ['spoli']: checkSpoliBtn[`${index}`] })}
                                                onClick={() => {
                                                    setCheckSpoliBtn((prev) => {
                                                        return { ...prev, [`${index}`]: false };
                                                    });
                                                    setCheckBtn((prev) => {
                                                        return { ...prev, [`${index}`]: true };
                                                    });
                                                }}
                                            >
                                                Tiết lộ nội dung truyện
                                            </button>
                                        )}
                                    </span>
                                </div>
                                <Reply data={item} navActiveData={{ setRepData, setTime, setCmtUser }} />
                            </div>
                        </div>
                    );
                })}

            {listData.length > 10 && !loading && (
                <Pagination
                    data={listData}
                    limit={10}
                    listNav={{
                        checkBtn,
                        checkSpoliBtn,
                        component: Rating,
                        setPerson,
                        setTime,
                        setRepData,
                        setCmtUser,
                        setCheckBtn,
                        setCheckSpoliBtn,
                    }}
                />
            )}
        </div>
    );
}

export default memo(ListReviewCmt);
