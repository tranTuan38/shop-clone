import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Sugges from './Sugges';
import Reading from './Reading';
import { useGetProperties, useGetReadingBook } from '~/hooks';
import { listGuide } from '~/initdata';

const cx = classNames.bind(styles);

function Content() {
    const [listData, data] = useGetProperties();
    const [listReadingData, read] = useGetReadingBook();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className="row">
                    <Sugges data={data} type={'sugges'} />
                    <Reading data={[read, listGuide]} type={'reading'} />
                </div>
            </div>
        </div>
    );
}

export default Content;
