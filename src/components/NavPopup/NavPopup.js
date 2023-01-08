import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';

import styles from './NavPopup.module.scss';
import ModalContainer from '../ModalContainer';
import { memo } from 'react';

const cx = classNames.bind(styles);

function NavPopup({
    className,
    formName,
    content,
    item,
    closeOnDocumentClick = false,
    overlayStyle,
    contentStyle,
    children,
    style = {},
    onOpen,
    onClose,
}) {
    return (
        <div className={`${className} ${cx('nav-right')} `} style={{ ...style }}>
            <Popup
                nested
                modal
                closeOnDocumentClick={closeOnDocumentClick}
                overlayStyle={overlayStyle}
                contentStyle={contentStyle}
                trigger={item || children}
                onOpen={onOpen}
                onClose={onClose}
            >
                {(close) => <ModalContainer formName={formName} content={content} close={close} />}
            </Popup>
        </div>
    );
}

export default memo(NavPopup);
