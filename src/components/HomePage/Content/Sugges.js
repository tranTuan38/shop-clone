import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { useNavigate } from 'react-router-dom';

import Taga from '~/components/Taga';
import Img from '~/components/Img';
import BookItem from '~/components/BookItem';

const cx = classNames.bind(styles);

function Sugges({ data, type }) {
    const navigate = useNavigate();

    const handlerNavigatePage = (event, name, link) => {
        event.preventDefault();
        navigate(link);
        window.scrollTo({ top: 0 });
    };

    return (
        <div className="col l-8 m-8 c-8">
            <div className={cx('sugges')}>
                <div className={cx('media-title', { ['sugges-title']: type })}>
                    <h2 className={cx('title')}>Biên tập viên đề cử</h2>
                    <Taga
                        href="/list-book/?sort_by=new_chap_at"
                        className={cx('all')}
                        title="Xem tất cả"
                        onClick={handlerNavigatePage}
                    />
                </div>
                <BookItem data={data} type={'sugges'} />
            </div>
        </div>
    );
}

export default Sugges;
