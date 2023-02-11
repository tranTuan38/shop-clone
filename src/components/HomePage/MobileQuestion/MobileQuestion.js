import classNames from 'classnames/bind';
import styles from './MobileQuestion.module.scss';
import { Link, useNavigate } from 'react-router-dom';

import Taga from '~/components/Taga';
import Img from '~/components/Img';
import MobileBookItem from '~/components/MobileBookItem';
import { listGuide } from '~/initdata';
import { memo, useEffect, useState } from 'react';
import { useViewport, useGetProperties } from '~/hooks';

const cx = classNames.bind(styles);

function MobileQuestion() {
    const navigate = useNavigate();
    const viewPort = useViewport();
    const [data, setData] = useState([]);

    // console.log(data);

    const handlerNavigatePage = (event, name, link) => {
        event.preventDefault();
        navigate(link);
        window.scrollTo({ top: 0 });
    };

    useEffect(() => {
        const result = listGuide.slice(0, 6);
        setData(result);
    }, []);

    return (
        viewPort && (
            <div className={cx('wrapper')}>
                <div className={cx('body')}>
                    <div className={cx('media-title')}>
                        <h2 className={cx('title')}>Hướng dẫn</h2>
                    </div>
                    <div className={cx('content')}>
                        <ul className={cx('list')}>
                            {data.map((item) => {
                                return (
                                    <li key={item.id} className={cx('item')}>
                                        <Link to={`/info/question${item.href}`} className={cx('link')}>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <Taga href="/info/question" className={cx('all')} title="Xem tất cả" onClick={handlerNavigatePage} />
            </div>
        )
    );
}

export default memo(MobileQuestion);
