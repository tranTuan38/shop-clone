import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from './UserItem.module.scss';
import { handlerSetFanLevel } from '~/handler';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function UserItem({ data }) {
    const navigate = useNavigate();

    const handlerNavigate = () => {
        navigate('/');
        window.scrollTo({ top: 0 });
    };

    return (
        <div className={cx('media')}>
            <div className={cx('rank', { top: [1, 2, 3, 4].includes(data.top) })}>
                <span
                    className={cx('number', {
                        'number-one': data.top === 1,
                        'number-two': data.top === 2,
                        'number-three': data.top === 3,
                        'number-four': data.top === 4,
                    })}
                >
                    {data.top}
                </span>
            </div>
            <div className={cx('content')} onClick={(e) => handlerNavigate()}>
                <div className={cx('avatar')}>
                    <img className={cx('img')} src={data.userAvatar} alt={data.userName} />
                </div>
                <div className={cx('info')}>
                    <div className={cx('info-name')}>
                        <span className={cx('name')}>{data.userName}</span>
                    </div>
                    <span className={cx('level')}>{handlerSetFanLevel(data.userPoint)}</span>
                </div>
            </div>
        </div>
    );
}

export default memo(UserItem);
