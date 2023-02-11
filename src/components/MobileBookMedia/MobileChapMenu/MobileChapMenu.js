import classNames from 'classnames/bind';

import styles from './MobileChapMenu.module.scss';

import NavMenuChapter from './NavMenuChapter';
import PaginationPage from '~/components/PaginationPage';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function MobileChapMenu({ data = [] }) {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        setListData(data);
    }, [data]);

    return (
        <div className={cx('wrapper')}>
            <PaginationPage isScroll={false} data={listData} limit={2} PageItem={NavMenuChapter} />
        </div>
    );
}

export default MobileChapMenu;
