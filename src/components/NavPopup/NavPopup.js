import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';

import styles from './NavPopup.module.scss';
import ModalContainer from '../ModalContainer';

const cx = classNames.bind(styles);

function NavPopup({ className, formName, item, closeOnDocumentClick = false, onOpen, onClose }) {
    return (
        <div className={`${className} ${cx('nav-right')} `}>
            <Popup
                modal
                closeOnDocumentClick={closeOnDocumentClick}
                overlayStyle={{
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    alignItems: 'center',
                    transition: 'opacity .15s linear',
                    overFlow: 'hidden',
                    disPlay: formName ? 'flex' : 'none',
                }}
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
                trigger={item}
                onOpen={onOpen}
                onClose={onClose}
            >
                {(close) => <ModalContainer formName={formName} close={close} />}
            </Popup>
        </div>
    );
}

export default NavPopup;
