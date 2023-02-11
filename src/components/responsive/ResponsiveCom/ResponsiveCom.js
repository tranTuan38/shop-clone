import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import styles from './ResponsiveCom.module.scss';

const cx = classNames.bind(styles);

function ResponsiveCom(ComChild) {
    // console.log(props);
    return function (props) {
        return <ComChild cp={cx} {...props} />;
    };
}

export default ResponsiveCom;
