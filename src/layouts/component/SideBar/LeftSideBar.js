import classNames from 'classnames/bind';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useGetListSelecter } from '~/hooks';
import { handlerSetDataLeftBar, handlerSetDataWithPath, handleLeftSideBarPath, handleDeletePath } from '~/handler';
import styles from './SideBar.module.scss';
import { ListLeftSideBar } from '~/components/ListSideBar';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

const initdata = {
    selected: [],
    genre: [],
    status: '',
    prototypes: '',
    tag: [],
};

const listTitle = [
    'Thể loại',
    'Tình trạng',
    'Thuộc tính',
    'Tính cách nhân vật',
    'Bối cảnh thế giới',
    'Lưu phái',
    'Thị giác',
];

function LeftSideBar() {
    const datas = useGetListSelecter();
    const dataKeys = Object.keys(datas);

    // const { categorys, status, prototypes, characters, backGrg, sects, sights } = datas
    const [data, setData] = useState(initdata);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const sort_by = searchParams.get('sort_by');
    const genre = searchParams.get('genre');
    const status = searchParams.get('status');
    const prototypes = searchParams.get('prototypes');
    const tag = searchParams.get('tag');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const keyword = searchParams.get('keyword');

    const tags = [...datas.characters, ...datas.backGrg, ...datas.sects, ...datas.sights];

    const listRequest = { sort_by, tag, genre, status, prototypes };

    // const indexItem = useRef();

    // console.log('datas:', datas);
    // console.log('dataKeys:', dataKeys);
    // console.log('data:', data);
    // console.log('listRequest:', listRequest);
    // console.log('search:', location.search);

    useEffect(() => {
        if (location.search) {
            const results = handlerSetDataWithPath(initdata, datas, listRequest, tags, location.search);
            setData(results);
        } else {
            setData(initdata);
        }
    }, [sort_by, genre, location.search]);

    const handlerAddItem = (idType, itemValue, itemIndex) => {
        const results = handlerSetDataLeftBar(idType, itemValue, data, dataKeys, listRequest);
        setData(results);
        handleLeftSideBarPath(idType, dataKeys, location, listRequest, tags, itemIndex, itemValue, setSearchParams);
        // handleLeftSideBarPath(
        //     idType,
        //     dataKeys,
        //     location,
        //     { ...listRequest, limit, page, keyword },
        //     tags,
        //     itemIndex,
        //     itemValue,
        //     setSearchParams,
        // );
    };

    // const handlerBtnSearch = () => {
    //     handleLeftSideBarPath(idType, dataKeys, location, listRequest, tags, itemIndex, itemValue, setSearchParams);
    // };

    const handleDelete = (id, itemValue) => {
        setData((prev) => {
            const newData = [...prev.selected];
            newData.splice(id, 1);
            return {
                ...prev,
                selected: newData,
            };
        });

        if (location.search) {
            handleDeletePath(id, itemValue, data, listRequest, setSearchParams);
        }
    };

    const handleActive = (item) => {
        let isActive = false;
        if (data.selected.includes(item)) {
            return (isActive = true);
        }
    };

    return (
        <div className={cx('left-wrapper')}>
            <div className={cx('list', { ['selected']: true })}>
                <h4>
                    <span>Đã chọn</span>
                </h4>
                <div className={cx('content')}>
                    {!!data.selected.length &&
                        data.selected.map((item, index) => (
                            <div key={index} className={cx('item')}>
                                <div className={cx('link', { ['selected']: true })}>
                                    <span className={cx('btn')}>{item}</span>
                                    <button onClick={() => handleDelete(index, item)} className={cx('delete')}>
                                        <i className="nh-icon icon-close"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                {/* {!!data.selected.length && (
                    <div className={cx('search')}>
                        <button className={cx('search-btn')} onClick={handlerBtnSearch}>
                            <span className={cx('icon-search')}>
                                <i className="nh-icon icon-search"></i>
                            </span>
                        </button>
                    </div>
                )} */}
            </div>

            {Object.entries(datas).map((data, index) => {
                return (
                    <ListLeftSideBar
                        key={index}
                        data={data}
                        listTitle={listTitle}
                        idType={index}
                        onClick={handlerAddItem}
                        onActive={handleActive}
                    />
                );
            })}
        </div>
    );
}

export default LeftSideBar;
