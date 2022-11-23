import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect, memo, useState } from 'react';

import styles from './UserInfo.module.scss';
import { handleTime, handlerGetDataUserInfo } from '~/handler';
import { getListBookServices } from '~/services';

const cx = classNames.bind(styles);

function UserInfo({ data }) {
    const { user, userRead, userPost } = data;
    const [userData, setUserData] = useState({});
    const [userReadLength, setUserReadLength] = useState([]);
    const [userPostLength, setUserPostLength] = useState([]);
    const [handlerGetLevelPoint, handlerSetExp, handlerSetWidthExp] = handlerGetDataUserInfo(userData);

    useEffect(() => {
        const dataCheck = Object.keys(data).length;
        if (dataCheck) {
            const asyncData = async () => {
                const userReadChapLength = userRead?.read.reduce((acc, item) => acc + item?.chapter.length, 0) || 0;
                const userReadLength = userRead?.read.length || 0;
                const userPostChapLength = userPost.reduce((acc, item) => acc + item?.totalChapter, 0) || 0;
                const userPostLength = userPost?.length || 0;

                const userDataRequest = { data: user, type: 'user', delay: 700 };
                const userReadRequest = { data: [userReadLength, userReadChapLength], type: 'user', delay: 700 };
                const userPostRequest = { data: [userPostLength, userPostChapLength], type: 'user', delay: 700 };

                const results = await Promise.all([
                    getListBookServices(userDataRequest.data, userDataRequest.type, userDataRequest.delay),
                    getListBookServices(userReadRequest.data, userReadRequest.type, userReadRequest.delay),
                    getListBookServices(userPostRequest.data, userPostRequest.type, userPostRequest.delay),
                ]);

                const [userDataList, userReadData, userPostData] = results;
                setUserData(userDataList);
                setUserReadLength(userReadData);
                setUserPostLength(userPostData);
            };

            asyncData();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('media')}>
                <div className={cx('media-avatar')}>
                    {userData.avatar && <img className={cx('img')} src={userData.avatar}></img>}
                </div>
                <div className={cx('media-body')}>
                    <div className={cx('media-name')}>
                        {userData.name}
                        <span className={cx('user-level')}>{userData.level ? `lv.${userData.level}` : 'lv.0'}</span>
                    </div>
                    <div className={cx('time')}>
                        <i className="nh-icon icon-user"></i>
                        {userData.createTime && handleTime(new Date(), new Date(userData.createTime))}
                    </div>
                </div>
            </div>
            {userData.description && <div className={cx('user-description')}>{userData.description}</div>}
            <div className={cx('point-exp')}>
                <div className={cx('exp')} style={{ width: handlerSetWidthExp(userData.exp, userData.level) }}>
                    {handlerSetExp(userData.level)}
                </div>
            </div>
            <div className={cx('info')}>
                <div className={cx('info-item')}>
                    <div className={cx('info-title')}>ĐÃ ĐỌC</div>
                    <div className={cx('info-content')}>
                        <div className={cx('info-sub')}>
                            {userReadLength[0]}
                            <span className={cx('info-sub-item')}> truyện </span>
                        </div>
                        <div className={cx('info-sub')}>
                            {userReadLength[1]}
                            <span className={cx('info-sub-item')}> chương </span>
                        </div>
                    </div>
                </div>
                <div className={cx('info-item')}>
                    <div className={cx('info-title')}>XUẤT BẢN</div>
                    <div className={cx('info-content')}>
                        <div className={cx('info-sub')}>
                            {userPostLength[0]}
                            <span className={cx('info-sub-item')}> truyện </span>
                        </div>
                        <div className={cx('info-sub')}>
                            {userPostLength[1]}
                            <span className={cx('info-sub-item')}> chương </span>
                        </div>
                    </div>
                </div>
                <div className={cx('info-item')}>
                    <div className={cx('info-title')}>BÌNH LUẬN</div>
                    <div className={cx('info-content')}>{userData.totalCmt}</div>
                </div>
                <div className={cx('info-item')}>
                    <div className={cx('info-title')}>ĐỀ CỬ</div>
                    <div className={cx('info-content')}>{userData.totalNominate}</div>
                </div>
                <div className={cx('info-item')}>
                    <div className={cx('info-title')}>THÍCH</div>
                    <div className={cx('info-content')}>{userData.totalLike}</div>
                </div>
                <div className={cx('info-item')}>
                    <div className={cx('info-title')}>CẤT GIỮ</div>
                    <div className={cx('info-content')}>{userData.totalKeeps}</div>
                </div>
            </div>
        </div>
    );
}

export default memo(UserInfo);
