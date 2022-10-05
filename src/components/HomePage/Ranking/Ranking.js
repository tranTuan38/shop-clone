import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';

import { ContentPage, UpdateBook } from '~/components/HomePage';

import { useGetRankWeek } from '~/hooks';
import RankItem from './RankItem';

const cx = classNames.bind(styles);

function Ranking() {
    const data = useGetRankWeek();
    return (
        <div className={cx('wrapper')}>
            <div className="row">
                {data.map((item, index) => (
                    <RankItem data={item} key={index} type={index} />
                ))}
            </div>
        </div>
    );
}

export default Ranking;
