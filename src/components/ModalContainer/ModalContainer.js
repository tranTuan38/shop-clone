import classNames from 'classnames/bind';
import styles from './ModalContainer.module.scss';

import { Check } from '~/components/Icons';
import Form from '~/components/Form';

const cx = classNames.bind(styles);

function ModalContainer({ formName, close }) {
    return (
        <div className={cx('modal')}>
            <div className={cx('inner')}>
                <Form formName={formName} close={close} />
            </div>
        </div>
    );
}

export default ModalContainer;
