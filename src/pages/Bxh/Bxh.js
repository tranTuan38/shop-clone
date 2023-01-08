import { useEffect, useState, memo } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Bxh.module.scss';
import NavBarLeft from '~/components/NavBarLeft';
import BxhContent from './BxhContent';
import { listRank } from '~/initdata';
import { handlerGetDataBxh } from '~/handler';

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
                <div className="row">
                    <div className="col c-3">
                        <NavBarLeft data={[navBarData]} page="bxh" />
                    </div>
                    <div className="col c-9">
                        <BxhContent bxhData={bxhTopNavData} mediaData={mediaData} icon={icon} type={pathType} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Bxh);
