import classNames from 'classnames/bind';
import styles from './UpadteNew.module.scss';

import { useGetProperties, useGetReadingBook, useGetCreateChater } from '~/hooks';
import { handleTime } from '~/handler';
import Taga from '~/components/Taga';

const cx = classNames.bind(styles);

function ListUpdate({ data }) {
    const time = new Date();
    console.log(data);
    return (
        <div className={cx('list-update')}>
            {data.map((item, index) => {
                const itemChapter = item.listChapter[item.listChapter.length - 1];
                const chapterName = itemChapter.nameChapter;
                const numberChapter = itemChapter.numberChapter;
                const timeChapter = itemChapter.timeCreatChapter;
                const timeItem = new Date(timeChapter);

                return (
                    <div className={cx('list-item', { backgrdColorIndex: index % 2 !== 0 })} key={index}>
                        <p className={cx('category')}>{item.category}</p>
                        <div className={cx('text-over')}>
                            <h2>
                                <a href="#" className={cx('link')}>
                                    {item.name}
                                </a>
                            </h2>
                        </div>
                        <div className={cx('text-over')}>
                            <a href="#" className={cx('link-chapter')}>{`Chương${numberChapter}: ${chapterName}`}</a>
                        </div>
                        <p className={cx('author')}>
                            <span>{item.authorName}</span>
                        </p>
                        <p className={cx('creator')}>
                            <span>{item.creator}</span>
                        </p>
                        <p className={cx('time')}>
                            <span>{handleTime(time, timeItem)}</span>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default ListUpdate;
