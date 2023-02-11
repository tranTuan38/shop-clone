import classNames from 'classnames/bind';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './MobileMenu.module.scss';
import { actions } from '~/components/store';
import toastReact from '~/components/ToastMessages';
import MobileForm from '~/components/Form/MobileForm';
import { useGetCategory } from '~/hooks';
import { listRank } from '~/initdata';

const listNavMenu = [
    { id: 0, icon: 'icon-chart', title: 'Bảng xếp hạng' },
    { id: 1, icon: 'icon-grid', title: 'Thể loại' },
];

const cx = classNames.bind(styles);

function MobileMenu({ login, data = [], userData = {}, onClose = () => {}, dispatch = () => {} }, ref) {
    const [category] = useGetCategory();
    const [listData, setListData] = useState([]);
    const [dataRank, setDataRank] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [show, setShow] = useState();
    const [showForm, setShowForm] = useState(false);
    const [formName, setFormName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const overlayRef = useRef();
    const containerRef = useRef();

    useImperativeHandle(ref, () => ({
        hide() {
            return new Promise((resolve) => {
                overlayRef.current.style.opacity = 0;
                containerRef.current.style.opacity = 0;
                containerRef.current.style.right = '-100%';
                setTimeout(() => {
                    resolve(true);
                }, 300);
            });
        },
    }));

    useEffect(() => {
        setListData(data);
    }, [data]);

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        const headerDom = document.querySelector('[data-header-width]');
        if (headerDom) {
            containerRef.current.style.top = headerDom.offsetHeight + 'px';
        }
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);

    // console.log(category);

    const handlerClickBtn = (navData = {}) => {
        // const btnDom = document.querySelector(`[mobile-btn-type="${type}"]`);
        if (login) {
            if (navData.path) {
                let link = navData.path;

                if (!navData.hash) link = `${link}/${userData?.id}`;
                navigate(link);
                onClose();
                return;
            }

            if (navData.noSupport) {
                toastReact(3, 'Lỗi', 'Chức năng chưa được hỗ trợ.');
                return;
            }

            dispatch(actions.setUserLogout());
            toastReact(1, 'Thành công', 'Đăng xuất thành công.');
            if (location.pathname !== '/') navigate('/');
            onClose();
            return;
        }

        setShowForm(true);
        setFormName(navData.type);
        // console.dir(navData);
    };

    const handlerClickBtnNav = (navData) => {
        const btnDom = document.querySelector(`[mobile-nav-btn-type="${navData.id}"]`);
        btnDom?.lastChild.classList.toggle(cx('icon-rotate'));
        btnDom?.classList.toggle(cx('active'));
        const prevHeight = btnDom.nextElementSibling.style.height;

        btnDom.nextElementSibling.classList.toggle(cx('list-action'));
        if (!prevHeight) {
            btnDom.nextElementSibling.style.height = btnDom.nextElementSibling.scrollHeight + 'px';
        } else {
            btnDom.nextElementSibling.style.height = '';
        }

        // console.log(btnDom.nextElementSibling.style.height);

        // console.log(btnDom.nextElementSibling.scrollHeight);
        // console.log(btnDom.nextElementSibling.style.height);

        // console.dir(btnDom);
    };

    const handlerCloseForm = () => {
        setShowForm(false);
        setFormName('');
        onClose();
    };

    // console.log(location);
    // console.log(formName);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('overlay')} ref={overlayRef}></div>
            <aside className={cx('container')} ref={containerRef}>
                <div className={cx('list')}>
                    {listData.map((item) => {
                        const isActive =
                            item.path && (location.hash === item.hash || location.pathname.includes(item.path));

                        return (
                            <div key={item.id} className={cx('item')}>
                                <button
                                    mobile-btn-type={item.id}
                                    className={cx('btn', { active: isActive })}
                                    onClick={(e) => handlerClickBtn(item)}
                                >
                                    <i className={`nh-icon ${item.icon}`} />
                                    {item.title}
                                    {item.navMenu && <i className="nh-icon icon-caret" />}
                                </button>
                            </div>
                        );
                    })}

                    {listNavMenu.map((item) => {
                        let listLinkData = [];

                        if (item.id === 0) {
                            listLinkData = listRank.map((link) => ({ ...link, path: `/bxh/week/${link.path}` }));
                        }
                        if (item.id === 1) {
                            listLinkData = category.map((link, index) => ({
                                path: `/list-book/?genre=${index}`,
                                title: link[0],
                            }));

                            listLinkData.unshift({ path: '/list-book/', title: 'Tất cả' });
                        }

                        return (
                            <div key={item.id} className={cx('item')}>
                                <button
                                    mobile-nav-btn-type={item.id}
                                    className={cx('btn')}
                                    onClick={(e) => handlerClickBtnNav(item)}
                                >
                                    <i className={`nh-icon ${item.icon}`} />
                                    {item.title}
                                    <i className="nh-icon icon-caret" />
                                </button>
                                <div className={cx('list-link')}>
                                    {listLinkData.map((link) => (
                                        <Link className={cx('link-item')} key={link.path} to={link.path}>
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </aside>
            {showForm && <MobileForm close={handlerCloseForm} formName={formName} />}
        </div>
    );
}

export default memo(forwardRef(MobileMenu));
