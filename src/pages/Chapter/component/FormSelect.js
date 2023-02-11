import classNames from 'classnames/bind';
import { forwardRef, Fragment, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';

import styles from '../Chapter.module.scss';
import toastReact from '~/components/ToastMessages';
import TranslateForm from '~/components/Form/TranslateForm';
import NominateForm from '~/components/Form/NominateForm';
import GiftForm from '~/components/Form/GiftForm';

const listForm = [TranslateForm, NominateForm, GiftForm];

const cx = classNames.bind(styles);

function FormSelect({ type }, ref) {
    const [formId, setFormId] = useState();
    const [show, setShow] = useState(false);
    let Component = Fragment;
    let propsCom = {};

    // console.log(formId);

    const handlerCloseForm = () => {
        setShow(false);
        setFormId(undefined);
    };

    if (Number.isInteger(formId)) {
        Component = listForm[formId];
        propsCom = {
            toast: toastReact,
            onCloseForm: handlerCloseForm,
        };
    }

    useImperativeHandle(ref, () => ({
        onShow(id) {
            setShow(true);
            setFormId(id);
        },
        onHide() {
            setShow(false);
            setFormId(undefined);
        },
    }));

    // useEffect(() => {}, [formId]);

    return <>{show && <Component {...propsCom} />}</>;
}

export default memo(forwardRef(FormSelect));
