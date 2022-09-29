import classNames from 'classnames/bind';
import styles from './Taga.module.scss';

const cx = classNames.bind(styles);

function Taga({ href, className, title }) {
    return (
        <a href={href} className={`${cx('all-view')} ${className}`}>
            <span>{title}</span>
        </a>
    );
}

export default Taga;
