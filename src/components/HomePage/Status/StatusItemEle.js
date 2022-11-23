import classNames from 'classnames/bind';
import styles from './Status.module.scss';

import { useGetAddNewBook, useGetCompletedNewBook } from '~/hooks';
import { removeVietnameseTones } from '~/handler';
import Taga from '~/components/Taga';
import BookItem from '~/components/BookItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function StatusItemEle({ data, id, formatLink, nameSearch, navigate, onClick = () => {} }) {
    return (
        <Link className={cx('img-link')} to={formatLink(data.name)} onClick={(e) => onClick(e, data.name)}>
            <img src={data.bookImg} alt="product imgs" />
        </Link>
    );
}

export default StatusItemEle;
