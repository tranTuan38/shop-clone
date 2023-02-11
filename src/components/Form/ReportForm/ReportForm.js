import classNames from 'classnames/bind';
import { forwardRef, memo, useRef, useState, useImperativeHandle, useEffect } from 'react';

import styles from './ReportForm.module.scss';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

const listReport = [
    { id: 0, title: 'Đưa link web khác' },
    { id: 1, title: 'Nội dung khiêu dâm' },
    { id: 2, title: 'Nội dung liên quan tới chính trị, tôn giáo' },
    { id: 3, title: 'Công kích cá nhân' },
    { id: 4, title: 'Spam' },
    { id: 5, title: 'Vấn đề khác' },
];

const listReportChapter = [
    { id: 0, title: 'Nội dung khiêu dâm' },
    { id: 1, title: 'Nội dung liên quan tới chính trị, tôn giáo' },
    { id: 2, title: 'Nội dung đã đăng, bị trùng' },
    { id: 3, title: 'Vấn đề khác' },
];

function ReportForm({ type }, ref) {
    const valueDefault = 4;
    const [formCheck, setFormCheck] = useState(false);
    const [value, setValue] = useState(valueDefault);
    const [textValue, setTextValue] = useState('');
    const [ids, setIds] = useState({});
    const [data, setData] = useState([]);

    const wrapperRef = useRef();
    const containerRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        if (type) {
            setData(listReportChapter);
            return;
        }

        setData(listReport);
    }, []);

    useImperativeHandle(ref, () => ({
        openReport(id, idReport) {
            // userLoginId, userReportId || idBookChapter
            setFormCheck(true);
            setIds({ id, idReport });
        },
    }));

    const handlerOnChange = (e) => {
        setValue(+e.target.value);
    };

    const handlerSetTextValue = (value) => {
        const isCheck = textRef.current.classList.contains(cx('required'));
        if (isCheck) {
            textRef.current.classList.remove(cx('required'));
        }
        setTextValue(value);
    };

    const handlerClose = () => {
        wrapperRef.current.classList.add(cx('fadeOut'));
        containerRef.current.classList.add(cx('containerFadeOut'));

        setTimeout(() => {
            setFormCheck(false);
            setValue(valueDefault);
            setIds({});
            setTextValue('');
        }, 200);
    };

    const handlerReport = () => {
        if (textValue) {
            // const reportData = {
            //     ...ids,
            //     reportType: value,
            //     reportContent: textValue,
            // };
            wrapperRef.current.classList.add(cx('fadeOut'));
            containerRef.current.classList.add(cx('containerFadeOut'));
            setTimeout(() => {
                toastReact(1, 'Thành công', 'Cảm ơn bạn đã thông báo');
                setFormCheck(false);
                setValue(valueDefault);
                setIds({});
                setTextValue('');
            }, 200);

            return;
        }

        textRef.current.classList.add(cx('required'));
    };

    return (
        <>
            {formCheck ? (
                <div className={cx('wrapper')} ref={wrapperRef}>
                    <div className={cx('container')} ref={containerRef}>
                        <div className={cx('content')}>
                            <div className={cx('header')}>
                                <h5 className={cx('title')}>Báo cáo đánh giá</h5>
                                <button className={cx('btn-close')} onClick={handlerClose}>
                                    &times;
                                </button>
                            </div>
                            <div className={cx('body')}>
                                <div className={cx('list-report')}>
                                    {data.map((report) => {
                                        const itemId = `report-${report.id}`;
                                        const itemName = 'reportItem';

                                        return (
                                            <div key={report.id} className={cx('item')}>
                                                <input
                                                    type="radio"
                                                    id={itemId}
                                                    name={itemName}
                                                    className={cx('input')}
                                                    value={report.id}
                                                    checked={report.id === value ? true : false}
                                                    onChange={handlerOnChange}
                                                />
                                                <label htmlFor={itemId} className={cx('label')}>
                                                    {report.title}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className={cx('information')}>
                                    <textarea
                                        className={cx('textarea')}
                                        placeholder="Thông tin muốn báo cáo (bắt buộc)"
                                        value={textValue}
                                        onChange={(e) => handlerSetTextValue(e.target.value)}
                                        ref={textRef}
                                        onFocus={(e) => e.target.classList.remove(cx('required'))}
                                        spellCheck={false}
                                    />
                                </div>
                                <div className={cx('action')}>
                                    <button className={cx('btn-submit')} onClick={handlerReport}>
                                        Báo cáo
                                    </button>
                                </div>
                                <p className={cx('sub')}>
                                    Các vấn đề vi phạm bản quyền xin vui lòng gửi thư đến contact@truyen.onl
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : undefined}
        </>
    );
}

export default memo(forwardRef(ReportForm));
