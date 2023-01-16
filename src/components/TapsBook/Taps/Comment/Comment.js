import classNames from 'classnames/bind';
import { memo, useEffect, useRef, useState } from 'react';

import { handlerCheckSelected, handlerGetCommentLength } from '~/handler';
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
import ReportForm from '~/components/Form/ReportForm';

const cx = classNames.bind(styles);

const listOption = [
    { value: 'like_count', title: 'Lượt thích' },
    { value: 'id', title: 'Mới nhất' },
    { value: 'oldest', title: 'Cũ nhất' },
];

function Comment({
    listDataCmt,
    isLogin,
    user,
    checkTapsIndex,
    data,
    c4Data,
    className,
    classActive = false,
    getCommentById,
}) {
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
    const [updateData, setUpdateData] = useState(0);
    const [deleteData, setDeleteData] = useState(false);
    const [updates, setUpdates] = useState({});
    const dataGetListCmt = getCommentById(data.idBook);
    let WrapperCom = 'div';
    let imgSrc = imgs.avatarImg.userNoIn;

    const userCmtRef = useRef();
    const reportRef = useRef();

    if (isLogin) {
        WrapperCom = Fragment;
        imgSrc = user.avatar;
    }

    // console.log(dataGetListCmt);
    // console.log(user);

    const limit = 2;

    const { checkData } = handlerCheckSelected(data.idBook);

    useEffect(() => {
        let dataList = [...dataGetListCmt];
        const dataListLength = dataList.length;
        const { typeUpdate, dockData, updateItem } = updates;

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
                setListDataLength(dataListLength); // khi dataList chưa cắt
                setCurLengthData(dataList.length); // sau khi đã cắt
                setRatio(dataList.length / dataListLength);
            };
            dataAsync();
            setFirstRender(firstRender + 1);
            return;
        }

        if (checkTapsIndex && add && value === prevValue) {
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
                }
            };

            dataAsync();
            return;
        }

        if (checkTapsIndex && value !== prevValue) {
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
    }, [data.idBook, checkTapsIndex, value, add]);

    useEffect(() => {
        if (isLogin && checkTapsIndex && updateData && value === prevValue) {
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
        } else if (isLogin && checkTapsIndex && deleteData && value === prevValue) {
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

    // console.log(dataGetListCmt);

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

    // console.log(reportRef.current);

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
                                type="comment"
                                idBook={data.idBook}
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
                            />
                        )}
                    </div>
                    <div className={cx('add-media', { classActive: classActive })}>
                        {ratio !== 1 && !Number.isNaN(ratio) && !!listData.length && dataGetListCmt?.length > limit && (
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
                                        <Link
                                            to=""
                                            target="_blank"
                                            className={cx('qc-link')}
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <img src={item.src} alt={item.alt} className={cx('qc-img')} />
                                        </Link>
                                    </div>
                                    <hr className={cx('hr')} />
                                </Fragment>
                            );
                        })}
                </div>
            </div>
            <ReportForm ref={reportRef} />
        </div>
    );
}

export default memo(Comment);
