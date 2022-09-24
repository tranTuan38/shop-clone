import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link, NavLink } from 'react-router-dom';
import { useParams, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useGetCategory } from '~/hooks';
import imgs from '~/assets/imgs';
import styles from './Header.module.scss';
import listTime from '~/initdata/listTime';
import listRank from '~/initdata/listRank';
import ModalContainer from '~/components/ModalContainer';

const cx = classNames.bind(styles);

function Header() {
    const [category, setCategory] = useGetCategory();
    let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [formName, setFormName] = useState('');

    const handleOpenSignIn = () => {
        setFormName('SignIn');
    };

    const handleOpenRegis = () => {
        setFormName('Regis');
    };

    const handleClose = () => {
        setFormName('');
    };

    const styleDis = formName ? 'flex' : 'none';

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className="grid wide height-100">
                    <div className={cx('container')}>
                        <a href="/">
                            <img src={imgs.logo} alt={imgs.noImg} className={cx('logo')} />
                        </a>

                        <div className={cx('nav-left')}>
                            <div>
                                <Tippy
                                    trigger="click mouseenter"
                                    interactive
                                    placement="top-end"
                                    offset={[0, 0]}
                                    render={(attrs) => (
                                        <div id="tooltip" className={cx('category-menu')} tabIndex="-1" {...attrs}>
                                            <div className="row no-gutters">
                                                {category.map((item, index) => {
                                                    return (
                                                        <div className="c-6 d-flex w-100" key={index}>
                                                            <div className={cx('category-link')}>
                                                                <NavLink
                                                                    className={(nav) => {
                                                                        return cx('category-item', {
                                                                            active: index == id ? true : false,
                                                                        });
                                                                    }}
                                                                    end={!item[1]}
                                                                    to={`/list-book/?id=${index}`}
                                                                >
                                                                    <span>{item[0]}</span>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div id="arrow" data-popper-arrow></div>
                                        </div>
                                    )}
                                >
                                    <div className={cx('nav-left-item')}>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={faBars} />
                                        </span>
                                        <span>Thể loại</span>
                                    </div>
                                </Tippy>
                            </div>

                            <div>
                                <Tippy
                                    trigger="click mouseenter"
                                    interactive
                                    placement="top-start"
                                    offset={[0, 0]}
                                    render={(attrs) => (
                                        <div
                                            id="tooltip"
                                            className={cx('category-menu', {
                                                ['category-menu-2']: true,
                                            })}
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            {listRank.map((item, index) => {
                                                return (
                                                    <div key={index} className={cx('category-link')}>
                                                        <NavLink
                                                            className={(nav) => {
                                                                return cx('category-item', {
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
                                            <div id="arrow" data-popper-arrow></div>
                                        </div>
                                    )}
                                >
                                    <div className={cx('nav-left-item')}>
                                        <Link to="/bxh">
                                            <span>Bảng xếp hạng</span>
                                        </Link>
                                    </div>
                                </Tippy>
                            </div>
                        </div>

                        <div className={cx('search')}>
                            <input className={cx('input')} placeholder="Tìm kiếm" />
                            <Link to="/">
                                <button className={cx('btn')}>
                                    <span className={cx('btn-icon')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <div className={cx('nav-right')}>
                            <div className={cx('nav-right-item')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                                </span>
                                <span>Đăng truyện</span>
                            </div>

                            <div className={cx('nav-right-item')}>
                                <Popup
                                    closeOnDocumentClick={false}
                                    modal
                                    overlayStyle={{
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                        alignItems: 'center',
                                        transition: 'opacity .15s linear',
                                        overFlow: 'hidden',
                                        disPlay: { styleDis },
                                    }}
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                    trigger={<button className={cx('login')}>Đăng nhập</button>}
                                    onOpen={handleOpenSignIn}
                                    onClose={handleClose}
                                >
                                    {(close) => <ModalContainer formName={formName} close={close} />}
                                </Popup>
                            </div>
                            <div className={cx('nav-right-item')}>
                                <Popup
                                    closeOnDocumentClick={false}
                                    modal
                                    overlayStyle={{
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                        alignItems: 'center',
                                        transition: 'opacity .15s linear',
                                        overFlow: 'hidden',
                                        disPlay: { styleDis },
                                    }}
                                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                    trigger={<button className={cx('regis')}>Đăng ký</button>}
                                    onOpen={handleOpenRegis}
                                    onClose={handleClose}
                                >
                                    {(close) => <ModalContainer formName={formName} close={close} />}
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
