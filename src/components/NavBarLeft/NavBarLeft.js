import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from './NavBarLeft.module.scss';
import { handlerSetPathNavBar } from '~/handler';

const cx = classNames.bind(styles);

function NavBarLeft({ data, page }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [listPath, userData] = data;

    const handlerNavigate = (e, link, hash) => {
        if (page === 'account') {
            if (hash !== location.hash) navigate(link);
            return;
        }

        if (page === 'bxh') {
            const changePath = handlerSetPathNavBar('class', link, location);
            navigate(changePath);
            return;
        }
    };

    return (
        <div className={cx('wrapper')}>
            {!!listPath.length && (
                <div className={cx('container')}>
                    {listPath.map((item, index) => {
                        let linkItem = item.path;

                        if (!item.hash && userData) {
                            linkItem = `${linkItem}${userData.id}`;
                        }

                        return (
                            <div
                                className={cx('item', {
                                    active: item.hash === location.hash || location.pathname.includes(item.path),
                                    [page]: page,
                                })}
                                key={index}
                            >
                                <button
                                    className={cx('btn')}
                                    onClick={(e) => {
                                        if (page === 'account') handlerNavigate(e, linkItem, item.hash);
                                        if (page === 'bxh') handlerNavigate(e, linkItem);
                                    }}
                                >
                                    <i className={`nh-icon ${item.icon}`}></i>
                                    {item.key || item.title}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default memo(NavBarLeft);
