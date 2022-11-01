import classNames from 'classnames/bind';
import { memo } from 'react';

import styles from '../Review.module.scss';

const cx = classNames.bind(styles);

function Note() {
    return (
        <div className={cx('c4', { ['note']: true })}>
            <div className={cx('h5')}>Lưu ý khi đánh giá</div>
            <p className={cx('text')}>1. Không được dẫn link hoặc nhắc đến website khác</p>
            <p className={cx('text')}>2. Không được có những từ ngữ gay gắt, đả kích, xúc phạm người khác</p>
            <p className={cx('text')}>3. Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa</p>
            <p className={cx('text')}>
                4. Đánh giá hoặc bình luận chê truyện một cách chung chung không mang lại giá trị cho người đọc sẽ bị
                xóa
            </p>
            <p className={cx('text')}>5. Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa</p>
            <p className={cx('text', { ['italic']: true })}>
                Vui lòng xem và tuân theo đầy đủ các quy định tại Điều Khoản Dịch Vụ khi sử dụng website
            </p>
        </div>
    );
}

export default memo(Note);
