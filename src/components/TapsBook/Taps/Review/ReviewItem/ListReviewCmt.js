import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '~/components/Loading';
import Reply from '~/components/TapsBook/Taps/Reply';
import { requestData } from '~/services';
import styles from '../Review.module.scss';
import Pagination from '~/components/TapsBook/Taps/Review/Pagination';
import { handlerGetPostData, handlerDeleteData } from '~/handler';

const cx = classNames.bind(styles);

function ListReviewCmt({
    data,
    idBook,
    isLogin,
    user,
    Rating,
    setPerson,
    setRepData,
    setTime,
    checkTapsIndex,
    setUpdateNum,
    onActionReports,
}) {
    const [listData, setListData] = useState([]);
    const [checkBtn, setCheckBtn] = useState({});
    const [checkSpoliBtn, setCheckSpoliBtn] = useState({});
    const [loading, setLoading] = useState(false);

    // console.log(isLogin);
    // console.log(user);

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
            {loading && <Loading wrapperStyle={{ marginTop: '50px' }} />}
            {listData.length <= 10 &&
                !loading &&
                listData.map((item, index) => {
                    return (
                        <div key={index} className={cx('review-cmt-item')}>
                            <div className={cx('review-avata')}>
                                <img src={item.avatar} alt={item.name} />
                                <span className={cx('review-level')}>{`C???p ${item.level}`}</span>
                            </div>
                            <div className={cx('review-body')}>
                                <Link to={`/profile/${handlerGetPostData(item.name).id}`} className={cx('review-name')}>
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
                                                ?????c ti???p
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
                                                Ti???t l??? n???i dung truy???n
                                            </button>
                                        )}
                                    </span>
                                </div>
                                <Reply
                                    user={user}
                                    onActionReports={onActionReports}
                                    isLogin={isLogin}
                                    data={item}
                                    idBook={idBook}
                                    setUpdateNum={setUpdateNum}
                                    navActiveData={{ setRepData, setTime, setCmtUser }}
                                />
                            </div>
                        </div>
                    );
                })}

            {listData.length > 10 && !loading && (
                <Pagination
                    onActionReports={onActionReports}
                    isLogin={isLogin}
                    data={listData}
                    idBook={idBook}
                    user={user}
                    setUpdateNum={setUpdateNum}
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
