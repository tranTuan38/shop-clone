import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from '../BookMedia.module.scss';
import { useGetListSelecter } from '~/hooks';
import { handlerSetLink } from '~/handler';
import { listAuthors } from '~/initdata';

const cx = classNames.bind(styles);

function ListTag({ data }) {
    const datas = useGetListSelecter();
    const { genre, status, prototypes } = datas;
    const bookListTag = [data.status, data.category, data.character, data.sect, data.sight, data.background];
    const dataLoop = [data.authorName, ...data.tagName, ...bookListTag];
    const dataLoopSelected = dataLoop.reduce((acc, item) => {
        if (!acc.includes(item)) {
            let itemCheck = item.toLowerCase();

            const isCheck = acc.some((itemAcc) => {
                return itemAcc.toLowerCase() === itemCheck;
            });

            if (!isCheck) {
                item = item.toLowerCase().replace(/(^|\s)\S/g, (l) => l.toUpperCase());
                acc.push(item);
            }
        }

        return acc;
    }, []);

    const { genreLink, authorLink } = handlerSetLink();
    const tags = [...datas.characters, ...datas.backGrg, ...datas.sects, ...datas.sights];

    const handlerSetLinkListTag = (type, value) => {
        let link;

        if (!type) {
            link = authorLink('author', value, listAuthors);
        } else {
            if (type === 1) {
                link = genreLink(value, 'status', status);
            } else if (type === 2) {
                link = genreLink(value, 'genre', genre);
            } else if (type > 2) {
                link = genreLink(value, 'tag', tags);
            }
        }
        return link;
    };

    return (
        <div className={cx('list-tag')}>
            <div className={cx('tag')}>
                {!!dataLoopSelected.length &&
                    dataLoopSelected.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={cx('link', {
                                    ['border-secondary']: index === 0,
                                    ['border-danger']: index === 1,
                                    ['border-primary']: index === 2,
                                    ['border-success']: index > 2,
                                })}
                            >
                                <Link className={cx('link-item')} to={handlerSetLinkListTag(index, item)}>
                                    {item}
                                </Link>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default ListTag;
