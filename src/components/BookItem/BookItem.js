import classNames from 'classnames/bind';
import styles from './BookItem.module.scss';

import Taga from '~/components/Taga';
import Img from '~/components/Img';
import MediaItem from '~/components/MediaItem';

const cx = classNames.bind(styles);

function BookItem({ data, type }) {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className={cx('wrapper')} key={index}>
                        <div className="row">
                            {item.map((item, index) => {
                                return (
                                    <div key={index} className="col c-6">
                                        <MediaItem data={item} type={type} />
                                    </div>
                                );
                            })}
                        </div>
                        <hr className={cx('hr')} />
                    </div>
                );
            })}
        </>
    );
}

export default BookItem;
