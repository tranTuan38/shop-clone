import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';

import styles from './Bonus.module.scss';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

const listBonusData = [
    {
        type: 'every',
        typeData: [
            { title: 'Tặng quà cho tác giả hoặc dịch giả', exp: 15, candy: 0 },
            { title: 'Check-in', exp: 0, candy: 500 },
            { title: 'Đọc 5 chương của một truyện chưa từng đọc', exp: 10, candy: 0 },
            { title: 'Thêm 1 bình luận', exp: 3, candy: 0 },
            { title: 'Tặng hoa cho 3 truyện', exp: 0, candy: 300 },
            { title: 'Xem video quảng cáo', exp: 0, candy: 0, random: 'Kẹo ngẫu nhiên' },
        ],
    },
    {
        type: 'once',
        typeData: [
            { title: 'Cập nhật đầy đủ thông tin cá nhân', exp: 5, candy: 5000 },
            { title: 'Đọc 10 chương truyện', exp: 20, candy: 0 },
            { title: 'Đã có 03 bình luận có nội dung chất lượng từ 31/10 -> 30/11', exp: 0, candy: 10000 },
            { title: 'Đã có 01 đánh giá có nội dung chất lượng từ 31/10 -> 30/11', exp: 0, candy: 10000 },
            { title: 'Tặng hoa cho 3 truyện', exp: 0, candy: 300 },
        ],
    },
];

const listClass = ['primary', 'danger', 'success', 'none'];

function Bonus({ type }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const typeIndex = listBonusData.findIndex((item) => item.type === type);
        if (Number.isInteger(typeIndex)) {
            setData(listBonusData[typeIndex].typeData);
        }
    }, []);

    const handlerClick = (e) => {
        toastReact(3, 'Lỗi', 'Chức năng chưa được hỗ trợ, vui lòng thông cảm!');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('list')}>
                        {data.map((item, index) => {
                            let subExp;
                            let navClass = 'danger';
                            if (item.exp && item.candy) {
                                subExp = `${item.candy} Kẹo + ${item.exp} Exp`;
                            } else if (item.exp) {
                                subExp = `${item.exp} Exp`;
                                navClass = 'primary';
                            } else if (item.candy) {
                                subExp = `${item.candy} Kẹo`;
                            } else if (item.random) {
                                subExp = item.random;
                            }

                            return (
                                <div className={cx('item')} key={index}>
                                    <div className={cx('info')}>
                                        <p className={cx('title')}>{item.title}</p>
                                        <p className={cx('exp')}>{subExp}</p>
                                    </div>
                                    <button className={cx('btn', { [navClass]: navClass })} onClick={handlerClick}>
                                        Nhận thưởng
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <p className={cx('p')}>
                    Đây là nơi để bạn có thể nhận thưởng cho các hoạt động
                    <span> ĐÃ </span>
                    tham gia trong web/app, không khuyến khích vì nhận thưởng mà cố tự tạo ra các hoạt động ảo, hoạt
                    động spam. Tùy vào lịch sử hoạt động của mỗi người sẽ thấy các phần thưởng khác nhau, đừng thắc mắc
                    vì sao người khác có thể nhận thưởng các phần thưởng khác của mình.
                </p>
            </div>
        </div>
    );
}

export default memo(Bonus);
