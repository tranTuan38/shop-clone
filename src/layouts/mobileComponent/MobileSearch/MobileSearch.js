import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useGetCategory } from '~/hooks';
import imgs from '~/assets/imgs';
import Img from '~/components/Img';
import styles from './MobileSearch.module.scss';
import { listDataPath, listRank, listDataPathMobiles } from '~/initdata';
import { HeaderPopper } from '~/components/Popper';
import { CategoryMenu, RankMenu } from '~/components/Popper/Menu';
import { NoticeMenu, UserMenu } from '~/components/Popper';
import Search from '~/layouts/component/Search';
import NavPopup from '~/components/NavPopup';
import { useStore } from '~/hooks';
import { memo } from 'react';
import Form from '~/components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileMenu from '../MobileMenu';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function MobileSearch({ headerProps = {}, headerClass }) {
    const [userData, setUserData] = useState({});
    const [state, dispatch] = useStore();
    const { login } = state;
    const [category] = useGetCategory();
    let [searchParams] = useSearchParams();
    const { pathname, search } = useLocation();
    const [show, setShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    let genreId;
    const genre = searchParams.get('genre');

    if (genre) {
        genreId = Number(genre);
    } else {
        genreId = undefined;
    }

    // console.log(login);

    const navMenuRef = useRef();

    const { logo, noImg } = imgs;

    const handlerOnShowMenu = (instance) => {
        instance.reference.classList.add(cx('show'));
    };

    const handlerOnHideMenu = (instance) => {
        instance.reference.classList.remove(cx('show'));
    };

    const handlerShowSearch = () => {
        setShow(!show);
        setShowIcon(false);

        if (showMenu) {
            // navMenuRef.current.hide();
            // setShowMenu(!showMenu);
            (async () => {
                await navMenuRef.current.hide();
                setShowMenu(false);
            })();
            return;
        }
        setShowMenu(false);
    };

    const handlerShowMenu = () => {
        setShowIcon(!showIcon);
        setShow(false);

        if (showMenu) {
            // navMenuRef.current.hide();
            // setShowMenu(!showMenu);
            (async () => {
                await navMenuRef?.current.hide();
                setShowMenu(!showMenu);
            })();
            return;
        }

        setShowMenu(!showMenu);
    };

    useLayoutEffect(() => {
        if (login) {
            const loginData = state.userData();
            setUserData(loginData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <div data-header-width className={cx('wrapper', { [headerClass]: headerClass })}>
            <header className={cx('header')} {...headerProps}>
                <div className={cx('header-wa')}>
                    <div className={cx('container')}>
                        <Img href="/" src={logo} alt={noImg} className={'logo'} />

                        <div className={cx('nav-right')}>
                            <div className={cx('search-btn', { active: show })}>
                                <button className={cx('icon')} onClick={handlerShowSearch}>
                                    {show ? (
                                        <i className="nh-icon icon-close" />
                                    ) : (
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    )}
                                </button>
                            </div>
                            <div className={cx('menu', { active: showIcon })}>
                                <button className={cx('icon')} onClick={handlerShowMenu}>
                                    {showIcon ? (
                                        <i className="nh-icon icon-close" />
                                    ) : (
                                        <i className="nh-icon icon-menu" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {show && (
                        <div className={cx('search-container')}>
                            <Search className={'search'} icon={faMagnifyingGlass} customClass={{}} />
                        </div>
                    )}
                </div>
            </header>
            {showMenu && (
                <MobileMenu
                    login={login}
                    ref={navMenuRef}
                    data={listDataPathMobiles[login]}
                    userData={userData}
                    dispatch={dispatch}
                    onClose={handlerShowMenu}
                />
            )}
        </div>
    );
}

export default memo(MobileSearch);
