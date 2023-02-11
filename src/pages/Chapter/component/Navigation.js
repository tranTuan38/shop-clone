import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from '../Chapter.module.scss';
import ActionLogin from '~/components/ActionLogin';

const cx = classNames.bind(styles);

function Navigation({
    data,
    isLogin,
    className,
    chapterData,
    buttonClass,
    navClass,
    style = {},
    onOpenReportForm = () => {},
}) {
    const location = useLocation();
    const navigate = useNavigate();

    // console.log(chapterData);

    const handlerNavigate = (e, type, action) => {
        if (!chapterData[type]) {
            const pathNameBook = location.pathname;
            const chapterIndex = pathNameBook.indexOf('/chuong-');
            const sliceLink = pathNameBook.slice(chapterIndex);
            const newLink = pathNameBook.replace(sliceLink, `/chuong-${action}`);
            navigate(newLink);
        }
    };

    const hanlderOpenForm = () => {
        onOpenReportForm(chapterData.idUser, { idBook: chapterData.idBook, idChapter: chapterData.idChapter });
    };

    return (
        <div className={cx(className)} style={{ ...style }}>
            {data.map((item) => {
                let classBtn = buttonClass;
                let props = {};
                let Component = Fragment;
                let propsCom = { key: item.id };
                let propsBtn = {
                    onClick: (e) => handlerNavigate(e, item.type, chapterData.numberChapter + item.action),
                };

                if (item.action < 0) {
                    props = { style: { marginRight: '8px' } };
                } else if (item.action === 0) {
                    classBtn = navClass;
                    Component = ActionLogin;
                    propsCom = { ...propsCom, isLogin: isLogin };
                    propsBtn = {};
                    if (isLogin) {
                        propsBtn = { onClick: hanlderOpenForm };
                    }
                } else if (item.action > 0) {
                    props = { style: { marginLeft: '8px' } };
                }
                return (
                    <Component {...propsCom}>
                        <button
                            key={item.id}
                            className={cx(classBtn, { disabled: chapterData[item.type] })}
                            {...propsBtn}
                        >
                            {item.action > 0 && item.title}
                            <i className={`nh-icon ${item.icon}`} {...props}></i>
                            {item.action < 0 && item.title}
                        </button>
                    </Component>
                );
            })}
        </div>
    );
}

export default memo(Navigation);
