import classNames from 'classnames/bind';
import { memo, useRef } from 'react';

import styles from './Setting.module.scss';
import FormGroup from '~/components/FormGroup';
import { useStore } from '~/hooks';
import { handlerChangeUserData } from '~/handler';
import { actions } from '~/components/store';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

const formGroupPasswords = [
    { id: 'password', type: 'input', typeInput: 'password', title: 'Mật khẩu hiện tại' },
    { id: 're-password', type: 'input', typeInput: 'password', title: 'Mật khẩu mới' },
    { id: 're-password-2', type: 'input', typeInput: 'password', title: 'Xác nhận mật khẩu mới' },
];

function UserSecurity({ data }) {
    const [state, dispatch] = useStore();
    const userRef = useRef();

    const handlerSubmit = (e) => {
        const userRefChildren = Array.from(userRef.current.children);

        const listInputs = userRefChildren.map((child) => {
            const input = child.querySelector('[id]');
            return input;
        });

        const listInputsId = listInputs.map((input) => input.id);
        const listInputsData = listInputs.map((input) => input.value);

        const isRequired = listInputsData.every((value) => value);

        if (isRequired) {
            for (let i = 0; i < listInputsId.length; i++) {
                if (listInputsId[i] === 'password') {
                    if (listInputsData[i] === data.password) {
                        continue;
                    } else {
                        toastReact(3, 'Lỗi', 'Mật khẩu hiện tại không đúng, vui lòng kiểm tra lại!');
                        break;
                    }
                } else {
                    if (listInputsData[i] === listInputsData[i + 1]) {
                        handlerChangeUserData(data.id, listInputsId[0], listInputsData[i]);
                        listInputs[0].value = listInputsData[i];
                        listInputs[i].value = '';
                        listInputs[i + 1].value = '';
                        dispatch(actions.setUserDatabase({ userPassword: listInputsData[i] }));
                        toastReact(1, 'Thành công', 'Cập nhật thành công!');
                        break;
                    } else {
                        toastReact(3, 'Lỗi', 'Mật khẩu nhập lại không đúng, vui lòng nhập lại!');
                        break;
                    }
                }
            }
        } else {
            listInputsData.forEach((item, index) => {
                if (!item) {
                    listInputs[index].classList.add(cx('require'));
                }
            });
        }

        // console.log('isRequired: ', isRequired);
        // console.log('listInputsId: ', listInputsId);
        // console.log('listInputsData: ', listInputsData);
    };

    const handlerFocusInputs = (e) => {
        e.target.classList.remove(cx('require'));
    };

    // console.log(data);

    return (
        <div className={cx('container')}>
            <div className={cx('info')} ref={userRef}>
                {formGroupPasswords.map((group, i) => {
                    return (
                        <FormGroup
                            key={i}
                            id={group.id}
                            type={group.type}
                            title={group.title}
                            typeInput={group.typeInput}
                            onFocus={handlerFocusInputs}
                        />
                    );
                })}
            </div>
            <div className={cx('update')}>
                <button className={cx('btn')} onClick={handlerSubmit}>
                    Cập nhật
                </button>
            </div>
        </div>
    );
}

export default memo(UserSecurity);
