import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import styles from '~/layouts/component/SideBar/SideBar.module.scss';
import { TopSideBarPopper } from '~/components/Popper';
import { TopSideBarMenu } from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function ListTopSideBar({ data, type, check, pathname, search, onSetTitle }) {
    const [title, setTitle] = useState(data.title);

    const handlerSetTitle = (title) => {
        setTitle(title);
    };

    return (
        <div className={cx('list', { [type]: type })}>
            {data.children ? (
                <TopSideBarPopper
                    check={check}
                    navName={cx('nav-side-bar')}
                    trigger="click"
                    placement="bottom-end"
                    offset={[21, 0]}
                    TypeMenu={TopSideBarMenu}
                    data={data}
                    arrow={cx('top-side-bar-arrow')}
                    isArrow={false}
                    onClick={handlerSetTitle}
                    pathname={pathname}
                    search={search}
                    type={type}
                >
                    <h4
                        className={cx('h4', {
                            ['h4-active']: data.search.includes(check) || (type == 'update' && !search),
                            children: true,
                        })}
                    >
                        <span className={cx('title', { ['ml-8']: !!data.children })}>{onSetTitle(check, data)}</span>
                    </h4>
                </TopSideBarPopper>
            ) : (
                <h4 className={cx('h4', { ['h4-active']: data.search === check, notChildren: true })}>
                    <Link
                        to={`/list-book/?sort_by=${data.search}`}
                        className={cx('title', { ['ml-8']: !!data.children })}
                    >
                        {title}
                    </Link>
                </h4>
            )}
        </div>
    );
}

export default ListTopSideBar;
