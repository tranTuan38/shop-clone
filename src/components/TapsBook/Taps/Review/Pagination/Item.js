import classNames from 'classnames/bind';

import styles from '../Review.module.scss';
import { Link } from 'react-router-dom';
import Reply from '../../Reply';
import { handlerGetPostData } from '~/handler';
import { useViewport } from '~/hooks';

let cx = classNames.bind(styles);

function Item({ data, user, idBook, navActiveData, pageCur, isLogin, setUpdateNum, onActionReports, styleChange }) {
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

    const viewPort = useViewport();

    // console.log(data);

    if (styleChange) cx = classNames.bind(styleChange);

    return (
        <>
            {data &&
                data.map((item, index) => (
                    <div key={item.idUser} className={cx('item-wrapper')}>
                        <div
                            key={item.idUser}
                            className={cx('review-cmt-item')}
                            style={{ padding: viewPort ? '16px 0' : '' }}
                        >
                            {!viewPort && (
                                <div className={cx('review-avata')}>
                                    <img src={item.avatar} alt={item.name} />
                                    <span className={cx('review-level')}>{`Cấp ${item.level}`}</span>
                                </div>
                            )}

                            <div className={cx('review-body')}>
                                <div
                                    style={{
                                        display: viewPort ? 'flex' : '',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {viewPort && (
                                        <div className={cx('review-avata')}>
                                            <img src={item.avatar} alt={item.name} />
                                            <span className={cx('review-level')}>{`Cấp ${item.level}`}</span>
                                        </div>
                                    )}
                                    <div
                                        style={{
                                            flex: '1',
                                            display: viewPort ? 'flex' : '',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            <Link
                                                to={`/profile/${handlerGetPostData(item.name).id}`}
                                                className={cx('review-name')}
                                            >
                                                {item.name}
                                            </Link>
                                            {viewPort && (
                                                <p
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        fontSize: '1.3rem',
                                                        color: '#999',
                                                    }}
                                                >
                                                    <i className="nh-icon icon-eye-glasses mr-8"></i>
                                                    {` Đã đọc: ${item.totalViewChapter} chương`}
                                                </p>
                                            )}
                                        </div>
                                        <div
                                            className={cx('review-rate')}
                                            style={{ alignSelf: viewPort ? 'flex-start' : '' }}
                                        >
                                            <div className={cx('info')}>
                                                <Rating
                                                    percent={setPerson(item.totalRate)}
                                                    totalRate={item.totalRate}
                                                    read={item.totalViewChapter}
                                                    time={item.time}
                                                    setTime={setTime}
                                                    styleChange={styleChange}
                                                />
                                            </div>
                                        </div>
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
                                    isLogin={isLogin}
                                    data={item}
                                    onActionReports={onActionReports}
                                    user={user}
                                    setUpdateNum={setUpdateNum}
                                    idBook={idBook}
                                    navActiveData={{ setRepData, setTime, setCmtUser }}
                                    pageCur={pageCur}
                                    styleChange={styleChange}
                                />
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default Item;
