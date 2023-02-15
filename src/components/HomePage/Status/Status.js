import classNames from 'classnames/bind';
import styles from './Status.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/controller';
import 'swiper/css/thumbs';

import { useGetAddNewBook, useGetCompletedNewBook, useViewport } from '~/hooks';
import Taga from '~/components/Taga';
import BookItem from '~/components/BookItem';
import StatusItem from './StatusItem';
import { memo } from 'react';

const cx = classNames.bind(styles);

function Status() {
    const addListBook = useGetAddNewBook();
    const completedBook = useGetCompletedNewBook();
    const viewPort = useViewport();

    return (
        !viewPort && (
            <div className={cx('wrapper')}>
                <div className="row">
                    <div className="col l-4 m-4 c-4">
                        <div className={cx('content', { ['add-content']: addListBook })}>
                            <div className={cx('new-book')}>
                                <h2 className={cx('h2')}>Mới đăng</h2>
                                <Taga
                                    className={cx('status-link')}
                                    href="/list-book/?sort_by=create_at"
                                    title="Xem tất cả"
                                />
                            </div>
                            <div className={cx('inner', { ['slider-thumb']: addListBook })}>
                                <StatusItem data={addListBook} type="add-book" />
                            </div>
                        </div>
                    </div>
                    <div className="col l-8 m-8 c-8">
                        <div className={cx('content', { ['completed-content']: completedBook })}>
                            <div className={cx('completed')}>
                                <h2 className={cx('h2')}>Mới hoàn thành</h2>
                                <Taga
                                    className={cx('status-link')}
                                    href="/list-book/?sort_by=new_chap_at&status=0"
                                    title="Xem tất cả"
                                />
                            </div>
                            <div className={cx('inner')}>
                                <BookItem data={completedBook} type="status" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default memo(Status);
