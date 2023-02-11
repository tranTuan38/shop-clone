import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './MobileTapsBook.module.scss';

import { MobileInfo, MobileComment, MobileRate } from './MobileTapCom';

const cx = classNames.bind(styles);

const listTapsTitle = [
    { id: 0, title: 'Giới thiệu' },
    { id: 1, title: 'Đánh giá' },
    { id: 2, title: 'Bình luận' },
];

const listTapsContent = [
    { id: 0, content: MobileInfo },
    { id: 1, content: MobileRate },
    { id: 2, content: MobileComment },
];

function MobileTapsBook({ data, loginData }) {
    // console.log(data);
    // console.log(loginData);
    const [tapsDataTitle, setTapsDataTitle] = useState([]);
    const [tapsData, setTapsData] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        setTapsDataTitle(listTapsTitle);
        setTapsData(listTapsContent);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Tabs
                    selectedIndex={tabIndex}
                    selectedTabClassName={cx('taps-active')}
                    onSelect={(index) => setTabIndex(index)}
                    className={cx('taps-content')}
                >
                    <div className={cx('list-title')}>
                        <TabList className={cx('taps-list')}>
                            {tapsDataTitle.map((item, index) => (
                                <Tab key={item.id} className={cx('taps-title')}>
                                    {item.title}
                                </Tab>
                            ))}
                        </TabList>
                    </div>

                    {tapsData.map((item, index) => {
                        const TapComment = item.content;

                        return (
                            <TabPanel
                                key={item.id}
                                className={cx('taps-panel', { ['panel-active']: item.id === tabIndex })}
                            >
                                <TapComment data={data} loginData={loginData} />
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </div>
    );
}

export default memo(MobileTapsBook);
