import PropTypes from 'prop-types';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useGetCategory } from '~/hooks';
import imgs from '~/assets/imgs';
import Img from '~/components/Img';
import styles from './Header.module.scss';
import listRank from '~/initdata/listRank';
import { HeaderPopper } from '~/components/Popper';
import { CategoryMenu, RankMenu } from '~/components/Popper/Menu';
import Search from '../Search';
import NavPopup from '~/components/NavPopup';

const cx = classNames.bind(styles);

function Header() {
    const [category, setCategory] = useGetCategory();
    let [searchParams, setSearchParams] = useSearchParams();
    const [formName, setFormName] = useState('');
    const { pathname, search } = useLocation();

    const id = searchParams.get('id');
    const { logo, noImg } = imgs;

    const handleOpenSignIn = () => {
        setFormName('SignIn');
    };

    const handleOpenRegis = () => {
        setFormName('Regis');
    };

    const handleClose = () => {
        setFormName('');
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className="grid wide height-100">
                    <div className={cx('container')}>
                        <Img href="/" src={logo} alt={noImg} className={'logo'} />

                        <div className={cx('nav')}>
                            <HeaderPopper
                                name="menu"
                                navName="category-menu"
                                navItem="category-item"
                                data={category}
                                id={id}
                                trigger="click mouseenter"
                                placement="top-end"
                                offset={[0, 0]}
                                pathname={pathname}
                                search={search}
                                TypeMenu={CategoryMenu}
                            >
                                <div className={cx('nav-item', { ['nav-left']: true })}>
                                    <span className={cx('icon')}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </span>
                                    <span>Thể loại</span>
                                </div>
                            </HeaderPopper>

                            <HeaderPopper
                                name="menu"
                                navName="rank-menu"
                                navItem="rank-item"
                                data={listRank}
                                id={id}
                                trigger="mouseenter"
                                placement="top-start"
                                offset={[0, 0]}
                                pathname={pathname}
                                search={search}
                                TypeMenu={RankMenu}
                            >
                                <div className={cx('nav-item', { ['nav-left']: true })}>
                                    <Link to="/bxh">
                                        <span>Bảng xếp hạng</span>
                                    </Link>
                                </div>
                            </HeaderPopper>
                        </div>

                        <Search className={'search'} icon={faMagnifyingGlass} />

                        <div className={cx('nav')}>
                            <div className={cx('nav-right')}>
                                <a href="javascript:void(0)">
                                    <span className={cx('icon')}>
                                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                                    </span>
                                    <span>Đăng truyện</span>
                                </a>
                            </div>

                            <NavPopup
                                className={cx('nav-item')}
                                closeOnDocumentClick={false}
                                formName={formName}
                                onOpen={handleOpenSignIn}
                                onClose={handleClose}
                                item={<button className={cx('login')}>Đăng nhập</button>}
                            />

                            <NavPopup
                                className={cx('nav-item')}
                                closeOnDocumentClick={false}
                                formName={formName}
                                onOpen={handleOpenRegis}
                                onClose={handleClose}
                                item={<button className={cx('regis')}>Đăng ký</button>}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
