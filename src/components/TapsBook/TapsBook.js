import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import classNames from 'classnames/bind';
import { useEffect, useState, memo } from 'react';

import { Intro, Review, Chap, Comment, Fan } from './Taps';
import styles from './TapsBook.module.scss';
import { handleTime, handlerGetBookMediaData, getListRatingForBook, SetPersonRatingForBook } from '~/handler';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

const listTaps = {
    tapKeys: ['intro', 'review', 'chap', 'comment', 'fan'],
    titles: ['Giới thiệu', 'Đánh giá', 'D.s chương', 'Bình luận', 'Hâm mộ'],
    components: [Intro, Review, Chap, Comment, Fan],
};

function TapsBook({ data, listBookData, nameSearch, rating, userData, listComment }) {
    const [firstRender, setFirstRender] = useState(0);
    const [num, setNum] = useState(0);
    const [curBook, setCurBook] = useState();
    const [listData, setListData] = useState({ tapKeys: [], titles: [], components: [] });

    const { listInfo, setRating, setRate, rateUser, totalNumberUser, getCommentById } = handlerGetBookMediaData(
        rating,
        listComment,
        userData,
    );

    const handlerSetSubItem = (type) => {
        if (type === 1) {
            return totalNumberUser(data.idBook);
        } else if (type === 2) {
            return data.listChapter.length;
        } else if (type === 3) {
            return getCommentById(data.idBook).length;
        }
    };

    useEffect(() => {
        if (nameSearch !== curBook) {
            setNum(0);
            setCurBook(nameSearch);
            setFirstRender(0);
        }

        if (!firstRender) {
            setListData({ ...listTaps });
            setFirstRender(firstRender + 1);
            setCurBook(nameSearch);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nameSearch, curBook]);

    return (
        <div className={cx('taps-book')}>
            <Tabs
                defaultIndex={num}
                onSelect={(index) => {
                    setNum(index);
                }}
                className={cx('tabs')}
                forceRenderTabPanel={true}
            >
                <TabList className={cx('list')}>
                    {!!listData.titles &&
                        listData.titles.map((title, index) => {
                            return (
                                <Tab key={index} className={cx('item', { ['active']: index === num })}>
                                    {title}
                                    {!!index && index !== 4 && (
                                        <span className={cx('sub-item')}>{handlerSetSubItem(index) || 0}</span>
                                    )}
                                </Tab>
                            );
                        })}
                </TabList>
                <div className={cx('panel-list')}>
                    {!!listData.components.length &&
                        listData.components.map((component, index) => {
                            const TabContent = component;
                            let props = { checkTapsIndex: num === index };

                            if (index === 1) {
                                props = {
                                    ...props,
                                    listRating: rating,
                                    userData,
                                    setRating,
                                    setRate,
                                    totalNumberUser,
                                    setListRating: getListRatingForBook,
                                    setPerson: SetPersonRatingForBook,
                                    setTime: handleTime,
                                };
                            } else if (index === 2) {
                                props = { ...props };
                            } else if (index === 3) {
                                props = { ...props, listDataCmt: getCommentById(data.idBook), c4Data: imgs.imgAdver };
                            }
                            return (
                                <TabPanel
                                    key={index}
                                    className={cx('content', {
                                        [listData.tapKeys[index]]: index || !index,
                                        ['active']: index === num,
                                    })}
                                >
                                    <TabContent
                                        data={data}
                                        nameSearch={nameSearch}
                                        listBookData={listBookData}
                                        {...props}
                                        className={cx('none', { active: index === num })}
                                    />
                                </TabPanel>
                            );
                        })}
                </div>
            </Tabs>
        </div>
    );
}

export default memo(TapsBook);
