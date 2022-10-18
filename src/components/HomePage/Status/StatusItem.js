import classNames from 'classnames/bind';
import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import SwiperCore, { Navigation, Thumbs, EffectCoverflow, Pagination, EffectFade, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Status.module.scss';

import { useGetCategory } from '~/hooks';
import { removeVietnameseTones } from '~/handler';
import StatusItemEle from './StatusItemEle';
import StatusBookContent from './StatusBookContent';

const cx = classNames.bind(styles);

SwiperCore.use([Navigation, Pagination, Thumbs, EffectCoverflow, EffectFade]);

function StatusItem({ data }) {
    const [listGenre] = useGetCategory();
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const formatLink = (link) => {
        return `/list-book/${removeVietnameseTones(link)}`;
    };

    const genreLink = (value) => {
        let indexValue;
        for (let i = 0; i < listGenre.length; i++) {
            const element = listGenre[i];
            if (listGenre[i].includes(value)) {
                indexValue = i;
                break;
            }
        }

        return `/list-book/?genre=${indexValue}`;
    };

    return (
        <div className={cx('slider-thumb-container')}>
            <Swiper
                loop={true}
                loopAdditionalSlides={10}
                controller={{ control: controlledSwiper }}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 20,
                    depth: 100,
                    modifier: 1,
                    scale: 1,
                    slideShadows: false,
                }}
                spaceBetween={0}
                slidesPerView={2}
                centeredSlides
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation, Pagination, Controller]}
                grabCursor={false}
                className={cx('list-container-slider')}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className={cx('swiper-slide')}>
                            <StatusItemEle data={item} formatLink={formatLink} />
                        </SwiperSlide>
                    );
                })}
                <div ref={navigationPrevRef} className={cx('btn-pre')}>
                    <i className="nh-icon icon-prev"></i>
                </div>
                <div ref={navigationNextRef} className={cx('btn-next')}>
                    <i className="nh-icon icon-next"></i>
                </div>
            </Swiper>
            <Swiper
                loop={true}
                onSwiper={setControlledSwiper}
                effect={'fade'}
                spaceBetween={1}
                slidesPerView="auto"
                loopedSlides={10}
                allowTouchMove={false}
                centeredSlides
                className={cx('book-info')}
                modules={[EffectFade, Controller]}
                fadeEffect={{ crossFade: true }}
                speed={300}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide
                            style={{ transition: 'all 0.1s ease-in-out' }}
                            key={index}
                            className={`book-info-swiper-slide ${cx('book-info-swiper-slide')}`}
                        >
                            <StatusBookContent data={item} formatLink={formatLink} genreLink={genreLink} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default StatusItem;
