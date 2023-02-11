import classNames from 'classnames/bind';
import styles from './ResponsiveCom.module.scss';

function classResponsive(curClass, resClass) {
    const cx = classNames.bind(this);
    const cr = classNames.bind(styles);
    console.log(cx(curClass));
    console.log(cr(resClass));

    return ``;
}

export default classResponsive;
