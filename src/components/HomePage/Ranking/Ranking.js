import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';

import { ContentPage, UpdateBook } from '~/components/HomePage';
import { removeVietnameseTones } from '~/handler';

import { useGetRankWeek, useViewport } from '~/hooks';
import RankItem from './RankItem';
import MobileRank from '../MobileRank';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Ranking() {
    const data = useGetRankWeek();
    const viewPort = useViewport();
    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };
    return (
        <div className={cx('wrapper')}>
            {viewPort ? (
                <MobileRank data={data} />
            ) : (
                <div className="row">
                    {data.map((item, index) => (
                        <RankItem data={item} key={index} type={index} formatLink={formatLink} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default memo(Ranking);
