import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useGetCategory } from '~/hooks';
import imgs from '~/assets/imgs';
import Img from '~/components/Img';
import styles from './Header.module.scss';
import { listDataPath, listRank } from '~/initdata';
import { HeaderPopper } from '~/components/Popper';
import { CategoryMenu, RankMenu } from '~/components/Popper/Menu';
import { NoticeMenu, UserMenu } from '~/components/Popper';
import Search from '../Search';
import NavPopup from '~/components/NavPopup';
import { useStore } from '~/hooks';
import { handlerGetUserDataLogin } from '~/handler';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [userData, setUserData] = useState({});
    const [state, dispatch] = useStore();
    const { userEmail, userPassword, login } = state;
    const [category, setCategory] = useGetCategory();
    let [searchParams, setSearchParams] = useSearchParams();
    const { pathname, search } = useLocation();

    let genreId;
    const genre = searchParams.get('genre');

    if (genre) {
        genreId = Number(genre);
    } else {
        genreId = undefined;
    }

    const { logo, noImg } = imgs;

    // console.log(123);

    const handlerOnShowMenu = (show) => {
        show.reference.classList.add(cx('show'));
    };

    const handlerOnHideMenu = (hide) => {
        hide.clearDelayTimeouts();
        hide.reference.classList.remove(cx('show'));
    };

    const handlerOnMount = (mount) => {
        console.log(mount);
    };

    useEffect(() => {
        if (login) {
            const loginData = handlerGetUserDataLogin({ userEmail, userPassword });
            setUserData(loginData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);

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
                                genre={genreId}
                                trigger="mouseenter"
                                placement="top-end"
                                offset={[0, 0]}
                                pathname={pathname}
                                search={search}
                                TypeMenu={CategoryMenu}
                                isArrow={true}
                            >
                                <div className={cx('nav-item', { ['nav-left']: true })}>
                                    <span className={cx('icon')}>
                                        <i className="nh-icon icon-menu"></i>
                                    </span>
                                    <span>Thể loại</span>
                                </div>
                            </HeaderPopper>

                            <HeaderPopper
                                name="menu"
                                navName="rank-menu"
                                navItem="rank-item"
                                data={listRank}
                                genre={genreId}
                                trigger="mouseenter"
                                placement="top-start"
                                offset={[0, 0]}
                                pathname={pathname}
                                search={search}
                                TypeMenu={RankMenu}
                                isArrow={true}
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
                                <a
                                    className={cx('icon', { login: login })}
                                    href="https://pub.truyen.onl/books/create"
                                    style={login ? { padding: '24px 16px', fontSize: '1.5rem', fontWeight: '600' } : {}}
                                >
                                    <i className="nh-icon icon-up" style={login ? { fontSize: '2rem' } : {}}></i>
                                    <span>Đăng truyện</span>
                                </a>
                            </div>

                            {!login && (
                                <>
                                    <NavPopup
                                        className={cx('nav-item')}
                                        closeOnDocumentClick={false}
                                        formName={'login'}
                                        overlayStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.4)',
                                            alignItems: 'center',
                                            transition: 'opacity .15s linear',
                                            overFlow: 'hidden',
                                        }}
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                        item={<button className={cx('login')}>Đăng nhập</button>}
                                    />

                                    <NavPopup
                                        className={cx('nav-item')}
                                        closeOnDocumentClick={false}
                                        formName={'regis'}
                                        overlayStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.4)',
                                            alignItems: 'center',
                                            transition: 'opacity .15s linear',
                                            overFlow: 'hidden',
                                        }}
                                        contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                                        item={<button className={cx('regis')}>Đăng ký</button>}
                                    />
                                </>
                            )}

                            {login && userData.id && (
                                <>
                                    <HeaderPopper
                                        name="menu"
                                        navName="notice-menu"
                                        navItem="notice-item"
                                        data={[]}
                                        trigger="click"
                                        placement="bottom-start"
                                        offset={[129, 0]}
                                        pathname={pathname}
                                        search={search}
                                        TypeMenu={NoticeMenu}
                                        onShow={handlerOnShowMenu}
                                        onHide={handlerOnHideMenu}
                                    >
                                        <button className={cx('notice')}>
                                            <i className="nh-icon icon-bell"></i>
                                        </button>
                                    </HeaderPopper>
                                    <HeaderPopper
                                        name="menu"
                                        navName="user-menu"
                                        navItem="user-item"
                                        data={[userData, listDataPath]}
                                        trigger="click"
                                        placement="bottom-end"
                                        offset={[0, 0]}
                                        pathname={pathname}
                                        search={search}
                                        TypeMenu={UserMenu}
                                        onShow={handlerOnShowMenu}
                                        onHide={handlerOnHideMenu}
                                        onClick={dispatch}
                                    >
                                        <button className={cx('user')}>
                                            <span className={cx('avatar')}>
                                                <img
                                                    alt={userData.name}
                                                    src={userData.avatar}
                                                    className={cx('user-avatar')}
                                                />
                                            </span>
                                            <span className={cx('user-name')}>{userData.name}</span>
                                        </button>
                                    </HeaderPopper>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default memo(Header);
