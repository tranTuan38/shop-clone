import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './Fan.module.scss';

const cx = classNames.bind(styles);

function Fan() {
    return <div>Fan</div>;
}

export default memo(Fan);
