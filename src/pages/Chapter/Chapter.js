import classNames from 'classnames/bind';

import styles from './Chapter.module.scss';

const cx = classNames.bind(styles);

function Chapter() {
    return <div className={cx('wrapper')}>123</div>;
}

export default Chapter;
