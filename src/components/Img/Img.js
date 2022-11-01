import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Img.module.scss';
import imgs from '~/assets/imgs';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Img({ href, src, alt = 'ảnh sách', className, loading }) {
    return (
        <Link to={href} className={cx(className)}>
            <img src={src} alt={alt} loading={loading} />
        </Link>
    );
}

export default Img;
