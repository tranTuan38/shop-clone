import { Fragment, useEffect, useRef, useState, memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Chapter.module.scss';
import {
    removeVietnameseTones,
    handlerGetChapterData,
    handlerGetBookMediaData,
    handlerGetSetting,
    handlerLocalStorage,
    handlerSaveLocalData,
    handlerSetBookReadData,
} from '~/handler';
import imgs from '~/assets/imgs';
import { Comment } from '~/components/TapsBook/Taps';
import { userData, listComment, listIcons } from '~/initdata';
import { useStore, useViewport } from '~/hooks';
import {
    NavBar,
    Navigation,
    ChapterInfo,
    UserAction,
    MobileNavMenu,
    MobileListChap,
    MobileChapSetting,
} from './component';
import { NavMenuChaps, NavMenuSetting, NavMenuFeel } from './navMenus';
import NavPopup from '~/components/NavPopup';
import { InfoMenu } from '~/components/Popper';
import ReportForm from '~/components/Form/ReportForm';
import FormSelect from './component/FormSelect';

const cx = classNames.bind(styles);

const navBarData = [
    {
        id: 'navbar-top',
        position: 'top',
        navBarList: [
            { type: 'menu', indexItem: 0, icon: 'icon-menu', action: true, navMenu: NavMenuChaps },
            { type: 'setting', indexItem: 1, icon: 'icon-setting', action: true, navMenu: NavMenuSetting },
            { type: 'arrow', indexItem: 2, icon: 'icon-arrow-left' },
            { type: 'info', indexItem: 3, icon: 'icon-info', modal: NavPopup, modalContent: InfoMenu },
        ],
    },
    {
        id: 'navbar-bottom',
        position: 'bottom',
        navBarList: [
            { type: 'heart', indexItem: 0, icon: 'icon-heart', navMenu: NavMenuFeel },
            { type: 'save', indexItem: 1, icon: 'icon-save' },
            { type: 'comments', indexItem: 2, icon: 'icon-comments' },
        ],
    },
];

const navBarMobileData = [
    { type: 'menu', indexItem: 0, icon: 'icon-menu', action: true, navMenu: MobileListChap },
    { type: 'setting', indexItem: 1, icon: 'icon-setting', action: true, navMenu: NavMenuSetting },
    { type: 'heart', indexItem: 2, icon: 'icon-heart', navMenu: NavMenuFeel, login: true },
    { type: 'save', indexItem: 3, icon: 'icon-save', login: true },
    { type: 'comments', indexItem: 4, icon: 'icon-comments' },
];

const navigationTop = [
    { id: 0, type: 'firstChapter', action: -1, icon: 'icon-prev-2', title: 'Chương trước' },
    { id: 1, type: 'lastChapter', action: 1, icon: 'icon-next-2', title: 'Chương sau' },
];

const navigationBottom = [
    { id: 0, type: 'firstChapter', action: -1, icon: 'icon-prev-2', title: 'Chương trước' },
    { id: 1, type: 'error', action: 0, icon: 'icon-alert', title: undefined },
    { id: 2, type: 'lastChapter', action: 1, icon: 'icon-next-2', title: 'Chương sau' },
];

function Chapter() {
    const location = useLocation();
    const [chapterRender, setChaterRender] = useState(0);
    const params = useParams();
    const localStorageAction = handlerLocalStorage();
    const { name, chapter } = params;
    const [state] = useStore();
    const settings = handlerGetSetting(state.defaults);
    const navigate = useNavigate();
    const viewPort = useViewport();

    const chapterData = handlerGetChapterData(name, chapter, state.userData());
    const { getCommentById } = handlerGetBookMediaData([], listComment, userData);
    const containerRef = useRef();
    const navBarTopRef = useRef();
    const navBarBottomRef = useRef();
    const commentRef = useRef();
    const reportRef = useRef();
    const formSelectRef = useRef();

    useEffect(() => {
        if (state.login) {
            setChaterRender(chapterRender + 1);
        }
    }, []);

    useEffect(() => {
        if (chapterData) {
            const numberChapter = chapterData.numberChapter;
            const numBerFormat = `chuong-${numberChapter}`;
            const dataSave = {
                idChapter: chapterData.idChapter,
                numberChapter,
                numBerFormat,
                bookImg: chapterData.bookImg,
                time: new Date().getTime(),
                idBook: chapterData.idBook,
                bookName: chapterData.bookName,
                nameFormat: removeVietnameseTones(chapterData.bookName),
            };

            handlerSaveLocalData(chapterData, dataSave, localStorageAction);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, chapter]);

    useEffect(() => {
        if (chapterData) {
            document.title = `${chapterData.bookName} - Chương ${chapterData.numberChapter}`;
        } else {
            navigate('/not-found', {
                state: { title: 'Nội dung này không tồn tại hoặc đã bị xóa', path: location.pathname },
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, chapter]);

    useEffect(() => {
        if (chapterData && !viewPort) {
            const navBarTopPosition = containerRef.current.getBoundingClientRect();
            let attrsTop;
            let attrsBottom;

            if (window.innerWidth < 1215) {
                attrsBottom = { left: '1115px' };
                navBarBottomRef.current?.change(attrsBottom);
            } else {
                attrsBottom = { left: `${window.innerWidth - navBarTopPosition.left - 2}px` };
                navBarBottomRef.current?.change(attrsBottom);
            }

            const handlerScroll = (e) => {
                const containerTopPosition = containerRef.current.getBoundingClientRect().top;
                const navBarTopPosition = containerRef.current.getBoundingClientRect();
                const isHeightEndPoint = window.innerHeight + window.scrollY >= document.body.offsetHeight;

                if (containerTopPosition < 0) {
                    attrsTop = { position: 'fixed', top: '16px', bottom: 'auto' };

                    if (window.innerWidth < 1215) {
                        attrsTop = { ...attrsTop, left: '1115px' };
                        attrsBottom = { left: '1115px' };
                    } else {
                        const navBarLeft = `${window.innerWidth - navBarTopPosition.left - 2}px`;

                        attrsTop = { ...attrsTop, left: navBarLeft };
                        attrsBottom = { left: navBarLeft };
                    }

                    if (isHeightEndPoint) {
                        const commentHeight = commentRef.current.getBoundingClientRect();
                        const scrollYHeight = document.documentElement.clientHeight;
                        const rangeBottom = scrollYHeight - commentHeight.bottom;

                        attrsBottom = {
                            ...attrsBottom,
                            top: 'auto',
                            bottom: rangeBottom + 'px',
                        };
                    } else {
                        attrsBottom = {
                            ...attrsBottom,
                            top: '542px',
                            bottom: 'auto',
                        };
                    }

                    navBarTopRef.current?.change(attrsTop);
                    navBarBottomRef.current?.change(attrsBottom);
                } else {
                    attrsTop = { position: 'absolute', top: '0', bottom: 'auto', left: 'auto' };
                    navBarTopRef.current?.change(attrsTop);
                }
            };

            const handlerResize = (e) => {
                const containerTopPosition = containerRef.current.getBoundingClientRect().top;
                const navBarTopPosition = containerRef.current.getBoundingClientRect();
                const isHeightEndPoint = window.innerHeight + window.scrollY >= document.body.offsetHeight;
                const navBarLeft = `${window.innerWidth - navBarTopPosition.left - 2}px`;

                if (containerTopPosition < 0) {
                    if (window.innerWidth < 1215) {
                        attrsTop = { ...attrsTop, left: '1115px' };
                        attrsBottom = { left: '1115px' };

                        if (isHeightEndPoint) {
                            const scrollYHeight = document.documentElement.clientHeight;
                            const commentHeight = commentRef.current.getBoundingClientRect();
                            const rangeBottom = scrollYHeight - commentHeight.bottom;

                            attrsBottom = {
                                ...attrsBottom,
                                top: 'auto',
                                bottom: rangeBottom + 'px',
                            };
                        } else {
                            attrsBottom = {
                                ...attrsBottom,
                                top: '542px',
                                bottom: 'auto',
                            };
                        }
                    } else {
                        attrsTop = { ...attrsTop, left: navBarLeft };
                        attrsBottom = { left: navBarLeft };
                    }

                    navBarTopRef.current?.change(attrsTop);
                    navBarBottomRef.current?.change(attrsBottom);
                } else {
                    attrsTop = { position: 'absolute', top: '0', bottom: 'auto', left: 'auto' };

                    if (window.innerWidth < 1215) {
                        attrsBottom = { left: '1115px' };
                    } else {
                        attrsBottom = { left: navBarLeft };
                    }

                    navBarTopRef.current?.change(attrsTop);
                    navBarBottomRef.current?.change(attrsBottom);
                }
            };

            window.addEventListener('scroll', handlerScroll);
            window.addEventListener('resize', handlerResize);

            return () => {
                window.removeEventListener('scroll', handlerScroll);
                window.removeEventListener('resize', handlerResize);
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, chapter, viewPort]);

    useEffect(() => {
        if (state.login) {
            handlerSetBookReadData(chapterData);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.login, name, chapter]);

    const handlerSetTitle = (numberChapter, nameChapter) => {
        let title;
        if (numberChapter) {
            if (numberChapter < 10) {
                title = `Chương 0${numberChapter}: ${nameChapter}`;
            } else {
                title = `Chương ${numberChapter}: ${nameChapter}`;
            }

            return title;
        }

        return nameChapter;
    };

    // console.log(chapterData);

    return (
        <div className={cx('wrapper')}>
            {chapterData && (
                <>
                    <div
                        className={cx('container')}
                        ref={containerRef}
                        style={{ backgroundColor: settings.contentColor, color: settings.textColor }}
                    >
                        {!viewPort ? (
                            navBarData.map((navBar) => {
                                let ref;

                                if (navBar.position === 'top') {
                                    ref = navBarTopRef;
                                } else if (navBar.position === 'bottom') {
                                    ref = navBarBottomRef;
                                }
                                return (
                                    <NavBar
                                        isLogin={state.login}
                                        key={navBar.id}
                                        data={navBar}
                                        dataChaps={chapterData}
                                        ref={ref}
                                        settings={settings}
                                    />
                                );
                            })
                        ) : (
                            <MobileNavMenu
                                data={navBarMobileData}
                                isLogin={state.login}
                                dataChaps={chapterData}
                                settings={settings}
                            />
                        )}

                        <Navigation
                            data={navigationTop}
                            className={'navigate'}
                            buttonClass={'btn-navigate'}
                            navClass={undefined}
                            chapterData={chapterData}
                            settings={settings}
                            style={{ color: settings.textColor }}
                        />
                        <div className={cx('body')}>
                            <div className={cx('chap-title')}>
                                {handlerSetTitle(chapterData.numberChapter, chapterData.nameChapter)}
                            </div>
                            <ChapterInfo chapterData={chapterData} />

                            <div
                                className={cx('content')}
                                style={{
                                    fontFamily: settings.fontFamily,
                                    color: settings.textColor,
                                    fontSize: settings.fontSize,
                                    lineHeight: settings.paddingWord,
                                }}
                            >
                                {chapterData.content}
                            </div>
                        </div>
                        <UserAction isLogin={state.login} onShowForm={formSelectRef.current?.onShow} />
                    </div>

                    <Navigation
                        isLogin={state.login}
                        data={navigationBottom}
                        className={'navigate-2'}
                        buttonClass={'btn-navigate-2'}
                        navClass={'btn-error'}
                        chapterData={chapterData}
                        settings={settings}
                        style={{ backgroundColor: settings.contentColor, color: settings.textColor }}
                        onOpenReportForm={reportRef.current?.openReport}
                    />

                    <div
                        id="chap-comments"
                        ref={commentRef}
                        style={{
                            backgroundColor: settings.contentColor,
                            color: settings.textColor,
                            borderRadius: '8px',
                        }}
                    >
                        <Comment
                            isLogin={state.login}
                            user={state.userData()}
                            data={chapterData}
                            listDataCmt={getCommentById(chapterData.idBook)}
                            checkTapsIndex={true}
                            c4Data={imgs.imgAdver}
                            className={cx('comment')}
                            classActive={state.defaults.themes === 6}
                            getCommentById={getCommentById}
                        />
                    </div>
                </>
            )}
            <ReportForm type="page-chap" ref={reportRef} />
            <FormSelect type="page-chap" ref={formSelectRef} />
        </div>
    );
}

export default memo(Chapter);
