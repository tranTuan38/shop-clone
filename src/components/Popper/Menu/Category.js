import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Category({ navItem, pathname, search, data, id }) {
    return (
        <>
            <div className="row no-gutters">
                <div className="c-6 d-flex w-100">
                    <div className={cx(navItem)}>
                        <NavLink
                            className={(nav) => {
                                return cx('menu-link', {
                                    active: pathname === '/list-book/' && !search ? true : false,
                                });
                            }}
                            end={true}
                            to={`/list-book/`}
                        >
                            <span>Tất cả</span>
                        </NavLink>
                    </div>
                </div>
                {data.map((item, index) => {
                    return (
                        <div className="c-6 d-flex w-100" key={index}>
                            <div className={cx(navItem)}>
                                <NavLink
                                    className={(nav) => {
                                        return cx('menu-link', {
                                            active: index == id ? true : false,
                                        });
                                    }}
                                    to={`/list-book/?genre=${index}`}
                                >
                                    <span>{item[0]}</span>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Category;
