import classNames from 'classnames/bind';
import { useEffect, useRef, forwardRef, useImperativeHandle, Fragment, useState, useLayoutEffect } from 'react';
import { memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from '../Chapter.module.scss';
import { removeVietnameseTones, handlerSetIconNavChap } from '~/handler';
import ActionLogin from '~/components/ActionLogin';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function NavBar({ data, dataChaps, isLogin, settings }, ref) {
    const [icon, setIcon] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const params = useParams();
    const { name, chapter } = params;

    // console.log(icon);

    useEffect(() => {
        setIcon('');
    }, [name, chapter]);

    const navBarRef = useRef();
    const btnMenuRef = useRef();
    const btnSettingRef = useRef();
    const navMenuRef = useRef();
    const navSettingRef = useRef();
    const navFeelRef = useRef();

    useImperativeHandle(ref, () => ({
        change(attrs) {
            Object.assign(navBarRef.current.style, attrs);
        },
        remove(element, navClass) {
            element.classList.remove(navClass);
        },
    }));

    const handlerChangeNavMenu = (e, element) => {
        const listElement = [btnMenuRef.current, btnSettingRef.current];
        const elementDom = element.current;

        const checkElement = elementDom.classList.contains(`${cx('btn-action')}`);

        if (checkElement) {
            return;
        } else {
            const indexElement = listElement.findIndex((item) => item === elementDom);
            listElement.splice(indexElement, 1);
            const [restElement] = listElement;

            elementDom.classList.add(`${cx('btn-action')}`);
            restElement.classList.remove(`${cx('btn-action')}`);
        }
    };

    const handlerCloseNavMenu = (e, navElement, btnElement) => {
        navElement.current.remove(btnElement.current, cx('btn-action'));
    };

    const handlerNavigateBook = (link) => {
        navigate(`/list-book/${removeVietnameseTones(link)}`);
    };

    const handlerSetPosition = (e) => {
        const commentDom = document.getElementById('chap-comments');
        if (commentDom) {
            window.scrollTo(0, commentDom.offsetTop + 120);
        }
    };

    const handlerChangeState = (e) => {
        const isChecked = navFeelRef.current.contains();

        if (isChecked) {
            navFeelRef.current.remove();
        } else {
            navFeelRef.current.change();
        }
    };

    return (
        <div className={cx('navbar', { [data.id]: data.id })} ref={navBarRef}>
            <div
                className={cx('navbar-list')}
                style={{ backgroundColor: settings.contentColor, color: settings.textColor }}
            >
                {data.navBarList.map((item) => {
                    let NavComponent = Fragment;
                    let ModalComponent = Fragment;
                    let ActionComponent = Fragment;
                    let props = {};
                    let navProps = {};
                    let modalProps = {};
                    let actionProps = {};
                    let iconStyle = {};
                    let ref = null;
                    let isNavComponent = true;
                    let isLoading = false;

                    let iconName = item.icon;

                    if (item.action) {
                        if (item.type === 'menu') {
                            ref = btnMenuRef;
                        } else if (item.type === 'setting') {
                            ref = btnSettingRef;
                        }
                        props = { onClick: (e) => handlerChangeNavMenu(e, ref) };

                        if (item.navMenu) {
                            NavComponent = item.navMenu;
                            navProps = {
                                type: item.type,
                                data: dataChaps,
                            };
                            if (item.type === 'menu') {
                                navProps = {
                                    ...navProps,
                                    ref: navMenuRef,
                                    onClick(e) {
                                        handlerCloseNavMenu(e, navMenuRef, ref);
                                    },
                                };
                            } else if (item.type === 'setting') {
                                navProps = {
                                    ...navProps,
                                    ref: navSettingRef,
                                    onClick(e) {
                                        handlerCloseNavMenu(e, navSettingRef, ref);
                                    },
                                };
                            }
                        }
                    } else {
                        if (item.type === 'arrow') {
                            props = { onClick: (e) => handlerNavigateBook(dataChaps.bookName) };
                        } else if (item.type === 'info') {
                            ModalComponent = item.modal;

                            modalProps = {
                                style: { flex: 1, color: 'inherit' },
                                content: item.modalContent,
                                className: cx('chapter-modal'),
                                closeOnDocumentClick: false,
                                overlayStyle: {
                                    backgroundColor: 'rgba(0,0,0,0.4)',
                                    alignItems: 'center',
                                    transition: 'opacity .15s linear',
                                    overFlow: 'hidden',
                                },
                                contentStyle: { backgroundColor: '#fff', borderRadius: '8px' },
                            };
                        } else if (item.type === 'heart') {
                            ActionComponent = ActionLogin;
                            NavComponent = item.navMenu;

                            if (isLogin) {
                                props = { onClick: handlerChangeState };
                                const loginIcon = handlerSetIconNavChap(isLogin, dataChaps, iconName);

                                if (loginIcon !== iconName) {
                                    iconName = '';
                                    iconStyle = {
                                        backgroundImage: loginIcon.url,
                                        display: 'inline-block',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        width: '28px',
                                        height: '28px',
                                    };
                                    navProps = { idIcon: loginIcon.idIcon };
                                }
                            } else {
                                ModalComponent = 'div';
                                isNavComponent = isLogin;
                            }

                            navProps = { ...navProps, data: dataChaps, ref: navFeelRef, onIconChange: setIcon };
                            actionProps = { isLogin: isLogin, style: { flex: '1', color: 'inherit' } };

                            if (icon) {
                                iconName = '';
                                iconStyle = {
                                    backgroundImage: icon,
                                    display: 'inline-block',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    width: '28px',
                                    height: '28px',
                                };
                            }
                        } else if (item.type === 'save') {
                            isLoading = true;
                            ActionComponent = ActionLogin;

                            if (!isLogin) {
                                ModalComponent = 'div';
                                isNavComponent = isLogin;
                            }

                            actionProps = { isLogin: isLogin, style: { flex: '1', color: 'inherit' } };
                        } else if (item.type === 'comments') {
                            props = { onClick: handlerSetPosition };
                        }
                    }

                    return (
                        <div key={item.indexItem} className={cx('navbar-item')}>
                            <ActionComponent {...actionProps}>
                                <ModalComponent {...modalProps}>
                                    <button className={cx('navbar-btn')} ref={ref} {...props}>
                                        {isLogin && isLoading && loading && (
                                            <Loading
                                                wrapperStyle={{ marginTop: '0', color: 'inherit' }}
                                                borderStyle={{ borderWidth: '0.3em' }}
                                            />
                                        )}
                                        {!isLoading && <i className={`nh-icon ${iconName}`} style={{ ...iconStyle }} />}
                                        {isLoading && !loading && (
                                            <i className={`nh-icon ${iconName}`} style={{ ...iconStyle }} />
                                        )}
                                    </button>
                                </ModalComponent>
                            </ActionComponent>
                            {isNavComponent && <NavComponent {...navProps} />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default memo(forwardRef(NavBar));
