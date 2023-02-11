import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { memo } from 'react';

import styles from './Setting.module.scss';
import FormGroup from '~/components/FormGroup';
import ReactCropper from '~/components/ReactCropper';
import OverLay from '~/components/OverLay';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handlerSetValueFormGroup } from '~/handler';
import { useStore } from '~/hooks';
import { userData } from '~/initdata';
import { actions } from '~/components/store';
import { handlerChangePosterName, handlerChangeUserData } from '~/handler';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

const formGroupData = [
    { id: 'name', type: 'input', typeInput: 'text', title: 'Tên hiển thị' },
    { id: 'birthday', type: 'input', typeInput: 'number', title: 'Năm sinh' },
    {
        id: 'sex',
        type: 'select',
        title: 'Giới tính',
        optionsData: [
            { title: 'Bí mật', value: 'secret' },
            { title: 'Nam', value: 'male' },
            { title: 'Nữ', value: 'female' },
        ],
    },
    { id: 'description', type: 'textarea', title: 'Giới thiệu ngắn' },
    { id: 'email', type: 'input', typeInput: 'email', title: 'Email' },
];

function UserFile({ data }) {
    const [url, setUrl] = useState();
    const [state, dispatch] = useStore();

    const inputRef = useRef();
    const userRef = useRef();

    const handlerClick = (e) => {
        inputRef.current.value = null;
        inputRef.current.click();
    };

    const handlerOnChange = (e) => {
        // const reader = new FileReader();
        const files = e.target.files;
        const file = files[0];
        const size = file.size;

        if (size > 1024 * 1024) {
            toastReact(
                3,
                'Lỗi',
                'Please select the image again because the image you selected is exceed the specified size',
            );
        } else {
            file.src = URL.createObjectURL(file);
            setUrl(file);

            // Chuyển hình ảnh thành dữ liệu nhị phân
            // reader.readAsDataURL(file);
            // reader.addEventListener('load', (e) => {
            //     const fileImg = new File([e.target.result], 'img', { type: 'image/png' });

            //     // setUrl(e.target.result);
            // });
        }
    };

    const handlerOnSetData = (dataCrop) => {
        if (typeof dataCrop !== 'undefined') {
            const cropData = dataCrop.getCroppedCanvas().toDataURL();
            const binary = atob(cropData.split(',')[1]);
            const array = [];

            for (let i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }

            const file = new File([new Uint8Array(array)], `avatar-${url?.name}`, { type: 'image/png' });
            const imgSrc = URL.createObjectURL(file);

            handlerChangeUserData(data.id, 'avatar', imgSrc);

            setUrl();
            dispatch(actions.setUserDatabase({}));
        }
    };

    const handlerOnClose = (e) => {
        setUrl();
    };

    const handlerSubmit = (e) => {
        const userRefChildren = Array.from(userRef.current.children);

        const listInputs = userRefChildren.map((child) => {
            const input = child.querySelector('[id]');
            return input;
        });

        const listInputsId = listInputs.map((input) => input.id);
        const listInputsData = listInputs.map((input) => input.value);

        const listChangesData = listInputsId.reduce((acc, id, index) => {
            if (listInputsData[index] && listInputsData[index].trim() !== data[id].trim()) {
                acc = [...acc, { index, id, value: listInputsData[index].trim() }];
            }

            return acc;
        }, []);

        if (listChangesData.length) {
            let isEmailChange = false;
            let emailValue;
            let isNameCheck = false;
            listChangesData.forEach((changeKey) => {
                if (changeKey.id === 'name') {
                    handlerChangePosterName(data.name, changeKey.value);
                }

                if (changeKey.id === 'email') {
                    isEmailChange = true;
                    emailValue = changeKey.value;
                }
                isNameCheck = handlerChangeUserData(data.id, changeKey.id, changeKey.value);
            });

            if (isEmailChange && !isNameCheck) {
                dispatch(actions.setUserDatabase({ userEmail: emailValue }));
                toastReact(1, 'Thành công', 'Cập nhật thành công!');
                return;
            }

            if (!isNameCheck) {
                dispatch(actions.setUserDatabase({}));
                toastReact(1, 'Thành công', 'Cập nhật thành công!');
            }
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('avatar')}>
                <img alt={data.name} src={data.avatar} className={cx('img')} onClick={handlerClick} />
                <span className={cx('note')}>ấn vào ảnh trên để đổi ảnh đại diện, file ảnh không nặng quá 1MB</span>
                <div className={cx('avatar-cropper')}>
                    <input
                        ref={inputRef}
                        type="file"
                        className={cx('input')}
                        accept="image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
                        onChange={handlerOnChange}
                    />
                    {!!url && (
                        <OverLay>
                            <div className={cx('close')}>
                                <button className={cx('btn-close')} onClick={handlerOnClose}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>
                            <div className={cx('avatar-cropper-container')}>
                                <ReactCropper
                                    url={url.src}
                                    ActionItem={({ dataCrop }) => {
                                        return (
                                            <div className={cx('action')}>
                                                <button onClick={handlerOnClose}>Hủy</button>
                                                <button onClick={(e) => handlerOnSetData(dataCrop)}>Đồng ý</button>
                                            </div>
                                        );
                                    }}
                                />
                            </div>
                        </OverLay>
                    )}
                </div>
            </div>
            <hr />
            <div className={cx('info')} ref={userRef}>
                {formGroupData.map((group, i) => {
                    const valueForm = handlerSetValueFormGroup(group.id, data);
                    let dataForm = [valueForm];

                    if (group.optionsData) {
                        dataForm.push(group.optionsData);
                    }
                    return (
                        <FormGroup
                            key={i}
                            id={group.id}
                            type={group.type}
                            title={group.title}
                            typeInput={group.typeInput}
                            data={dataForm}
                        />
                    );
                })}
            </div>
            <span className={cx('note')}>Lưu ý: nếu đổi email phải vào email cũ xác nhận thì mới có hiệu lực</span>
            <div className={cx('update')}>
                <button className={cx('btn')} onClick={handlerSubmit}>
                    Cập nhật
                </button>
            </div>
        </div>
    );
}

export default memo(UserFile);
