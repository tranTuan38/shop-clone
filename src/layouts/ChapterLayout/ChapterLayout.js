import classNames from 'classnames/bind';

import Header from '../component/Header';
import styles from './ChapterLayout.module.scss';
import { useStore } from '~/hooks';
import { handlerGetSetting } from '~/handler';
import { memo } from 'react';

const cx = classNames.bind(styles);

function ChapterLayout({ children }) {
    const [state] = useStore();
    const settings = handlerGetSetting(state.defaults);

    return (
        <div className={cx('wrapper')}>
            <Header
                headerProps={{ style: { backgroundColor: settings.headerColor, color: settings.textColor } }}
                headerClass="chapter"
            />
            <div className={cx('container')} style={{ backgroundColor: settings.containerColor }}>
                <div className={cx('content')} style={{ width: settings.widthContent }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default memo(ChapterLayout);
