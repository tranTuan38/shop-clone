import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Img.module.scss';

const cx = classNames.bind(styles);

function Img({ href, src, alt, className }) {
    return (
        <a href={href} className={cx(className)}>
            <img src={src} alt={alt} />
        </a>
    );
}

export default Img;
