import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Taga from '~/components/Taga';
import Img from '~/components/Img';
import BookItem from '~/components/BookItem';

const cx = classNames.bind(styles);

function Sugges({ data, type }) {
    return (
        <div className="col c-8">
            <div className={cx('sugges')}>
                <div className={cx('media-title', { ['sugges-title']: type })}>
                    <h2 className={cx('title')}>Biên tập viên đề cử</h2>
                    <Taga href="/" className={cx('all')} title="Xem tất cả" />
                </div>
                <BookItem data={data} type={'sugges'} />
            </div>
        </div>
    );
}

export default Sugges;
