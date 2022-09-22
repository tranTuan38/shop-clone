import classNames from 'classnames/bind';
import styles from './PageContent.module.scss';

const cx = classNames.bind(styles);

function PageContent() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}></div>
        </div>
    );
}

export default PageContent;
