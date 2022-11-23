import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Img.module.scss';
import imgs from '~/assets/imgs';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Img({ name, href, src, alt = 'ảnh sách', className, loading, onClick = () => {} }) {
    return (
        <Link to={href} className={cx(className)} onClick={(e) => onClick(e, name)}>
            <img src={src} alt={alt} loading={loading} />
        </Link>
    );
}

export default memo(Img);
