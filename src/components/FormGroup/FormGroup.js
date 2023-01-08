import classNames from 'classnames/bind';
import { useEffect, useRef, useState, Fragment } from 'react';
import { memo } from 'react';

import styles from './FormGroup.module.scss';

const cx = classNames.bind(styles);

const listTypeFormGroup = ['input', 'select', 'textarea'];

function FormGroup({ type = 'input', title, typeInput, id, data = [], spellCheck = false, ...props }) {
    let Component = type;
    let componentProps = {};
    const [userData, optionsData] = data;
    const [value, setValue] = useState(userData);

    const handlerOnChange = (e) => {
        setValue(e.target.value);
    };

    let listProps = { id, type: typeInput, ...props };
    if (!optionsData) {
        if (id !== 'password' && id !== 're-password' && id !== 're-password-2') {
            componentProps = {
                ...listProps,
                placeholder: userData,
                spellCheck,
                value: value,
                onChange: handlerOnChange,
            };
        } else {
            componentProps = { ...listProps, spellCheck };
        }
    } else {
        componentProps = { ...listProps, value: value || '', onChange: handlerOnChange };
    }

    return (
        <div className={cx('wrapper')}>
            <label className={cx('title')}>{title}</label>
            {!optionsData ? (
                <Component className={cx('control')} {...componentProps} />
            ) : (
                <Component className={cx('control')} {...componentProps}>
                    {optionsData.map((option, key) => (
                        <option key={key} value={option.value}>
                            {option.title}
                        </option>
                    ))}
                </Component>
            )}
        </div>
    );
}

export default memo(FormGroup);
