import { useEffect, useState, memo } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Bxh.module.scss';
import NavBarLeft from '~/components/NavBarLeft';
import BxhContent from './BxhContent';
import { listRank } from '~/initdata';
import { handlerGetDataBxh } from '~/handler';
import { useViewport } from '~/hooks';

const cx = classNames.bind(styles);

const bxhTopNavData = [
    { title: 'Theo ngày', path: 'day' },
    { title: 'Theo tuần', path: 'week' },
    { title: 'Theo tháng', path: 'month' },
];

function Bxh() {
    const location = useLocation();
    const [navBarData, setNavBarData] = useState([]);
    const [mediaData, setMediaData] = useState([]);
    const [icon, setIcon] = useState('');
    const [pathType, setPathType] = useState('');
    const viewPort = useViewport();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        setNavBarData([...listRank]);
        const pathData = listRank.find((item) => location.pathname.includes(item.path));
        if (pathData) {
            const data = handlerGetDataBxh(pathData.path);
            setMediaData(data);
            setIcon(pathData.icon);
            setPathType(pathData.path);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.title = 'Bảng Xếp Hạng Truyện Convert';

        if (navBarData.length) {
            const pathData = navBarData.find((item) => location.pathname.includes(item.path));
            if (pathData) {
                const data = handlerGetDataBxh(pathData.path);
                setMediaData(data);
                setIcon(pathData.icon);
                setPathType(pathData.path);
            }
        }

        // console.log(navBarData);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    // console.log(mediaData);
    // console.log(icon);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className="row no-gutters" style={!viewPort ? {} : { paddingLeft: '80px' }}>
                    <div
                        className="col l-3 m-3 c-0"
                        style={
                            !viewPort
                                ? {}
                                : {
                                      display: 'block',
                                      position: 'absolute',
                                      left: '0',
                                      width: '80px',
                                      top: '45px',
                                      bottom: '0',
                                      backgroundColor: '#f5f5f5',
                                  }
                        }
                    >
                        <NavBarLeft data={[navBarData]} page="bxh" />
                    </div>
                    <div
                        className="col l-9 m-9 c-12"
                        style={!viewPort ? {} : { padding: '4px 12px', minHeight: '500px' }}
                    >
                        <BxhContent
                            bxhData={bxhTopNavData}
                            mediaData={mediaData}
                            icon={icon}
                            type={pathType}
                            viewPort={viewPort}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Bxh);
