import classNames from 'classnames/bind';
import { memo, useCallback, useEffect, useState } from 'react';

import { handlerGetSetting } from '~/handler';
import { useStore, useViewport } from '~/hooks';
import styles from '../Chapter.module.scss';
import MobileFormConstructor from '~/components/Form/MobileFormConstructor';
import MobileChapMenu from '~/components/MobileBookMedia/MobileChapMenu';

const cx = classNames.bind(styles);

function MobileListChap({ data = [], bookName, onClose = () => {} }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => (document.body.style.overflow = 'auto');
    }, []);

    return (
        <MobileFormConstructor title="Danh sách chương" containerProps={{ padding: '16px 12px' }} close={onClose}>
            <MobileChapMenu data={data} bookName={bookName} onChange={onClose} />
        </MobileFormConstructor>
    );
}

export default memo(MobileListChap);
