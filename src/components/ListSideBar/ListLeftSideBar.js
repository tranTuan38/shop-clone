import classNames from 'classnames/bind';
import { Link, useSearchParams } from 'react-router-dom';

import styles from '~/layouts/component/SideBar/SideBar.module.scss';

const cx = classNames.bind(styles);

function ListLeftSideBar({ data, listTitle, idType, onClick, onActive }) {
    const hollowFnc = () => {};

    return (
        <div className={cx('list', { [data[0]]: data[0] })}>
            <h4>
                <span>{listTitle[idType]}</span>
            </h4>
            <div className={cx('content')}>
                {data[1].map((item, index) => (
                    <div key={index} className={cx('item')}>
                        <button
                            onClick={() => (onActive(item) ? hollowFnc() : onClick(idType, item, index))}
                            className={cx('link', { ['active']: onActive(item) })}
                        >
                            {item}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListLeftSideBar;
