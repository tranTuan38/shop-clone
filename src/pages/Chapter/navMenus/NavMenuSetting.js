import classNames from 'classnames/bind';
import { useEffect, useRef, useState, forwardRef, useImperativeHandle, useLayoutEffect } from 'react';
import { memo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import styles from '../Chapter.module.scss';
import { handlerSetMenuSetting, handlerSetChangeSettings } from '~/handler';
import { listThemes, listFontFamily } from '~/initdata';
import imgs from '~/assets/imgs';
import { useStore } from '~/hooks';
import { actions } from '~/components/store';

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
        type: 'widthContent',
        title: 'Chiều rộng khung',
        icon: 'icon-width-resize',
        customContent: undefined,
        unit: 'px',
        min: 500,
        max: 1000,
        step: 100,
    },
    {
        id: 4,
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

const SETTING = 'setting';

function NavMenuSetting({ type, data, onClick }, ref) {
    const [state, dispatch] = useStore();
    const [settingData, setSettingData] = useState(listSetting);

    // const [setting, setSetting] = useState(() => {
    //     const prevSetting = JSON.parse(localStorage.getItem(SETTING));

    //     if (prevSetting) {
    //         return prevSetting;
    //     }

    //     return state.defaults;
    // });

    // console.log(setting);

    useLayoutEffect(() => {
        if (Array.isArray(data)) setSettingData(data);
    }, []);

    const navMenuRef = useRef();

    useImperativeHandle(ref, () => ({
        remove(element, navClass) {
            element.classList.remove(navClass);
        },
        setPosition(position = '', positionSize) {
            // const { top, right, bottom, left } = positions;
            const listPosition = ['top', 'right', 'bottom', 'left'];
            const isCheck = listPosition.includes(position);

            if (isCheck) navMenuRef.current.style[position] = positionSize - 1 + 'px';
        },
    }));
    // console.log(type);

    const handlerSetLocal = (data) => {
        localStorage.setItem(SETTING, JSON.stringify(data));
    };

    const handlerChangeOption = (type, value) => {
        // setSetting((prev) => ({ ...prev, fontFamily: +value }));
        dispatch(actions.setChangeSetting({ type, value }));
    };

    // handlerSetMenuSetting('color', state.defaults);

    return (
        <div className={cx('nav-menu', { [type]: type })} ref={navMenuRef}>
            <button className={cx('nav-menu-btn')} onClick={onClick}>
                <i className="nh-icon icon-close" />
            </button>
            <div className={cx('nav-menu-content')}>
                <div className={cx('menu-title')}>
                    <h4 className={cx('h4')}>Cài Đặt</h4>
                    <div className={cx('list-btn')}></div>
                </div>

                <div className={cx('menu-content')} style={{ marginBottom: '16px', marginRight: '0' }}>
                    <div className={cx('list-setting')}>
                        {settingData.map((item) => {
                            let ComParent = 'div';
                            let ComChildren = 'div';
                            const settingType = item.type;
                            const customContent = item.customContent;
                            let propsParent = {
                                className: `${cx('content-item', { [`content-${settingType}`]: settingType })}`,
                            };

                            let propsChildren = {
                                className: `${cx('content-info', { [`info-${settingType}`]: settingType })}`,
                            };
                            const check = Array.isArray(customContent);
                            const styleContent = handlerSetMenuSetting(settingType, check);

                            if (styleContent) {
                                ComParent = styleContent.tagParent;
                                ComChildren = styleContent.tagChild;

                                if (settingType === 'fontFamily') {
                                    propsParent = {
                                        ...propsParent,
                                        style: {
                                            backgroundImage: `url('${imgs.arrow}')`,
                                        },
                                        value: state.defaults[settingType],
                                        onChange: (e) => handlerChangeOption(settingType, e.target.value),
                                    };
                                }
                            }

                            // console.log(styleContent);

                            return (
                                <div
                                    className={cx('set-item')}
                                    key={item.id}
                                    style={item.type === 'themes' ? { alignItems: 'flex-start' } : undefined}
                                >
                                    <div className={cx('set-title')}>
                                        <i className={`nh-icon ${item.icon}`} />
                                        {item.title}
                                    </div>
                                    <div className={cx('set-content')}>
                                        {check && (
                                            <ComParent {...propsParent}>
                                                {customContent.map((custom) => {
                                                    let propsChildActive = {};
                                                    let propsChildOption = {};

                                                    if (settingType === 'themes') {
                                                        const isActive = state.defaults.themes === custom.id;
                                                        propsChildren = {
                                                            ...propsChildren,
                                                            style: {
                                                                backgroundColor: custom.contentColor,
                                                                borderColor: custom.borderColorTheme,
                                                            },
                                                            onClick: (e) => handlerChangeOption(settingType, custom.id),
                                                        };

                                                        if (isActive) {
                                                            propsChildActive = {
                                                                className: `${propsChildren.className} ${cx(
                                                                    'themes-active',
                                                                )}`,
                                                            };
                                                        }
                                                    } else if (settingType === 'fontFamily') {
                                                        propsChildOption = { value: custom.id };
                                                    }

                                                    return (
                                                        <ComChildren
                                                            key={custom.id}
                                                            {...propsChildren}
                                                            {...propsChildActive}
                                                            {...propsChildOption}
                                                        >
                                                            {custom.title}
                                                        </ComChildren>
                                                    );
                                                })}
                                            </ComParent>
                                        )}

                                        {!check && (
                                            <ComParent {...propsParent}>
                                                <button
                                                    className={cx('btn-custom')}
                                                    onClick={(e) => {
                                                        const result = handlerSetChangeSettings(
                                                            state.defaults[settingType],
                                                            'minus',
                                                            item.min,
                                                            item.max,
                                                            item.step,
                                                        );

                                                        if (result) {
                                                            handlerChangeOption(settingType, result);
                                                        }
                                                    }}
                                                >
                                                    <i className="nh-icon icon-minus" />
                                                </button>
                                                <ComChildren {...propsChildren}>
                                                    {state.defaults[settingType]}
                                                    {item.unit}
                                                </ComChildren>
                                                <button
                                                    className={cx('btn-custom')}
                                                    onClick={(e) => {
                                                        const result = handlerSetChangeSettings(
                                                            state.defaults[settingType],
                                                            'add',
                                                            item.min,
                                                            item.max,
                                                            item.step,
                                                        );

                                                        if (result) {
                                                            handlerChangeOption(settingType, result);
                                                        }
                                                    }}
                                                >
                                                    <i className="nh-icon icon-plus" />
                                                </button>
                                            </ComParent>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(forwardRef(NavMenuSetting));
