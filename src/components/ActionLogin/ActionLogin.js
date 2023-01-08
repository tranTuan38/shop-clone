import { memo } from 'react';

import Form from '~/components/Form';
import NavPopup from '~/components/NavPopup';

function ActionLogin({ isLogin = false, style = {}, onOpen, onClose, children }) {
    let navProps = {};

    if (!isLogin) {
        navProps = {
            content: Form,
            className: 'nav-item',
            closeOnDocumentClick: false,
            formName: 'login',
            overlayStyle: {
                backgroundColor: 'rgba(0,0,0,0.4)',
                alignItems: 'center',
                transition: 'opacity .15s linear',
                overFlow: 'hidden',
            },
            style: { ...style },
            contentStyle: { backgroundColor: '#fff', borderRadius: '8px' },
            item: children,
            onOpen: onOpen,
            onClose: onClose,
        };
    }

    return isLogin ? children : <NavPopup {...navProps} />;
}

export default memo(ActionLogin);
