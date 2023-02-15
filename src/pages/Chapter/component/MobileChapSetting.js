import classNames from 'classnames/bind';
import { memo, useCallback, useEffect, useState } from 'react';

import { handlerGetSetting } from '~/handler';
import { useStore, useViewport } from '~/hooks';
import { listThemes, listFontFamily } from '~/initdata';
import { NavMenuSetting } from '../navMenus';
import { actions } from '~/components/store';
import styles from '../Chapter.module.scss';

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

const SETTING = 'setting';

function MobileChapSetting() {
    return <NavMenuSetting />;
}

export default memo(MobileChapSetting);
