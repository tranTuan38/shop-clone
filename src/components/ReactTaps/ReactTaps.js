import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './ReactTaps.module.scss';
import Loading from '~/components/Loading';
import { getListBookServices } from '~/services';

const cx = classNames.bind(styles);

function ReactTaps({ data, isLoading, listClass = {}, forceRenderTabPanel = false }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [datasTapsList, setDatasTapsList] = useState([]);
    const [datasTapsPanel, setDatasTapsPanel] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const { tapsPanel: PanelComponent, tapsTitle, type, tapsIcon, iconLink } = data;
    const { wrapperClass, containerClass, tapsClass, tapsListClass, tapsPaneClass, tapClass } = listClass;

    // console.log(location);

    const handlerSetNavigateIcon = (e) => {
        if (iconLink) navigate(iconLink);
    };

    useEffect(() => {
        const asyncListData = async () => {
            setTabIndex((prev) => {
                if (location.state) {
                    const indexType = type.findIndex((item) => item === location.state.name);

                    if (Number.isInteger(indexType)) {
                        return indexType;
                    }
                }

                return 0;
            });
            setDatasTapsList(tapsTitle);
            setLoading(true);
            const result = await getListBookServices(type, 'taps', 500);
            setDatasTapsPanel(result);
            setLoading(false);
        };

        asyncListData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, location.state]);

    return (
        <div className={cx('wrapper', { [wrapperClass]: wrapperClass })}>
            <div className={cx('container', { [containerClass]: containerClass })}>
                <Tabs
                    className={cx('content', { [tapsClass]: tapsClass })}
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    forceRenderTabPanel={forceRenderTabPanel}
                >
                    <div className={cx('list-content', { ['once']: datasTapsList.length === 1 })}>
                        <TabList className={cx('list', { [tapsListClass]: tapsListClass })}>
                            {datasTapsList.map((taps, index) => {
                                return (
                                    <Tab
                                        className={cx('item', {
                                            [tapClass]: tapClass,
                                            active: index === tabIndex,
                                            ['no-active']: datasTapsList.length === 1,
                                        })}
                                        key={index}
                                    >
                                        {taps}
                                    </Tab>
                                );
                            })}
                        </TabList>
                        {!!tapsIcon && (
                            <span className={cx('icon')} onClick={handlerSetNavigateIcon}>
                                <i className={`nh-icon ${tapsIcon}`}></i>
                            </span>
                        )}
                    </div>

                    {isLoading && loading && <Loading wrapperStyle={{ marginTop: '20px' }} />}

                    {loading &&
                        datasTapsList.map((tapsPanel, index) => {
                            return (
                                <TabPanel
                                    key={index}
                                    className={cx('panel', {
                                        [tapsPaneClass]: tapsPaneClass,
                                        none: true,
                                    })}
                                ></TabPanel>
                            );
                        })}

                    {!loading &&
                        datasTapsPanel.map((tapsPanel, index) => {
                            return (
                                <TabPanel
                                    key={index}
                                    className={cx('panel', {
                                        [tapsPaneClass]: tapsPaneClass,
                                        active: index === tabIndex,
                                    })}
                                >
                                    <div className={cx('item-content')}>
                                        <PanelComponent type={tapsPanel} />
                                    </div>
                                </TabPanel>
                            );
                        })}
                </Tabs>
            </div>
        </div>
    );
}

export default memo(ReactTaps);
