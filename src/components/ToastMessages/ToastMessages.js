import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import styles from './ToastMessages.module.scss';

const cx = classNames.bind(styles);

function ToastMessages({ title, messages, closeToast, toastProps }) {
    if (Array.isArray(messages)) {
        messages = messages.map((message, i) => ({ id: i, value: message }));
    } else {
        messages = [{ id: 0, value: messages }];
    }

    // console.log(messages);
    // toastProps.bodyClassName = 'toast-123';
    return (
        <div className={cx('content')}>
            <h4 className={cx('title')}>{title}</h4>
            <div className={cx('body')}>
                {messages.map((message) => (
                    <p key={message.id} className={cx('message')}>
                        {message.value}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default ToastMessages;
