import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Taga.module.scss';

const cx = classNames.bind(styles);

function Taga({ href, className, title }) {
    return (
        <Link to={href} className={`${cx('all-view')} ${className}`}>
            <span>{title}</span>
        </Link>
    );
}

export default Taga;
