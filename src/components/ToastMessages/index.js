import { toast } from 'react-toastify';
import ToastMessages from './ToastMessages';

import classNames from 'classnames/bind';

import styles from './ToastMessages.module.scss';

const cx = classNames.bind(styles);

const toastReact = (type, title, messages) => {
    let isSuccess = true;
    let toastProps = { title, messages };
    const toastType = ['info', 'success', 'warning', 'error'];

    if (type > 3 || !Number.isInteger(type)) {
        type = 3;
        messages = 'Có lỗi xảy ra với thể loại thông báo.';
        toastProps = { title: 'Lỗi', messages };
        isSuccess = false;
    }

    toast[toastType[type]](<ToastMessages {...toastProps} />, {
        className: cx('container'),
        theme: 'colored',
    });

    return isSuccess;
};

export default toastReact;
