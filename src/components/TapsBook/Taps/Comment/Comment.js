import classNames from 'classnames/bind';
import { memo, useState } from 'react';

import styles from './Comment.module.scss';
import UserComment from '~/components/UserComment';
import InputReply from '~/components/UserComment/Reply/InputReply';
import BySelectData from '~/components/BySelectData';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

const listOption = [
    { value: 'like_count', title: 'Lượt thích' },
    { value: 'id', title: 'Mới nhất' },
    { value: 'oldest', title: 'Cũ nhất' },
];

function Comment({ listDataCmt }) {
    const [value, setValue] = useState('id');

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('nav')}>
                        <div className={cx('h4')}>0 bình luận</div>
                        <BySelectData value={value} setValue={setValue} data={listOption} />
                    </div>
                    <InputReply
                        styleAvatar={{ width: '45px', marginTop: '0', marginRight: '16px', alignSelf: 'center' }}
                        styleForm={{ marginTop: '16px', padding: '0' }}
                    />
                    <div className={cx('list-media')}>
                        <UserComment />
                    </div>
                </div>
                <div className="col c-4"></div>
            </div>
        </div>
    );
}

export default memo(Comment);
