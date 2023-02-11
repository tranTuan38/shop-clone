import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { memo } from 'react';

import styles from './MobileTapCom.module.scss';
import { handlerSetFanLevel } from '~/handler';
import imgs from '~/assets/imgs';

const cx = classNames.bind(styles);

function MobileFan({ data = [], isMenu = false }) {
    // console.log(data);

    const handlerSetImgLevel = (point = 0) => {
        const imgsSrc = imgs.imgsGuide.find((img) => img.point <= point);

        return imgsSrc.src;
    };

    return (
        <div className={cx('list-fan')}>
            {data.map((fan) => {
                const isShow = fan.top === 1 || fan.top === 2 || fan.top === 3;
                const fanLevel = handlerSetFanLevel(fan.userPoint);
                const srcImgLevel = handlerSetImgLevel(fan.userPoint);

                return (
                    <div className={cx('fan-item', { index: isShow })} key={fan.userId}>
                        <span className={cx('fan-rank')}>{fan.top}</span>
                        <div className={cx('fan-body')}>
                            <div className={cx('fan-info', { ['top-rank']: isShow, ['top-menu']: isMenu })}>
                                <div className={cx('info-content')}>
                                    {isMenu && (
                                        <Link
                                            className={cx('fan-avatar')}
                                            to={`/profile/${fan.userId}`}
                                            style={{ marginRight: '16px', marginLeft: '0' }}
                                        >
                                            <img alt={fan.userName} src={fan.userAvatar} />
                                        </Link>
                                    )}
                                    <div className={cx('info-body')}>
                                        <div className={cx('info-user')}>
                                            <h2 className={cx('fan-name')}>{fan.userName}</h2>
                                            {isMenu && (
                                                <div className={cx('info-level')}>
                                                    <img alt={fanLevel} src={srcImgLevel} />
                                                </div>
                                            )}
                                        </div>
                                        <span className={cx('fan-point')}>
                                            {fan.userPoint}
                                            {isShow && !isMenu && ' điểm ái mộ'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {isShow && !isMenu && (
                                <Link className={cx('fan-avatar')} to={`/profile/${fan.userId}`}>
                                    <img alt={fan.userName} src={fan.userAvatar} />
                                </Link>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default memo(MobileFan);
