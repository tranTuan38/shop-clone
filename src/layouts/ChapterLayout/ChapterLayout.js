import classNames from 'classnames/bind';

import Header from '../component/Header';
import styles from './ChapterLayout.module.scss';
import { useStore, useViewport } from '~/hooks';
import { handlerGetSetting } from '~/handler';
import { memo } from 'react';
import MobileSearch from '../mobileComponent/MobileSearch';

const cx = classNames.bind(styles);

function ChapterLayout({ children }) {
    const [state] = useStore();
    const viewPort = useViewport();
    const settings = handlerGetSetting(state.defaults);

    let props = {
        headerClass: 'chapter',
        headerProps: { style: { backgroundColor: settings.headerColor, color: settings.textColor } },
    };

    return (
        <div className={cx('wrapper')}>
            {viewPort ? (
                <MobileSearch {...props} />
            ) : (
                <Header
                    {...props}

                    // headerProps={{ style: { backgroundColor: settings.headerColor, color: settings.textColor } }}
                    // headerClass="chapter"
                />
            )}

            {/* <Header
                headerProps={{ style: { backgroundColor: settings.headerColor, color: settings.textColor } }}
                headerClass="chapter"
            /> */}
            <div className={cx('container')} style={{ backgroundColor: settings.containerColor }}>
                <div className={cx('content')} style={{ width: !viewPort && settings.widthContent }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default memo(ChapterLayout);
