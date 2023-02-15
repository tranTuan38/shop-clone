import classNames from 'classnames/bind';
import { Fragment, memo, useCallback, useEffect, useRef, useState } from 'react';

import { handlerGetSetting, handlerSetIconNavChap, handlerSaveBookMark } from '~/handler';
import { useStore, useViewport } from '~/hooks';
import styles from '../Chapter.module.scss';
import toastReact from '~/components/ToastMessages';
import { listThemes, listFontFamily } from '~/initdata';
import ActionLogin from '~/components/ActionLogin';
import Loading from '~/components/Loading';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const listSetting = [
    { id: 0, type: 'themes', title: 'Màu nền', icon: 'icon-color', customContent: [...listThemes], unit: undefined },
    {
        id: 1,
        type: 'fontFamily',
        title: 'Font chữ',
        icon: 'icon-font',
        customContent: [...listFontFamily],
        unit: undefined,
    },
    {
        id: 2,
        type: 'fontSize',
        title: 'Cỡ chữ',
        icon: 'icon-size',
        customContent: undefined,
        unit: 'px',
        min: 14,
        max: 30,
        step: 1,
    },
    {
        id: 3,
        type: 'paddingWord',
        title: 'Giãn dòng',
        icon: 'icon-line-height',
        customContent: undefined,
        unit: '%',
        min: 100,
        max: 200,
        step: 10,
    },
];

