import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { memo } from 'react';

import styles from '../Chapter.module.scss';
import ActionLogin from '~/components/ActionLogin';

const cx = classNames.bind(styles);

const listUserAction = [
    { id: 0, type: 'rate', title: 'Đánh giá', icon: 'icon-star', modalContent: Fragment },
    { id: 1, type: 'nominate', title: 'Đề cử', icon: 'icon-flower', modalContent: Fragment },
    { id: 2, type: 'gift', title: 'Tặng quà', icon: 'icon-gift', modalContent: Fragment },
];

function UserAction({ isLogin, onShowForm = () => {} }) {
    const handlerOpen = (type) => {
        const btnDom = document.querySelector(`[data-chapter=${type}]`);
        if (btnDom) {
            btnDom.classList.add(cx('btn-clicked'));
        }
    };

    const handlerClose = (type) => {
        const btnDom = document.querySelector(`[data-chapter=${type}]`);
        if (btnDom) {
            btnDom.classList.remove(cx('btn-clicked'));
        }
    };

    return (
        <div className={cx('action')}>
            {listUserAction.map((item) => {
                const ModalComponent = item.modalContent;

                return (
                    <ActionLogin
                        isLogin={isLogin}
                        key={item.type}
                        onOpen={() => handlerOpen(item.type)}
                        onClose={() => handlerClose(item.type)}
                    >
                        <button
                            data-chapter={item.type}
                            className={cx('btn-action', { login: isLogin })}
                            onClick={() => onShowForm(item.id)}
                        >
                            <i className={`nh-icon ${item.icon}`} />
                            <span>{item.title}</span>
                        </button>
                    </ActionLogin>
                );
            })}
        </div>
    );
}

export default memo(UserAction);
