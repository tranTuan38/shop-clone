import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Taga from '~/components/Taga';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Guide({ data, type }) {
    const [guideData, setGuideData] = useState([]);

    useEffect(() => {
        const newData = data.slice(0, 6);

        setGuideData(newData);
    }, []);

    const handlerClick = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className={cx('guide')}>
            <div className={cx('media-title', { ['guide-title']: type })}>
                <h2 className={cx('title')}>Hướng dẫn</h2>
                <Taga href="/info/question" className={cx('all')} title="Xem tất cả" onClick={handlerClick} />
            </div>
            <div className={cx('content', { ['guide-conten']: type })}>
                <ul className={cx('list-guide')}>
                    {!!guideData.length &&
                        guideData.map((item) => (
                            <li className={cx('guide-item')} key={item.id}>
                                <Taga
                                    href={`/info/question${item.href}`}
                                    title={item.title}
                                    className={cx('guide-link')}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default Guide;
