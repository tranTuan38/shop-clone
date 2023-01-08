import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import styles from '../Review.module.scss';
import imgs from '~/assets/imgs';
import { memo } from 'react';
import { handlerCheckRatingCmt, handlerDeleteData, handlerPustData, handlerGetRatingLength } from '~/handler';
import SpinnerGrow from '~/components/SpinnerGrow';
import { getListBookServices as setListRating } from '~/services';
import RatingForm from '~/components/Form/RatingForm';
import NavPopup from '~/components/NavPopup';
import toastReact from '~/components/ToastMessages';

const cx = classNames.bind(styles);

function InputBox({ isLogin, data, idBook, user, ratingInput, OnTextValue, setUpdateNum, onSetListReviewCmt }) {
    const [btnCheck, setBtnCheck] = useState(false);
    const [questionForm, setQuestionForm] = useState(false);
    const [question, setQuestion] = useState(false);

    const checkConFirmRef = useRef();

    const btnRef = useRef();

    const handlerSetCmtRating = (e) => {
        if (isLogin) {
            OnTextValue(e.target.value);
        }
    };

    const handlerPushRating = () => {
        if (isLogin) {
            if (data) {
                if (data.trim().length >= 5) {
                    const ratingInputValues = Object.values(ratingInput);
                    const ratingFormats = ratingInputValues.map((rating, i) => {
                        let titleRating;

                        if (i === 0) {
                            titleRating = 'Tính cách nhân vật';
                        } else if (i === 1) {
                            titleRating = 'Nội dung cốt truyện';
                        } else if (i === 2) {
                            titleRating = 'Bố cục thế giới';
                        }

                        return { title: titleRating, value: rating };
                    });

                    const CheckInputValues = ratingFormats.filter((rating) => rating.value < 0.5);
                    // console.log(CheckInputValues);

                    if (CheckInputValues.length) {
                        const messages = CheckInputValues.map(
                            (item) => `${item.title} phải có giá trị nhỏ nhất là 0.5.`,
                        );
                        toastReact(3, 'Lỗi', messages);
                        return;
                    }

                    setBtnCheck(true);
                    return;
                }
                toastReact(3, 'Lỗi', 'Đánh giá phải lớn hơn 5 ký tự.');
                btnRef.current.blur();
            } else {
                btnRef.current.blur();
                toastReact(3, 'Lỗi', 'Bạn chưa nhập nội dung đánh giá.');
                return;
            }
        }
    };

    // console.log(question);

    useEffect(() => {
        if (!btnCheck) return;

        const spanDom = document.querySelector('[data-sub-tap=review]');

        const confirmForm = () => {
            return new Promise((resolve, reject) => {
                checkConFirmRef.current = resolve;
            });
        };

        const showConfirm = async () => {
            const isConfirmed = await confirmForm();
            return isConfirmed;
        };

        const successFnc = (type, title, message) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(toastReact(type, title, message));
                    setBtnCheck(false);
                }, 800);
            });
        };

        const asyncFnc = async () => {
            const isCheck = handlerCheckRatingCmt(idBook, user.id);
            let isSuccess;

            if (isCheck) {
                btnRef.current.blur();
                setTimeout(() => {
                    toastReact(3, 'Lỗi', 'Bạn đã đánh rồi, nếu muốn đánh giá lại, xin hãy xóa đánh giá trước của bạn.');
                    setBtnCheck(false);
                }, 800);
            } else {
                setQuestionForm(true);
                const isCheckConfirm = await showConfirm();
                checkConFirmRef.current = undefined;
                setTimeout(() => {
                    setQuestionForm(false);
                }, 200);
                const datas = {
                    rateCharacter: ratingInput.character,
                    rateContent: ratingInput.story,
                    rateBgr: ratingInput.background,
                    comment: data,
                    spoli: isCheckConfirm,
                };
                isSuccess = await successFnc(1, 'Thành công', 'Đánh giá thành công.');
                if (isSuccess) {
                    handlerPustData(0, idBook, user.id, datas);
                    spanDom.innerText = handlerGetRatingLength(idBook);
                    OnTextValue('');
                    setUpdateNum((prev) => prev + 1);
                }

                btnRef.current.blur();
            }
        };

        asyncFnc();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [btnCheck]);

    return (
        <>
            <div className={cx('input-box')}>
                <textarea
                    data-user-rate={isLogin}
                    className={cx('textarea')}
                    placeholder="Đánh giá của bạn về truyện này"
                    value={data}
                    onChange={handlerSetCmtRating}
                    spellCheck={false}
                ></textarea>
                <button
                    className={cx('btn')}
                    onClick={handlerPushRating}
                    style={{ opacity: btnCheck ? '0.8' : 'initial' }}
                    ref={btnRef}
                >
                    {btnCheck ? <SpinnerGrow /> : <i className="nh-icon icon-send"></i>}
                </button>
            </div>

            {questionForm && checkConFirmRef.current && <RatingForm onConFirm={checkConFirmRef.current} />}
        </>
    );
}

export default memo(InputBox);
