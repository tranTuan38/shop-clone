import classNames from 'classnames/bind';
import { memo, useState } from 'react';

import styles from './MobileChapter.module.scss';
import MobileWrapper from '~/components/MobileWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { handlerSetLink, handleTime } from '~/handler';
import MobileFormConstructor from '~/components/Form/MobileFormConstructor';
import MobileChapMenu from '~/components/MobileBookMedia/MobileChapMenu';

const cx = classNames.bind(styles);

function MobileChapter({ data = {} }) {
    const [show, setShow] = useState(false);
    const [showNavCom, setShowNavCom] = useState(false);
    const navgate = useNavigate();
    const listChapters = data.listChapter ?? [];
    const lastChapter = listChapters[listChapters?.length - 1] ?? {};

    const handlerSetLinkChap = (name, number) => {
        const { formatLink } = handlerSetLink();
        const numberChap = `chuong-${number}`;

        return formatLink(name) + '/' + numberChap;
    };
    // console.log(lastChapter);

    const handlerSetTime = () => {
        const timeCur = new Date();
        const chapTime = new Date(lastChapter.timeCreatChapter);

        return handleTime(timeCur, chapTime);
    };

    const handlerOpenListChap = () => {
        setShow(true);
        document.body.style.overflow = 'hidden';
    };

    const handlerCloseListChap = () => {
        setShow(false);
        document.body.style.overflow = 'auto';
    };

    // console.log(data);

    return (
        <MobileWrapper
            title="Mới nhất"
            navTitle={handlerSetTime()}
            allTitle="Danh sách chương"
            onClick={handlerOpenListChap}
            contentStyles={{ marginBottom: '16px' }}
        >
            <div className={cx('new-chap')}>
                <div className={cx('chap-name')}>
                    <Link
                        to={handlerSetLinkChap(data.name, lastChapter.numberChapter)}
                        className={cx('chap-link')}
                    >{`Chương ${lastChapter.numberChapter}: ${lastChapter.nameChapter}`}</Link>
                </div>
                <span className={cx('nav')}>Mới</span>
            </div>
            {show && (
                <MobileFormConstructor
                    title="Danh sách chương"
                    containerProps={{ padding: '16px 12px' }}
                    close={handlerCloseListChap}
                >
                    <MobileChapMenu data={listChapters} bookName={data.name} onChange={handlerCloseListChap} />
                </MobileFormConstructor>
            )}
        </MobileWrapper>
    );
}

export default memo(MobileChapter);
