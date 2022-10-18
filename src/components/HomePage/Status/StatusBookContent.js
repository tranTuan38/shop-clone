import classNames from 'classnames/bind';
import styles from './Status.module.scss';

import { useGetAddNewBook, useGetCompletedNewBook } from '~/hooks';
import Taga from '~/components/Taga';
import BookItem from '~/components/BookItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function StatusBookContent({ data, formatLink, genreLink }) {
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
                    <Link className={cx('category')} to={genreLink(data.category)}>
                        <span>{data.category}</span>
                    </Link>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Link className={cx('btn')} to={formatLink(data.name)}>
                    Đọc ngay
                </Link>
            </div>
        </div>
    );
}

export default StatusBookContent;
