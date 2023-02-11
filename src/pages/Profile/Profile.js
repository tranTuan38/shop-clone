import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import { useGetUserAction } from '~/hooks';
import UserInfo from './UserInfo';
import UserAction from './UserAction';

const cx = classNames.bind(styles);

function Profile() {
    const [firstRender, setFirstRender] = useState(0);
    const { id } = useParams();
    const data = useGetUserAction(+id);
    const navigate = useNavigate();
    const { user, userRead, userPost } = data;

    useEffect(() => {
        if (user) {
            document.title = user.name;
        }

        if (!firstRender) {
            setFirstRender(firstRender + 1);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, data]);

    useEffect(() => {
        if (firstRender && !user) {
            navigate('/not-found', { state: { title: 'Nội dung không tồn tại hoặc đã bị xóa.' } });
            return;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [firstRender]);

    return (
        <div className={cx('wrapper')}>
            <div className="row reverse">
                <div className="col l-8 m-12 c-12">
                    <div className={cx('content')}>
                        <UserAction data={[userRead, userPost]} />
                    </div>
                </div>
                <div className="col l-4 m-12 c-12">
                    <UserInfo data={data} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
