import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import styles from '~/layouts/component/SideBar/SideBar.module.scss';
import { TopSideBarPopper } from '~/components/Popper';
import { TopSideBarMenu } from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function ListTopSideBar({
    data,
    type,
    check,
    pathname,
    search,
    onSetTitle,
    onSetPath,
    listRequest,
    location,
    onSetSearch,
    onSetActive,
    funcEmpty,
}) {
    const [title, setTitle] = useState(data.title);

    const handlerSetTitle = (newTitle) => {
        setTitle(newTitle);
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
                    onSetPath={onSetPath}
                    listRequest={listRequest}
                    onSetSearch={onSetSearch}
                    location={location}
                    onSetActive={onSetActive}
                >
                    <h4
                        className={cx('h4', {
                            ['h4-active']: onSetActive(type, data.search, data, listRequest, location),
                            children: true,
                        })}
                    >
                        <span className={cx('title', { ['ml-8']: !!data.children })}>
                            {onSetTitle(title, check, data, location, listRequest)}
                        </span>
                    </h4>
                </TopSideBarPopper>
            ) : (
                <h4
                    className={cx('h4', {
                        ['h4-active']: onSetActive(type, data.search, data, listRequest, location),
                        notChildren: !data.children,
                    })}
                >
                    <button
                        onClick={
                            onSetActive(type, data.search, data, listRequest, location)
                                ? funcEmpty
                                : () => onSetPath(type, data.search, data, listRequest, location, onSetSearch)
                        }
                        className={cx('title', { ['ml-8']: !!data.children })}
                    >
                        {title}
                    </button>
                </h4>
            )}
        </div>
    );
}

export default ListTopSideBar;
