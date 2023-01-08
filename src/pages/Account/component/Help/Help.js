import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './Help.module.scss';

const cx = classNames.bind(styles);

function Help({ type }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('help')}>
                <p>
                    Trước khi yêu cầu hỗ trợ vui lòng đọc kỹ
                    <Link to="/info/question"> Những câu hỏi thường gặp</Link>, nếu vấn đề bạn cần hỗ trợ không có trong
                    những câu hỏi thường gặp hãy
                </p>
                <p>
                    - <span>Lưu ý:</span> Vui lòng không hỏi cách làm nhiệm vụ nhận thưởng, hỗ trợ viên sẽ không trả lời
                    bất cứ câu hỏi nào về vấn đề làm nhiệm vụ nhận thưởng
                </p>
            </div>
            <div className={cx('list-question')}>
                <h2>Danh sách trợ giúp & báo lỗi</h2>
            </div>
        </div>
    );
}

export default memo(Help);
