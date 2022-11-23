import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Reply.module.scss';
import InputReply from './InputReply';
import SpinnerGrow from '~/components/SpinnerGrow';
import { handleTime } from '~/handler';
import { requestData } from '~/services';

const cx = classNames.bind(styles);

function Reply({ data, listDataCmt, navActiveData }) {
    const [checkView, setCheckView] = useState(false);
    const [firstAll, setFirstAll] = useState(false);
    const [listReply, setListReply] = useState([]);
    const [checkRep, setCheckRep] = useState({});
    const [notIn, setNotIn] = useState(false);

    // console.log('listDataCmt: ', listDataCmt);
    // console.log('data: ', data);

    const { setTime, setCmtUser } = navActiveData;

    const handlerViewAll = () => {
        setNotIn(true);
        setFirstAll(true);
    };

    const handlerHideListRep = () => {
        setNotIn(false);
        setListReply([]);
        setCheckRep({});
    };

    const handlerCheckRep = (id) => {
        setCheckRep((prev) => ({ ...prev, [id]: !prev.id }));
    };

    // console.log('pageCur :', pageCur);
    // console.log('checkPageCur: ', checkPageCur);

    useEffect(() => {
        if (notIn) {
            const listCheck = listDataCmt.reduce((acc, user, index) => {
                return { ...acc, [`${index}`]: user.repCmt.length < 400 };
            }, {});
            const setDataRep = (data) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(data);
                    }, 500);
                });
            };
            const asyncListData = async () => {
                setFirstAll(true);
                const result = await setDataRep(listDataCmt);
                setListReply(result);
                setCheckRep(listCheck);
            };
            asyncListData();
        }
    }, [notIn]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <div className={cx('all-reply')} onClick={handlerViewAll}>
                    {!!data.userReply.length && !notIn && `Xem ${data.userReply.length} trả lời`}
                </div>
                <div className={cx('action-btn')}>
                    <button className={cx('btn', { active: false })}>
                        <i className="nh-icon icon-like"></i>
                        {data.cmtLike}
                    </button>
                    <button className={cx('btn', { active: notIn || firstAll })}>
                        <i className="nh-icon icon-reply"></i>
                        Trả lời
                    </button>
                    <button className={cx('btn', { active: false })}>
                        <i className="nh-icon icon-flag"></i>
                        Báo xấu
                    </button>
                </div>
            </div>
            <div className={cx('list')}>
                {notIn && (
                    <>
                        <div className={cx('media')}>
                            {!!listReply.length &&
                                listReply.map((item, index) => {
                                    return (
                                        <div key={index} className={cx('media-item')}>
                                            <div className={cx('avatar')}>
                                                <img src={item.avatar} alt={item.name} />
                                                <span className={cx('level')}>{`Cấp ${item.level}`}</span>
                                            </div>
                                            <div className={cx('media-body')}>
                                                <Link to="" className={cx('media-name')}>
                                                    {item.name}
                                                </Link>
                                                <div className={cx('media-cmt')}>
                                                    <span className={cx('media-description')}>
                                                        {checkRep[`${index}`] ? item.repCmt : setCmtUser(item.repCmt)}
                                                    </span>
                                                    <span className={cx('media-check')}>
                                                        <button
                                                            className={cx('media-btn')}
                                                            onClick={() => handlerCheckRep(index)}
                                                        >
                                                            {checkRep[`${index}`] ? undefined : 'đọc tiếp'}
                                                        </button>
                                                    </span>
                                                </div>
                                                <div className={cx('media-info')}>
                                                    <button className={cx('btn', { active: false })}>
                                                        <i className="nh-icon icon-like-alt"></i>
                                                        {item.like}
                                                    </button>
                                                    <div className={cx('btn')}>
                                                        <i className="nh-icon icon-clock"></i>
                                                        {setTime(new Date(), new Date(item.time))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        <button className={cx('hide-rep')} onClick={handlerHideListRep}>
                            Ẩn trả lời
                        </button>
                    </>
                )}
                {firstAll && <InputReply />}
                {/* <InputReply /> */}
            </div>
        </div>
    );
}

export default memo(Reply);
