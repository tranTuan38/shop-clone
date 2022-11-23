import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Popper.module.scss';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Popper({
    data,
    genre,
    name,
    navName,
    navItem,
    trigger,
    interactive = true,
    placement,
    offset,
    pathname,
    search,
    TypeMenu,
    children,
    arrow,
    isArrow,
    onClick,
    check,
    type,
    onSetPath,
    listRequest,
    prevListRequest,
    prevSearch,
    onSetSearch,
    location,
    onSetTitle,
    onSetActive,
    funcEmpty,
    onShow,
    onHide,
}) {
    return (
        <div className={cx('content')}>
            <Tippy
                onHide={onHide}
                onShow={onShow}
                arrow={isArrow}
                trigger={trigger}
                interactive={interactive}
                placement={placement}
                offset={offset}
                render={(attrs) => (
                    <div
                        id="tooltip"
                        className={cx(name, {
                            [navName]: navName,
                        })}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <TypeMenu
                            check={check}
                            name={name}
                            navName={navName}
                            navItem={navItem}
                            pathname={pathname}
                            search={search}
                            data={data}
                            genre={genre}
                            onClick={onClick}
                            type={type}
                            onSetPath={onSetPath}
                            listRequest={listRequest}
                            prevListRequest={prevListRequest}
                            prevSearch={prevSearch}
                            onSetSearch={onSetSearch}
                            location={location}
                            onSetActive={onSetActive}
                            funcEmpty={funcEmpty}
                        />
                        {isArrow && <div id="arrow" className={`${cx('arror')} ${arrow}`} data-popper-arrow></div>}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default memo(Popper);
