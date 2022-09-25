import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Rank({ navItem, data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => {
                return (
                    <div key={index} className={cx(navItem)}>
                        <NavLink
                            className={(nav) => {
                                return cx('menu-link', {
                                    active: nav.isActive,
                                });
                            }}
                            to={`/bxh/tuan/${item.path}`}
                        >
                            <span>{item.title}</span>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default Rank;
