import classNames from 'classnames/bind';

import styles from '../Review.module.scss';
import { Link } from 'react-router-dom';
import Reply from '../../Reply';

const cx = classNames.bind(styles);

function Item({ data, navActiveData, pageCur }) {
    const {
        checkBtn,
        checkSpoliBtn,
        component: Rating,
        setPerson,
        setTime,
        setCmtUser,
        setCheckBtn,
        setRepData,
        setCheckSpoliBtn,
    } = navActiveData;

    return (
        <>
            {data &&
                data.map((item, index) => (
                    <div key={index} className={cx('item-wrapper')}>
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
                                <Reply
                                    data={item}
                                    navActiveData={{ setRepData, setTime, setCmtUser }}
                                    pageCur={pageCur}
                                />
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default Item;
