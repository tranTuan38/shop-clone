import { toast } from 'react-toastify';

import classNames from 'classnames/bind';

import styles from './ToastMessages.module.scss';
import { useViewport } from '~/hooks';
import ToastMessages from './ToastMessages';

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
        draggable: window.innerWidth <= 1024 ? false : true,
    });

    return isSuccess;
};

export default toastReact;
