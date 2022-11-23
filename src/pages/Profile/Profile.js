import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './Profile.module.scss';
import { useGetUserAction } from '~/hooks';
import UserInfo from './UserInfo';
import UserAction from './UserAction';

const cx = classNames.bind(styles);

function Profile() {
    const { id } = useParams();
    const data = useGetUserAction(+id);
    const { user, userRead, userPost } = data;

    useEffect(() => {
        if (user) {
            document.title = user.name;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, data]);

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col c-8">
                    <div className={cx('content')}>
                        <UserAction data={[userRead, userPost]} />
                    </div>
                </div>
                <div className="col c-4">
                    <UserInfo data={data} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
