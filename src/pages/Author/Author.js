import classNames from 'classnames/bind';

import styles from './Author.module.scss';

const cx = classNames.bind(styles);

function Author() {
    return <div className={cx('wrapper')}>Author</div>;
}

export default Author;
