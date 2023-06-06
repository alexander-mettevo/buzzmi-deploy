import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

const GalleryCarousel = ({list, overlineText, goToActiveSlide, onSwiperChange}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const carouselNav = useRef(null);

    const carouselPrevBtn = useRef(null);
    const carouselNextBtn = useRef(null);

    useEffect(() => {
        if (carouselNav && carouselNav.current) {
            setThumbsSwiper(carouselNav.current)
        }
    }, [carouselNav])

    return(
        <div className="gallery__carousel">
            {overlineText && <span className="gallery__carousel-overline">{overlineText}</span>}
            {thumbsSwiper && <div className="gallery__carousel-body">
                <Swiper
                    initialSlide={goToActiveSlide}
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    navigation={{
                        prevEl: carouselPrevBtn.current,
                        nextEl: carouselNextBtn.current,
                    }}
                    spaceBetween={10}
                    thumbs={{swiper: carouselNav.current}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                    onSlideChange={onSwiperChange}
                    onSwiper={onSwiperChange}
                >
                    {list.map(el => {
                        return (
                            <SwiperSlide key={el.id}>
                                <div className="gallery__carousel-item">
                                    <img src={el.img} alt={el.description}/>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <button className="gallery__btn gallery__btn--prev" ref={carouselPrevBtn}>
                    <img src="/images/assets/back.svg" alt="arrow icon"/>
                </button>
                <button className="gallery__btn gallery__btn--next" ref={carouselNextBtn}>
                    <img src="/images/assets/back.svg" alt="arrow icon"/>
                </button>
            </div>}
            <Swiper
                ref={carouselNav}
                initialSlide={goToActiveSlide}
                onSwiper={setThumbsSwiper}
                spaceBetween={0}
                slidesPerView="auto"
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper gallery__carousel-nav"
            >
                {list.map(el => {
                    return (
                        <SwiperSlide key={el.id}>
                            <div className="gallery__item">
                                <img src={el.img} alt={el.description}/>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default GalleryCarousel;
