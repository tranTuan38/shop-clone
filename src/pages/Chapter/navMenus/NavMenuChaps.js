import classNames from 'classnames/bind';
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from '../Chapter.module.scss';
import Loading from '~/components/Loading';
import { handlerGetChapterData } from '~/handler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { requestData } from '~/services';

const cx = classNames.bind(styles);

function NavMenuChaps({ type, data, onClick }, ref) {
    const params = useParams();
    const { name, chapter } = params;
    const location = useLocation();
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [listChap, setListChap] = useState([]);

    const navMenuRef = useRef();

    // console.log(type);

    useImperativeHandle(ref, () => ({
        remove(element, navClass) {
            element.classList.remove(navClass);
        },
    }));

    useEffect(() => {
        setListChap(data.listChapter);
    }, [data]);

    useEffect(() => {
        if (loading)
            requestData({
                dataList: handlerGetChapterData(name, chapter).listChapter,
                type: 'nav-menu',
                delay: 300,
                setLoading,
                setListData: setListChap,
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    const handlerBtnClick = (event) => {
        if (data.listChapter.length > 1) {
            setListChap((prev) => {
                let newData = [...prev];
                return newData.reverse();
            });
            setCheck(!check);
        }
    };

    const handlerUpdate = (e) => {
        setLoading(true);
    };

    const handlerSetLink = (chapNumber) => {
        const chapterIndex = location.pathname.indexOf('/chuong-');
        const sliceLink = location.pathname.slice(chapterIndex);
        const newLink = location.pathname.replace(sliceLink, `/chuong-${chapNumber}`);

        return newLink;
    };

    const handlerClickLink = (e, link) => {
        e.preventDefault();

        if (link !== location.pathname) {
            onClick();
            navigate(link);
        }
    };

    return (
        <div className={cx('nav-menu', { [type]: type })} ref={navMenuRef}>
            <button className={cx('nav-menu-btn')} onClick={onClick}>
                <i className="nh-icon icon-close" />
            </button>
            <div className={cx('nav-menu-content')}>
                <div className={cx('menu-title')}>
                    <h4 className={cx('h4')}>Danh sách chương</h4>
                    <div className={cx('list-btn')}>
                        <button className={cx('menu-title-btn')} onClick={handlerUpdate}>
                            <FontAwesomeIcon icon={faRetweet} />
                        </button>
                        <button className={cx('menu-title-btn')} onClick={handlerBtnClick}>
                            {check ? (
                                <i className="nh-icon icon-sort-desc"></i>
                            ) : (
                                <i className="nh-icon icon-sort-asc"></i>
                            )}
                        </button>
                    </div>
                </div>

                <div className={cx('menu-content')} style={{ overflowY: loading ? 'hidden' : 'auto' }}>
                    {loading && <Loading wrapperStyle={{ marginTop: '0' }} />}
                    {!loading && !!listChap.length && (
                        <div className={cx('list-chapter')}>
                            <div className="row">
                                {listChap.map((item) => {
                                    const link = handlerSetLink(item.numberChapter);

                                    return (
                                        <div
                                            className="col c-6"
                                            key={item.idChapter}
                                            style={{ borderBottom: '1px dashed #eee' }}
                                        >
                                            <div className={cx('chapter-item')}>
                                                <Link
                                                    to={link}
                                                    className={cx('chapter-link', {
                                                        ['link-active']: link === location.pathname,
                                                    })}
                                                    onClick={(e) => handlerClickLink(e, link)}
                                                >
                                                    <span>{`Chương ${item.numberChapter}: ${item.nameChapter}`}</span>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(forwardRef(NavMenuChaps));
