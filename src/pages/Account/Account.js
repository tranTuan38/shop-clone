import classNames from 'classnames/bind';

import styles from './Account.module.scss';
import imgs from '~/assets/imgs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Account() {
    useEffect(() => {}, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>Account</div>
        </div>
    );
}

export default Account;
