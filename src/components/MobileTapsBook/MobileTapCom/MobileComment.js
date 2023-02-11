import classNames from 'classnames/bind';
import { Fragment, memo, useState, useRef, useEffect } from 'react';

import styles from './MobileTapCom.module.scss';
import { Intro, Review, Chap, Comment, Fan } from '~/components/TapsBook/Taps';
import imgs from '~/assets/imgs';
import {
    SetPersonRatingForBook,
    handlerGetBookMediaData,
    getListRatingForBook,
    handleTime,
    handlerCheckSelected,
    handlerGetCommentLength,
    detectDeviceType,
} from '~/handler';
import { listBookData, listRating, userData, listComment } from '~/initdata';
import ActionLogin from '~/components/ActionLogin';
import ReportForm from '~/components/Form/ReportForm';
import InputReply from '~/components/UserComment/Reply/InputReply';
import { requestData } from '~/services';
import Loading from '~/components/Loading';
import UserComment from '~/components/UserComment';

const listOption = [
    { value: 'like_count', title: 'Lượt thích' },
    { value: 'id', title: 'Mới nhất' },
    { value: 'oldest', title: 'Cũ nhất' },
];

const cx = classNames.bind(styles);

function MobileComment({ data, loginData, classActive }) {
    const [value, setValue] = useState('id');
    const [updateData, setUpdateData] = useState(0);
    const [listData, setListData] = useState([]);
    const [updates, setUpdates] = useState({});
    const [listDataLength, setListDataLength] = useState(0);

    const [id, setId] = useState(data.idBook);
    const [prevValue, setPrevValue] = useState(value);
    const [firstRender, setFirstRender] = useState(0);
    const [curLengthData, setCurLengthData] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [loading, setLoading] = useState(false);
    const [add, setAdd] = useState(false);
    const [deleteData, setDeleteData] = useState(false);
    const [isDevice, setIsDevice] = useState(detectDeviceType());

    const { listInfo, setRating, setRate, rateUser, totalNumberUser, getCommentById } = handlerGetBookMediaData(
        listRating,
        listComment,
        userData,
    );

    const dataGetListCmt = getCommentById(data.idBook);
    const { checkData } = handlerCheckSelected(data.idBook);

    const userCmtRef = useRef();
    const reportRef = useRef();
    const addRef = useRef();

    const isLogin = loginData.login;
    const user = loginData.userData();
    const limit = 2;

    let WrapperCom = 'div';
    let imgSrc = imgs.avatarImg.userNoIn;

    if (isLogin) {
        WrapperCom = Fragment;
        imgSrc = user.avatar;
    }

    useEffect(() => {
        let dataList = [...dataGetListCmt];
        const dataListLength = dataList.length;
        const { typeUpdate, dockData, updateItem } = updates;

        if (!firstRender && !add) {
            const dataAsync = async () => {
                dataList.sort((a, b) => {
                    const aTime = new Date(a.time);
                    const bTime = new Date(b.time);

                    return bTime - aTime;
                });
                if (dataList.length > limit) {
                    dataList = dataList.slice(0, limit);
                }
                await requestData({ dataList, setLoading, setListData: setListData, type: 'comment' });
                setListDataLength(dataListLength); // khi dataList chưa cắt
                setCurLengthData(dataList.length); // sau khi đã cắt
                setRatio(dataList.length / dataListLength);
            };
            dataAsync();
            setFirstRender(firstRender + 1);
            return;
        }

        if (add && value === prevValue) {
            const dataAsync = async () => {
                if (typeUpdate) {
                    // if (!updateData) {

                    // } else if (!deleteData) {
                    // }
                    const newData = dockData.slice(0, curLengthData + limit);
                    const result = [...updateItem, ...newData];

                    setCurLengthData(newData.length);
                    await requestData({ dataList: result, setLoading, setListData, type: 'comment' });
                    setListDataLength(dataListLength);

                    if (dockData.length) {
                        setRatio(newData.length / dockData?.length);
                    }

                    setAdd(false);
                } else {
                    dataList = checkData(value, dataList);
                    dataList = dataList.slice(0, curLengthData + limit);
                    setCurLengthData(dataList.length);
                    await requestData({ dataList, setLoading, setListData, type: 'comment' });
                    setRatio(dataList.length / dataListLength);
                    setAdd(false);
                    addRef.current?.blur();
                }
            };

            dataAsync();
            return;
        }

        if (value !== prevValue) {
            const dataAsync = async () => {
                setListData([]);
                setUpdates({});
                setUpdateData(0);
                setDeleteData(0);
                dataList = checkData(value, dataGetListCmt);

                // console.log(dataList);

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
            setUpdateData(0);
            setDeleteData(0);
            setUpdates({});
            return;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.idBook, value, add]);

    // console.dir(navigator.userAgent);
    // console.log(detectDeviceType());

    useEffect(() => {
        if (isLogin && updateData && value === prevValue) {
            let dataList = [...dataGetListCmt];
            const dataListLength = dataList.length;
            const spanDom = document.querySelector('[data-sub-tap=comment]');
            // if (spanDom) spanDom.innerText = handlerGetCommentLength(idBook);
            // const { typeUpdate, dockData, updateItem } = updates;

            // console.log('updates: ', updates);

            if (updates.typeUpdate) {
                const newUpdateItem = dataList.slice(updates.dockData.length).reverse() || [];

                // console.log(updates);
                // console.log(ratio);
                // const curUpdateIndex = 1;

                const curListData = updates.dockData.slice(0, curLengthData) || [];
                const result = { ...updates, updateItem: newUpdateItem };
                // console.log('dataList: ', dataList);
                // console.log('dockData: ', updates.dockData);
                // console.log('updateItem: ', updates.updateItem);
                // console.log('newUpdateItem: ', newUpdateItem);
                // console.log('curListData: ', curListData);

                setUpdates(result);
                setListData([...result.updateItem, ...curListData]);
                setListDataLength(dataListLength);
                setUpdateData(0);
            } else {
                const curData = dataList.slice(0, listDataLength) || [];
                const updateItem = dataList.slice(listDataLength).reverse() || [];
                const dockData = checkData(value, curData) || [];

                const result = {
                    typeUpdate: 'update',
                    dockData,
                    updateItem,
                };

                // console.log('dataList: ', dataList);
                // console.log('curData: ', curData);
                // console.log('updateItem: ', updateItem);
                // console.log('dockData: ', dockData);
                // console.log('listData: ', listData);

                setUpdates(result);
                setListData([...updateItem, ...listData]);
                setListDataLength(dataListLength);
                setUpdateData(0);
            }

            if (spanDom) {
                spanDom.innerText = handlerGetCommentLength(data.idBook);
            }
        } else if (isLogin && deleteData && value === prevValue) {
            // listData
            let dataList = [...dataGetListCmt];
            const dataListLength = dataList.length;
            const spanDom = document.querySelector('[data-sub-tap=comment]');

            // console.log(dataList);

            // console.log(curLengthData);
            // console.log(curLengthData);
            const dataAsync = async () => {
                setListData([]);
                setUpdates({});
                dataList = checkData(value, dataList);
                dataList = dataList.slice(0, limit);
                setCurLengthData(dataList.length);
                await requestData({ dataList, setLoading, setListData, type: 'comment' });
                setListDataLength(dataListLength);
                setRatio(dataList.length / dataListLength);
                setDeleteData(0);
            };

            dataAsync();
            if (spanDom) {
                spanDom.innerText = handlerGetCommentLength(data.idBook);
            }
            // console.log(listData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataGetListCmt?.length]);

    const handlerSetValue = (e) => {
        setValue(e.target.value);
    };

    const handlerOpen = () => {
        userCmtRef.current.focus();
    };

    const handlerClose = () => {
        userCmtRef.current.blur();
    };

    const handlerAddCmt = () => {
        if (add) {
            return;
        }

        setAdd(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment')}>
                <div className={cx('content-title')}>
                    <h2>{`${listDataLength} bình luận`}</h2>
                    <div className={cx('by')}>
                        <select
                            className={cx('select')}
                            style={{ backgroundImage: `url('${imgs.arrow}')` }}
                            value={value}
                            onChange={handlerSetValue}
                        >
                            <option className={cx('selected')} value="like_count">
                                Lượt thích
                            </option>
                            <option className={cx('selected')} value="id">
                                Mới nhất
                            </option>
                            <option className={cx('selected')} value="oldest">
                                Cũ nhất
                            </option>
                        </select>
                    </div>
                </div>
                <div className={cx('container')}>
                    <ActionLogin isLogin={isLogin} onOpen={() => handlerOpen()} onClose={() => handlerClose()}>
                        <WrapperCom>
                            <InputReply
                                type="comment"
                                idBook={data.idBook}
                                src={imgSrc}
                                ref={userCmtRef}
                                isLogin={isLogin}
                                ActionLogin={ActionLogin}
                                styleAvatar={{
                                    width: '40px',
                                    marginTop: '0',
                                    marginRight: '8px',
                                    alignSelf: 'center',
                                }}
                                textareaProps={{ style: { fontSize: '1.6rem', height: '64px' } }}
                                placeholder="Bình luận của bạn"
                                user={user}
                                setListData={setListData}
                                setUpdateData={setUpdateData}
                                styleForm={{ marginTop: '16px', padding: '0' }}
                            />
                        </WrapperCom>
                    </ActionLogin>
                    <div className={cx('list-media')}>
                        {loading && !add && <Loading wrapperStyle={{ marginTop: '45px' }} />}
                        {!!listData.length && (
                            <UserComment
                                idBook={data.idBook}
                                user={user}
                                src={imgSrc}
                                data={listData}
                                classActive={classActive}
                                isLogin={isLogin}
                                ActionLogin={ActionLogin}
                                onActionReports={reportRef.current}
                                setDeleteData={setDeleteData}
                                styleChange={styles}
                            />
                        )}
                    </div>
                    {ratio !== 1 && !Number.isNaN(ratio) && !!listData.length && dataGetListCmt?.length > limit && (
                        <div className={cx('add-media', { classActive: classActive })}>
                            <button
                                className={cx('add-button', { ['add-not-hover']: isDevice })}
                                onClick={handlerAddCmt}
                                ref={addRef}
                            >
                                {!add ? 'Xem thêm bình luận' : <Loading wrapperStyle={{ marginTop: '0' }} />}
                            </button>
                        </div>
                    )}
                </div>
                <ReportForm ref={reportRef} />
            </div>
        </div>
    );
}

export default memo(MobileComment);
