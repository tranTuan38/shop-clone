import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Taga from '~/components/Taga';

const cx = classNames.bind(styles);

function Guide({ data, type }) {
    return (
        <div className={cx('guide')}>
            <div className={cx('media-title', { ['guide-title']: type })}>
                <h2 className={cx('title')}>Hướng dẫn</h2>
                <Taga href="/" className={cx('all')} title="Xem tất cả" />
            </div>
            <div className={cx('content', { ['guide-conten']: type })}>
                <ul className={cx('list-guide')}>
                    {data.map((item) => (
                        <li className={cx('guide-item')} key={item.id}>
                            <Taga href={item.href} title={item.title} className={cx('guide-link')} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Guide;
