import classNames from 'classnames/bind';

import styles from './Account.module.scss';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listDataPath } from '~/initdata';
import NavBarLeft from '~/components/NavBarLeft';
import { useStore } from '~/hooks';
import { handlerGetUserDataLogin } from '~/handler';
import ReactTaps from '~/components/ReactTaps';
import { listTapsData } from '~/initdata';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Account() {
    const location = useLocation();
    const [navBarData, setNavBarData] = useState([]);
    const [userData, setUserData] = useState({});
    const [tapsData, setTapsData] = useState({});
    const [state] = useStore();
    const { userEmail, userPassword } = state;

    useEffect(() => {
        const pageTitleIndex = listDataPath.findIndex((item) => item.hash === location.hash);
        if (pageTitleIndex) {
            document.title = listDataPath[pageTitleIndex].key;
        }
    }, [location.hash]);

    useEffect(() => {
        const taps = listTapsData.find((item) => item.hash === location.hash);
        if (taps) {
            setTapsData(taps);
        }
    }, [location.hash]);

    useEffect(() => {
        setNavBarData(listDataPath);
        const loginData = handlerGetUserDataLogin({ userEmail, userPassword });
        setUserData(loginData);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log(location);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className="row">
                    <div className="col l-3 m-0 c-0">
                        <NavBarLeft data={[navBarData, userData]} page="account" />
                    </div>
                    <div className="col l-9 m-12 c-12">
                        {tapsData.hash === location.hash && (
                            <ReactTaps data={tapsData} isLoading={true} forceRenderTabPanel={true} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Account);
