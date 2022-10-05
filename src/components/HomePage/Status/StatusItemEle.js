import classNames from 'classnames/bind';
import styles from './Status.module.scss';

import { useGetAddNewBook, useGetCompletedNewBook } from '~/hooks';
import Taga from '~/components/Taga';
import BookItem from '~/components/BookItem';

const cx = classNames.bind(styles);

function StatusItemEle({ data, id }) {
    return (
        <a className={cx('img-link')} href="#">
            <img src={data.bookImg} alt="product imgs" />
        </a>
    );
}

export default StatusItemEle;
