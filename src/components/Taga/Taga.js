import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Taga.module.scss';

const cx = classNames.bind(styles);

function Taga({ href, className, title, onClick = () => {} }) {
    return (
        <Link to={href} className={`${cx('all-view')} ${className}`} onClick={(e) => onClick(e, title, href)}>
            <span>{title}</span>
        </Link>
    );
}

export default Taga;
