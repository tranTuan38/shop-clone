import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './BxhMenu.module.scss';
import { memo, useEffect, useState } from 'react';
import { handlerSetPathNavBar } from '~/handler';

const cx = classNames.bind(styles);

function BxhMenu({ navItem, data }) {
    const [listData, setListData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const handlerClickBtn = (e, path) => {
        if (!pathname.includes(path)) {
            const pathChange = handlerSetPathNavBar('time', path, location);
            e.target.offsetParent.parentNode._tippy.hide();
            navigate(pathChange);

            return;
        }

        e.target.offsetParent.parentNode._tippy.hide();
    };

    useEffect(() => {
        setListData(data);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {listData.map((item, index) => {
                    return (
                        <button
                            key={index}
                            className={cx('btn', { active: pathname.includes(item.path) })}
                            onClick={(e) => handlerClickBtn(e, item.path)}
                        >
                            {item.title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(BxhMenu);
