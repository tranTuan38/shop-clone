import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({
    data,
    id,
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
}) {
    return (
        <div className={cx('content')}>
            <Tippy
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
                            name={name}
                            navName={navName}
                            navItem={navItem}
                            pathname={pathname}
                            search={search}
                            data={data}
                            id={id}
                        />
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Popper;
