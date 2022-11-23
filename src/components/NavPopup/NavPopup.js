import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';

import styles from './NavPopup.module.scss';
import ModalContainer from '../ModalContainer';
import { memo } from 'react';

const cx = classNames.bind(styles);

function NavPopup({ className, formName, item, closeOnDocumentClick = false, overlayStyle, contentStyle }) {
    return (
        <div className={`${className} ${cx('nav-right')} `}>
            <Popup
                nested
                modal
                closeOnDocumentClick={closeOnDocumentClick}
                overlayStyle={overlayStyle}
                contentStyle={contentStyle}
                trigger={item}
            >
                {(close) => <ModalContainer formName={formName} close={close} />}
            </Popup>
        </div>
    );
}

export default memo(NavPopup);
