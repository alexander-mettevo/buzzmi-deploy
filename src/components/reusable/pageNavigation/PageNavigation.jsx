import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

const PageNavigation = ({ list, value, onChange }) => {
  const [swiper, setSwiper] = useState(null)

  const onBtnClick = ({ id, index }) => {
    if (onChange) {
      onChange(id)
    }
    if (swiper) {
      swiper.slideTo(index)
    }
  }
  return list && list.length > 0 ? (
    <div className="page-navigation page-navigation_mob">
      <Swiper
        initialSlide={list.findIndex((el) => el.id === value) || 0}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        watchactiveindex="true"
        onSwiper={(swiper) => {
          setSwiper(swiper)
        }}
        slidesPerView={3}
      >
        {list.map((navItem, index) => {
          return (
            <SwiperSlide key={navItem?.id || index + "nav"}>
              <button className="page-navigation__btn" onClick={() => onBtnClick({ id: navItem.id, index: index })}>
                {navItem.text}
              </button>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  ) : null
}

export default PageNavigation
