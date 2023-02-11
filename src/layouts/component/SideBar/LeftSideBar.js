import classNames from 'classnames/bind';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useGetListSelecter } from '~/hooks';
import { handlerSetDataLeftBar, handlerSetDataWithPath, handleLeftSideBarPath, handleDeletePath } from '~/handler';
import styles from './SideBar.module.scss';
import { ListLeftSideBar } from '~/components/ListSideBar';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

const initData = {
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
    const [data, setData] = useState(initData);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
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
        if (keyword) {
            setData({ ...initData, selected: [`Đang tìm: ${keyword}`] });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword]);
    // console.log(location);

    useEffect(() => {
        if (location.search) {
            const results = handlerSetDataWithPath(initData, datas, listRequest, tags, location.search, keyword);
            setData(results);
        } else {
            setData(initData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sort_by, genre, location.search]);

    const handlerAddItem = (idType, itemValue, itemIndex) => {
        const results = handlerSetDataLeftBar(idType, itemValue, data, dataKeys, listRequest);
        setData(results);
        handleLeftSideBarPath(
            idType,
            dataKeys,
            location,
            listRequest,
            tags,
            itemIndex,
            itemValue,
            setSearchParams,
            keyword,
        );
    };

    const handleDelete = (id, itemValue, isKeyword) => {
        // setData((prev) => {
        //     const newData = [...prev.selected];
        //     newData.splice(id, 1);
        //     return {
        //         ...prev,
        //         selected: newData,
        //     };
        // });

        if (isKeyword) {
            const enCodeKeyword = encodeURI(keyword.replaceAll(' ', '+'));
            if (location.search === `?keyword=${enCodeKeyword}`) {
                navigate('/list-book/?sort_by=new_chap_at');
            } else {
                const linkChange = location.search.replace(`&keyword=${enCodeKeyword}`, '');
                navigate(linkChange);
            }
            return;
        }
        handleDeletePath(id, itemValue, data, listRequest, setSearchParams, keyword);
    };

    const handleActive = (item) => {
        let isActive = false;
        if (data.selected.includes(item)) {
            return (isActive = true);
        }
    };

    return (
        <div className={cx('left-wrapper')}>
            <div className={cx('list', { selected: true })}>
                <h4>
                    <span>Đã chọn</span>
                </h4>
                <div className={cx('content')}>
                    {!!data.selected?.length &&
                        data.selected.map((item, index) => {
                            const isKeyword = item.includes(`Đang tìm: ${keyword}`);

                            return (
                                <div key={item} className={cx('item')}>
                                    <div
                                        className={cx('link', {
                                            selected: true,
                                            ['search-active']: isKeyword,
                                        })}
                                    >
                                        <span className={cx('btn')}>{item}</span>
                                        <button
                                            onClick={() => handleDelete(index, item, isKeyword)}
                                            className={cx('delete')}
                                        >
                                            <i className="nh-icon icon-close"></i>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
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
