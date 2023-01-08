import classNames from 'classnames/bind';
import styles from './ModalContainer.module.scss';

const cx = classNames.bind(styles);

function ModalContainer({ formName, content, close }) {
    const Component = content;
    return (
        <div className={cx('modal')}>
            <div className={cx('inner')}>
                <Component formName={formName} close={close} />
            </div>
        </div>
    );
}

export default ModalContainer;
