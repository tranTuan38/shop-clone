import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';

import { handlerCheckSelected } from '~/handler';
import styles from './Comment.module.scss';
import UserComment from '~/components/UserComment';
import InputReply from '~/components/UserComment/Reply/InputReply';
import BySelectData from '~/components/BySelectData';
import { requestData } from '~/services';
import Loading from '~/components/Loading';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import ActionLogin from '~/components/ActionLogin';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

const listOption = [
    { value: 'like_count', title: 'Lượt thích' },
    { value: 'id', title: 'Mới nhất' },
    { value: 'oldest', title: 'Cũ nhất' },
];

function Comment({ listDataCmt, isLogin, user, checkTapsIndex, data, c4Data, className, classActive = false }) {
    const [id, setId] = useState(data.idBook);
    const [value, setValue] = useState('id');
    const [prevValue, setPrevValue] = useState(value);
    const [firstRender, setFirstRender] = useState(0);
    const [listData, setListData] = useState([]);
    const [listC4Data, setListC4Data] = useState([]);
    const [listDataLength, setListDataLength] = useState(0);
    const [curLengthData, setCurLengthData] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [loading, setLoading] = useState(false);
    const [add, setAdd] = useState(false);
    let WrapperCom = 'div';
    let imgSrc = imgs.avatarImg.userNoIn;

    const userCmtRef = useRef();

    if (isLogin) {
        WrapperCom = Fragment;
        imgSrc = user.avatar;
    }

    // console.log(listDataCmt);
    // console.log(user);

    const limit = 2;

    const { checkData } = handlerCheckSelected();

    useEffect(() => {
        let dataList = [...listDataCmt];
        const dataListLength = dataList.length;
        if (checkTapsIndex && !firstRender && !add) {
            const dataAsync = async () => {
                dataList.sort((a, b) => {
                    const aTime = new Date(a.time);
                    const bTime = new Date(b.time);

                    return bTime - aTime;
                });
                if (dataList.length > limit) {
                    dataList = dataList.slice(0, limit);
                }
                setListC4Data(c4Data);
                await requestData({ dataList, setLoading, setListData: setListData, type: 'comment' });
                setListDataLength(dataListLength);
                setCurLengthData(dataList.length);
                setRatio(dataList.length / dataListLength);
            };
            dataAsync();
            setFirstRender(firstRender + 1);
            return;
        }

        if (checkTapsIndex && add && value === prevValue) {
            const dataAsync = async () => {
                dataList = checkData(value, dataList);
                dataList = dataList.slice(curLengthData, curLengthData + limit);
                dataList = [...listData, ...dataList];
                setCurLengthData(dataList.length);
                await requestData({ dataList, setLoading, setListData, type: 'comment' });
                setRatio(dataList.length / dataListLength);
                setAdd(false);
            };

            dataAsync();
            return;
        }

        if (checkTapsIndex && value !== prevValue) {
            const dataAsync = async () => {
                setListData([]);
                dataList = checkData(value, listDataCmt);
                if (dataList.length > limit) {
                    dataList = dataList.slice(0, limit);
                }
                await requestData({ dataList, setLoading, setListData: setListData, type: 'comment' });
                setCurLengthData(dataList.length);
                setPrevValue(value);
                setRatio(dataList.length / dataListLength);
            };
            dataAsync();
            return;
        }

        if (id !== data.idBook) {
            setId(data.idBook);
            setListData([]);
            setFirstRender(0);
            setListDataLength(0);
            setValue('id');
            setPrevValue('id');
            setCurLengthData(0);
            setRatio(0);
            return;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.idBook, checkTapsIndex, value, add]);

    const handlerAddCmt = () => {
        if (add) {
            return;
        }

        setAdd(true);
    };

    const handlerOpen = () => {
        userCmtRef.current.focus();
    };

    const handlerClose = () => {
        userCmtRef.current.blur();
    };

    // console.log(isLogin);

    return (
        <div className={cx('wrapper', { [className]: !!className })}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('nav')}>
                        <div className={cx('h4')}>{`${listDataLength} bình luận`}</div>
                        <BySelectData value={value} setValue={setValue} data={listOption} />
                    </div>
                    <ActionLogin isLogin={isLogin} onOpen={() => handlerOpen()} onClose={() => handlerClose()}>
                        <WrapperCom>
                            <InputReply
                                src={imgSrc}
                                ref={userCmtRef}
                                isLogin={isLogin}
                                ActionLogin={ActionLogin}
                                styleAvatar={{
                                    width: '45px',
                                    marginTop: '0',
                                    marginRight: '16px',
                                    alignSelf: 'center',
                                }}
                                styleForm={{ marginTop: '16px', padding: '0' }}
                            />
                        </WrapperCom>
                    </ActionLogin>
                    <div className={cx('list-media')}>
                        {!!listDataCmt.length && loading && !add && <Loading wrapperStyle={{ marginTop: '24px' }} />}
                        {!!listData.length && (
                            <UserComment
                                user={user}
                                src={imgSrc}
                                data={listData}
                                classActive={classActive}
                                isLogin={isLogin}
                                ActionLogin={ActionLogin}
                            />
                        )}
                    </div>
                    <div className={cx('add-media', { classActive: classActive })}>
                        {ratio !== 1 && !!listData.length && (
                            <button className={cx('add-button')} onClick={handlerAddCmt}>
                                {!add ? 'Xem thêm bình luận' : <Loading wrapperStyle={{ marginTop: '0' }} />}
                            </button>
                        )}
                    </div>
                </div>
                <div className="col c-4">
                    {!!listC4Data.length &&
                        listC4Data.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className={cx('qc')}>
                                        <Link to="...." target="_blank" className={cx('qc-link')}>
                                            <img src={item.src} alt={item.alt} className={cx('qc-img')} />
                                        </Link>
                                    </div>
                                    <hr className={cx('hr')} />
                                </Fragment>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default memo(Comment);
