import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';

import styles from '~/layouts/component/SideBar/SideBar.module.scss';

const cx = classNames.bind(styles);

function TopSideBarMenu({ data, onClick, type, check, pathname, search }) {
    return (
        <div className={cx('inner')}>
            {data.children.map((item, index) => (
                <div
                    key={index}
                    className={cx('nav-item', {
                        ['active']:
                            check === data.search[index] ||
                            (index == 0 && type == 'update' && pathname == '/list-book/' && !search),
                    })}
                >
                    <Link
                        to={`/list-book/?sort_by=${data.search[index]}`}
                        className={cx('nav-link')}
                        onClick={() => onClick(item)}
                    >
                        {item}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TopSideBarMenu;
