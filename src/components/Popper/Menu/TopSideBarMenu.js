import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from '~/layouts/component/SideBar/SideBar.module.scss';

const cx = classNames.bind(styles);

function TopSideBarMenu({
    data,
    onClick,
    type,
    check,
    pathname,
    search,
    onSetPath,
    onSetSearch,
    location,
    listRequest,
    onSetActive,
    funcEmpty,
}) {
    // console.log(data);
    return (
        <div className={cx('inner')}>
            {data.children.map((item, index) => (
                <div
                    key={index}
                    className={cx('nav-item', {
                        ['active']: onSetActive(type, data.search[index], data, listRequest, location, index),
                    })}
                >
                    <button
                        className={cx('nav-link')}
                        onClick={
                            onSetActive(type, data.search[index], data, listRequest, location, index)
                                ? funcEmpty
                                : () => {
                                      onClick(item);
                                      onSetPath(type, data.search[index], data, listRequest, location, onSetSearch);
                                  }
                        }
                    >
                        {item}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TopSideBarMenu;
