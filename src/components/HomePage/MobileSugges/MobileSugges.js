import classNames from 'classnames/bind';
import styles from './MobileSugges.module.scss';
import { useNavigate } from 'react-router-dom';

import Taga from '~/components/Taga';
import Img from '~/components/Img';
import MobileBookItem from '~/components/MobileBookItem';
import { memo } from 'react';
import { useViewport, useGetProperties } from '~/hooks';

const cx = classNames.bind(styles);

function MobileSugges() {
    const navigate = useNavigate();
    const viewPort = useViewport();
    const [listData, data] = useGetProperties();

    // console.log(data?.flat(Infinity));

    const handlerNavigatePage = (event, name, link) => {
        event.preventDefault();
        navigate(link);
        window.scrollTo({ top: 0 });
    };

    return (
        viewPort && (
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('media-title')}>
                        <h2 className={cx('title')}>BTV đề cử</h2>
                    </div>
                    <div className={cx('content')}>
                        <MobileBookItem data={data?.flat(Infinity)} />
                    </div>
                </div>
                <Taga
                    href="/list-book/?sort_by=new_chap_at"
                    className={cx('all')}
                    title="Xem tất cả"
                    onClick={handlerNavigatePage}
                />
            </div>
        )
    );
}

export default memo(MobileSugges);
