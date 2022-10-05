import classNames from 'classnames/bind';
import styles from './Status.module.scss';

import { useGetAddNewBook, useGetCompletedNewBook } from '~/hooks';
import Taga from '~/components/Taga';
import BookItem from '~/components/BookItem';

const cx = classNames.bind(styles);

function StatusBookContent({ data }) {
    return (
        <div className={cx('book-content-wrapper')}>
            <div className={cx('book-content-info')}>
                <h2 className={cx('h2-info')}>{data.name}</h2>
                <div className={cx('book-description')}>{data.description}</div>
                <div className={cx('book-author')}>
                    <div className={cx('author')}>
                        <span className={cx('author-name')}>
                            <i className="nh-icon icon-user-edit"></i>
                            {data.authorName}
                        </span>
                    </div>
                    <a className={cx('category')}>
                        <span>{data.category}</span>
                    </a>
                </div>
            </div>
            <button>Đọc ngay</button>
        </div>
    );
}

export default StatusBookContent;
