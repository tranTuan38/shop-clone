import classNames from 'classnames/bind';
import { memo, useRef } from 'react';

import styles from './Setting.module.scss';
import FormGroup from '~/components/FormGroup';
import { useStore } from '~/hooks';
import { actions } from '~/components/store';

const cx = classNames.bind(styles);

const listOptionOne = [
    { title: 'Bật', value: 'on' },
    { title: 'Tắt', value: 'off' },
];

const listOptionTwo = [
    { title: 'Mới lên chương', value: 'new-chap' },
    { title: 'Tên truyện', value: 'name-book' },
];

const formGroupConFigs = [
    {
        id: 'setNoticeChap',
        type: 'select',
        title: 'Thông báo chương mới',
        typeConfig: 'setNoticeChap',
        optionsData: listOptionOne,
    },
    {
        id: 'setInteractive',
        type: 'select',
        title: 'Thông báo tương tác',
        typeConfig: 'setInteractive',
        optionsData: listOptionOne,
    },
    {
        id: 'setReading',
        type: 'select',
        title: 'Sắp xếp truyện đang đọc theo',
        typeConfig: 'setReading',
        optionsData: listOptionTwo,
    },
    {
        id: 'setTicked',
        type: 'select',
        title: 'Sắp xếp truyện đánh dấu theo',
        typeConfig: 'setTicked',
        optionsData: listOptionTwo,
    },
];

function UserConFig() {
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

        const listChangesData = listInputsId.reduce((acc, id, index) => {
            if (listInputsData[index] !== state.config[id]) {
                acc = [...acc, { index, id, value: listInputsData[index].trim() }];
            }

            return acc;
        }, []);

        if (listChangesData.length) {
            const changeValue = listChangesData.reduce((acc, item) => {
                return { ...acc, [item.id]: item.value };
            }, {});

            dispatch(actions.setUserDatabase({ config: { ...state.config, ...changeValue } }));
            alert('Cập nhật thành công!');
        }

        // console.log('listInputsId: ', listInputsId);
        // console.log('listInputsData: ', listInputsData);
        // console.log('listChangesData: ', listChangesData);
    };

    return (
        <div className={cx('container')}>
            <div className={cx('info')} ref={userRef}>
                {formGroupConFigs.map((group, i) => {
                    let valueForm = state.config[group.typeConfig];
                    let dataForm;
                    let option;
                    if (group.id === 'setNoticeChap' || group.id === 'setInteractive') {
                        dataForm = [valueForm, group.optionsData];
                    } else {
                        if (i === 2) {
                            option = [...group.optionsData];
                            option.splice(1, 0, { title: 'Mới đọc', value: 'new-read' });
                            dataForm = [valueForm, option];
                        }

                        if (i === 3) {
                            option = [...group.optionsData];
                            option.splice(1, 0, { title: 'Mới đánh giấu', value: 'new-tick' });
                            dataForm = [valueForm, option];
                        }
                    }

                    return (
                        <div key={i}>
                            {i === 2 && <hr />}
                            <FormGroup id={group.id} type={group.type} title={group.title} data={dataForm} />
                        </div>
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

export default memo(UserConFig);
