import classNames from 'classnames/bind';
import { memo, useEffect, useState, Fragment } from 'react';

import styles from './Setting.module.scss';
import UserFile from './UserFile';
import UserSecurity from './UserSecurity';
import UserConFig from './UserConFig';
import { useUserData } from '~/hooks';
import { userData } from '~/initdata';

const cx = classNames.bind(styles);

const typeSettings = [
    { typeComponent: 'file', component: UserFile },
    { typeComponent: 'security', component: UserSecurity },
    { typeComponent: 'config', component: UserConFig },
];

function Setting({ type }) {
    const [data] = useUserData();
    const [Component, setComponent] = useState(Fragment);

    useEffect(() => {
        if (type) {
            const indexType = typeSettings.findIndex((setting) => setting.typeComponent === type);
            if (Number.isInteger(indexType)) {
                const ComponentElement = typeSettings[indexType].component;
                setComponent(ComponentElement);
            }
        }
    }, []);

    return <div className={cx('wrapper')}>{data.name && <Component data={data} />}</div>;
}

export default memo(Setting);