function MobileNavMenu({ data = [], dataChaps = {}, isLogin }) {
    const [listNavData, setListNavData] = useState([]);
    const [menuType, setMenuType] = useState({ type: '', component: undefined, position: '' });
    const [showNav, setShowNav] = useState(false);
    const [navProps, setNavProps] = useState({});
    const [icon, setIcon] = useState('');
    const [iconMark, setIconMark] = useState('');
    const [loading, setLoading] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const [state] = useStore();
    const settings = handlerGetSetting(state.defaults);

    let ComponentNav = menuType.component;

    const mobileNavMenuRef = useRef();
    const mobileFeelRef = useRef();

    const params = useParams();
    const { name, chapter } = params;

    useEffect(() => {
        setIcon('');
        setIconMark('');
    }, [name, chapter]);

    // console.log(menuType);

    useEffect(() => {
        setListNavData(data);
    }, []);

    useEffect(() => {
        const chapBodyDom = document.querySelector(`.${cx('body')}`);

        const handlerTransition = (e) => {
            setIsActive(!isActive);
            setMenuType({ type: '', component: undefined, position: '' });
            setShowNav(false);
            setNavProps({});
        };

        if (chapBodyDom) {
            chapBodyDom.addEventListener('click', handlerTransition);

            return () => chapBodyDom.removeEventListener('click', handlerTransition);
        }
    }, [isActive]);

    useEffect(() => {
        if (menuType.type === 'heart') {
            const navMenuHeight = mobileNavMenuRef.current?.offsetHeight;
            if (mobileFeelRef.current) {
                mobileFeelRef.current.setPosition('bottom', navMenuHeight || 46);
            }
            // console.log(mobileFeelRef);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive, showNav]);

    // menu
    // setting
    // heart
    // save
    // comments

    const handlerChangeComment = useCallback(() => {
        const commentDom = document.getElementById('chap-comments');
        if (commentDom) {
            commentDom.scrollIntoView();
            setIsActive(false);
            return;
        }

        toastReact(3, 'Lỗi', 'Có lỗi xảy ra, vui lòng thông cảm.');
        // console.log(commentDom);
    }, []);

    const handlerCloseNav = useCallback((type, component, check, position, props, menuData = {}) => {
        // console.log(menuType.type);
        // console.log(menuData);

        if (check && type !== menuData.type) {
            setMenuType({ type, component, position });
            setNavProps(props);
        } else {
            setMenuType({ type: '', component: undefined, position: '' });
            setShowNav(false);
            setNavProps({});
        }
    }, []);

    // console.log(menuType);

    const handlerSetTypeNavMenu = useCallback((type, component, position, props = {}) => {
        const types = { type, component, position };
        setMenuType(types);
        setShowNav(true);
        setNavProps(props);
    }, []);

    const handlerSetBookMark = useCallback(() => {
        if (isLogin) {
            const listActions = { true: 1, false: 0 };
            const loginIcon = handlerSetIconNavChap(isLogin, 'save', dataChaps, 'icon-save');
            const typeAction = loginIcon?.isCheckMark;
            const action = listActions[typeAction];
            // console.log(action);
            const icons = handlerSaveBookMark(action, dataChaps);

            setLoading(true);
            setTimeout(() => {
                setIconMark(icons);
                setLoading(false);
            }, 400);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin]);

    const handlerSetPropItem = useCallback(
        (type, navMenu, check, iconProps, menuData) => {
            let itemProps = {};

            if (type === 'menu') {
                const props = {
                    data: dataChaps?.listChapter ?? [],
                    bookName: dataChaps.bookName,
                    onClose: (e) => handlerCloseNav(type, navMenu),
                };

                itemProps = { onClick: (e) => handlerSetTypeNavMenu(type, navMenu, 'outer', props) };
            } else if (type === 'setting') {
                const props = { data: listSetting };
                const handlerChangeSetting = check
                    ? (e) => handlerCloseNav(type, navMenu, check, 'inner', props, menuData)
                    : (e) => handlerSetTypeNavMenu(type, navMenu, 'inner', props);

                itemProps = { onClick: handlerChangeSetting };
            } else if (type === 'heart') {
                const props = {
                    ...iconProps,
                    ref: mobileFeelRef,
                };
                const handlerChangeSetting = check
                    ? (e) => handlerCloseNav(type, navMenu, check, 'outer', props, menuData)
                    : (e) => handlerSetTypeNavMenu(type, navMenu, 'outer', props);
                itemProps = { onClick: handlerChangeSetting };
            } else if (type === 'save') {
                itemProps = { onClick: handlerSetBookMark };
            } else if (type === 'comments') {
                itemProps = { onClick: handlerChangeComment };
            }

            return itemProps;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isLogin],
    );

    return (
        <div>
            {ComponentNav && menuType.position === 'outer' && showNav && <ComponentNav {...navProps} />}
            <div
                className={cx('mobile-nav-menu', { ['mobile-nav-menu-active']: isActive })}
                style={{ backgroundColor: settings.headerColor, color: settings.textColor }}
                ref={mobileNavMenuRef}
            >
                {ComponentNav && menuType.position === 'inner' && showNav && <ComponentNav {...navProps} />}
                <div className={cx('mobile-list-nav')}>
                    {listNavData.map((item) => {
                        let iconName = `nh-icon ${item.icon}`;
                        let iconStyle = {};
                        let iconProps = {};
                        const itemType = item.type;
                        const itemNavMenu = item.navMenu;
                        const itemLogin = item.login && !isLogin;
                        let loginIcon;
                        let isLoading;

                        let ActionComponent = Fragment;
                        let actionProps = {};

                        if (itemLogin) {
                            ActionComponent = ActionLogin;
                        }

                        if (itemType === 'heart') {
                            if (isLogin) {
                                const iconType = item.icon;
                                loginIcon = handlerSetIconNavChap(isLogin, 'heart', dataChaps, iconType);

                                if (loginIcon !== iconType) {
                                    iconName = 'nh-icon';
                                    iconStyle = {
                                        style: {
                                            backgroundImage: loginIcon.url,
                                            display: 'inline-block',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            width: '26px',
                                            height: '26px',
                                        },
                                    };
                                }
                                iconProps = { idIcon: loginIcon.idIcon, data: dataChaps, onIconChange: setIcon };
                            }

                            if (icon) {
                                iconName = 'nh-icon';
                                iconStyle = {
                                    style: {
                                        backgroundImage: icon,
                                        display: 'inline-block',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        width: '26px',
                                        height: '26px',
                                    },
                                };
                            }
                        }

                        if (itemType === 'save') {
                            isLoading = true;
                            loginIcon = handlerSetIconNavChap(isLogin, 'save', dataChaps, item.icon);

                            // console.log(loginIcon);

                            if (loginIcon?.isCheckMark) {
                                iconName = `nh-icon ${loginIcon.icon}`;
                            }

                            if (iconMark) {
                                iconName = 'nh-icon ' + iconMark;
                            }
                        }

                        const btnProps = handlerSetPropItem(itemType, itemNavMenu, showNav, iconProps, menuType);

                        // if (itemType === 'save') console.log(btnProps);

                        return (
                            <div className={cx('mobile-nav-item')} key={item.type}>
                                <ActionComponent>
                                    <button className={cx('mobile-nav-btn')} {...btnProps}>
                                        {isLogin && isLoading && loading && (
                                            <Loading
                                                wrapperStyle={{ marginTop: '0', color: 'inherit' }}
                                                borderStyle={{ borderWidth: '0.3em' }}
                                            />
                                        )}
                                        {!isLoading && <i className={iconName} {...iconStyle} />}
                                        {isLoading && !loading && <i className={iconName} {...iconStyle} />}
                                    </button>
                                </ActionComponent>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default memo(MobileNavMenu);
