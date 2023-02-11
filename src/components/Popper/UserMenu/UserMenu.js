import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import styles from './UserMenu.module.scss';
import { memo, useEffect } from 'react';
import { iconFeel } from '~/assets/Icon-feels';
import { actions } from '~/components/store';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

function UserMenu({ data, onClick }) {
    const [userData, listPath] = data;
    const navigate = useNavigate();
    const location = useLocation();

    const handlerHidePopper = (e, link, type) => {
        e.preventDefault();
        e.target.offsetParent.parentNode._tippy.hide();
        if (type) {
            navigate(link, { state: { name: type } });
        } else {
            navigate(link);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('media')}>
                    <div className={cx('user-avatar')}>
                        <img alt={userData.name} src={userData.avatar} />
                    </div>
                    <div className={cx('media-body')}>
                        <span className={cx('user-name')}>{userData.name}</span>
                        <div className={cx('list-icon')}>
                            <span className={cx('icon')}>
                                <i style={{ backgroundImage: `url(${iconFeel.flower})` }}></i>
                                <Link
                                    to="/account/#asset"
                                    onClick={(e) => handlerHidePopper(e, '/account/#asset', 'flower')}
                                >
                                    0
                                </Link>
                            </span>
                            <span className={cx('icon')}>
                                <i style={{ backgroundImage: `url(${iconFeel.candy})` }}></i>
                                <Link
                                    to="/account/#asset"
                                    onClick={(e) => handlerHidePopper(e, '/account/#asset', 'candy')}
                                >
                                    0
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('list-menu')}>
                    {listPath.map((item, index) => {
                        let pathItem = item.path;
                        if (!index) {
                            pathItem = `${item.path}${userData.id}`;
                        }

                        return (
                            <div className={cx('item')} key={index}>
                                <Link
                                    to={pathItem}
                                    className={cx('item-link')}
                                    onClick={(e) => handlerHidePopper(e, pathItem)}
                                >
                                    {item.key}
                                </Link>
                            </div>
                        );
                    })}
                    <hr></hr>

                    <div className={cx('item')}>
                        <span
                            id="out"
                            className={cx('item-link')}
                            onClick={() => {
                                onClick(actions.setUserLogout());
                                toastReact(1, 'Thành công', 'Đăng xuất thành công.');
                                if (location.pathname !== '/') navigate('/');
                            }}
                        >
                            Thoát
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(UserMenu);
