import { memo } from 'react';

import Form from '~/components/Form';
import MobileForm from '~/components/Form/MobileForm';
import NavPopup from '~/components/NavPopup';
import { useViewport } from '~/hooks';

function ActionLogin({
    isLogin = false,
    notShow = false,
    style = {},
    onOpen = () => {},
    onClose = () => {},
    children,
}) {
    const viewPort = useViewport();
    let navProps = {};

    if (!isLogin) {
        navProps = {
            content: viewPort ? MobileForm : Form,
            className: 'nav-item',
            closeOnDocumentClick: false,
            formName: 'login',
            overlayStyle: {
                backgroundColor: 'rgba(0,0,0,0.4)',
                alignItems: 'center',
                transition: 'opacity .15s linear',
                overFlow: 'hidden',
                zIndex: 1001,
            },
            style: { ...style },
            contentStyle: { backgroundColor: '#fff', borderRadius: '8px' },
            item: children,
            onOpen: onOpen,
            onClose: onClose,
        };
    }

    return isLogin || (notShow && viewPort) ? children : <NavPopup {...navProps} />;
}

export default memo(ActionLogin);
