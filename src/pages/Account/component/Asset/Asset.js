import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './Asset.module.scss';
import AssetCandy from './AssetCandy';
import AssetFlower from './AssetFlower';
import { useStore } from '~/hooks';
import { actions } from '~/components/store';

const cx = classNames.bind(styles);

const typeAssets = [
    { typeComponent: 'candy', component: AssetCandy },
    { typeComponent: 'flower', component: AssetFlower },
];

function Asset({ type }) {
    const [state, dispatch] = useStore();
    const [data, setData] = useState({});
    const [Component, setComponent] = useState();

    useEffect(() => {
        if (type) {
            const indexType = typeAssets.findIndex((item) => item.typeComponent === type);
            if (Number.isInteger(indexType)) {
                const ComponentElement = typeAssets[indexType].component;
                setComponent(ComponentElement);
                setData(state.userData().asset);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className={cx('wrapper')}>{Component && <Component data={data} />}</div>;
}

export default memo(Asset);
