import classNames from 'classnames/bind';
import { forwardRef, memo, useImperativeHandle, useState } from 'react';

import styles from './MobileTapCom.module.scss';
import MobileFormConstructor from '~/components/Form/MobileFormConstructor';
import MobileFan from './MobileFan';
import imgs from '~/assets/imgs';
import { handlerSetFanLevel } from '~/handler';
import PaginationPage from '~/components/PaginationPage';

const cx = classNames.bind(styles);

function MobileFanMenu({ data = [], loginData }, ref) {
    const [show, setShow] = useState(false);

    // console.log(loginData.userData());
    // console.log(loginData);
    // console.log(data);

    const useLoginData = loginData.userData();

    const handlerHideMenu = () => {
        setShow(false);
        document.body.style.overflow = 'auto';
    };

    useImperativeHandle(ref, () => ({
        show() {
            setShow(true);
            document.body.style.overflow = 'hidden';
        },
    }));

    const handlerSetUserLevel = () => {
        const user = data.find((user) => user.userId === useLoginData.id);

        if (user) return user;

        return { userPoint: 0 };
    };

    const handlerSetImgLevel = function () {
        const imgsSrc = imgs.imgsGuide.find((img) => img.point <= this.userPoint);

        return imgsSrc.src;
    };

    const userLevels = {
        ...handlerSetUserLevel(),
        srcLevel: handlerSetImgLevel,
    };

    // console.log(userLevels.srcLevel());

    return (
        show && (
            <MobileFormConstructor
                title="Người hâm mộ"
                // containerProps={{ padding: '16px 12px' }}
                close={handlerHideMenu}
            >
                <div className={cx('fan-menu')}>
                    {loginData.login && (
                        <div className={cx('media-level')}>
                            <div className={cx('media-body')}>
                                <div className={cx('media-avatar')}>
                                    <img alt={useLoginData.name} src={useLoginData.avatar} />
                                </div>
                                <div className={cx('media-info')}>
                                    <h2 className={cx('user-name')}>{useLoginData.name}</h2>
                                    <img alt={handlerSetFanLevel(userLevels.userPoint)} src={userLevels.srcLevel()} />
                                </div>
                                <span>{userLevels.userPoint}</span>
                            </div>
                        </div>
                    )}
                    <hr style={{ margin: '24px 0' }} />
                    <PaginationPage
                        data={data}
                        limit={10}
                        PageItem={MobileFan}
                        pageItemProps={{ isMenu: true }}
                        isScroll={false}
                        containerProps={{
                            style: { marginTop: '24px', justifyContent: 'center', marginBottom: '16px' },
                        }}
                    />
                </div>
            </MobileFormConstructor>
        )
    );
}

export default memo(forwardRef(MobileFanMenu));
