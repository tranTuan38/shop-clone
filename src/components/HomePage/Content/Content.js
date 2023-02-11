import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Sugges from './Sugges';
import Reading from './Reading';
import { useGetProperties, useGetReadingBook, useViewport } from '~/hooks';
import { listGuide } from '~/initdata';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Content() {
    const [listData, data] = useGetProperties();
    const [listReadingData, read] = useGetReadingBook();
    const viewPort = useViewport();

    // console.log(data);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {viewPort ? (
                    <>{read && <Reading data={[read, listGuide]} type={'reading'} viewPort={viewPort} />}</>
                ) : (
                    <div className="row">
                        {data && <Sugges data={data} type={'sugges'} />}
                        <div className="col c-4">{read && <Reading data={[read, listGuide]} type={'reading'} />}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default memo(Content);
