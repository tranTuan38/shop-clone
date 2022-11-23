import classNames from 'classnames/bind';

import styles from './InfoQuestion.module.scss';
import { listGuide } from '~/initdata';
import InfoItem from './InfoItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function InfoQuestion() {
    const [data, setData] = useState([]);
    const [listCheck, setListCheck] = useState({});

    useEffect(() => {
        setData(listGuide);
        const result = listGuide.reduce((acc, item, index) => {
            return { ...acc, [`id${index + 1}`]: false };
        }, {});
        setListCheck(result);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Những câu hỏi thường gặp</h2>
            <div className={cx('content')}>
                {!!data.length &&
                    data.map((item, index) => {
                        const keyValue = `id${item.id + 1}`;
                        const itemCheck = listCheck[keyValue];
                        return (
                            <InfoItem
                                id={item.id + 1}
                                value={keyValue}
                                key={index}
                                data={item}
                                itemCheck={itemCheck}
                                setListCheck={setListCheck}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default InfoQuestion;
