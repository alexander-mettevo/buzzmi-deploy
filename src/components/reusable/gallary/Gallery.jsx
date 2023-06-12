import React, { useState } from "react"
import LightBox from "../../lightBox/LightBox.jsx"
import "swiper/css/effect-fade"
import GalleryCarousel from "../carousel/GalleryCarousel.jsx"

const Gallery = ({ list, isSmall }) => {
  const [activeGalleryItemId, setActiveGalleryItemId] = useState(null)
  const [overlineText, setOverlineText] = useState(null)

  const onSwiperChange = ({ realIndex }) => {
    const text = list[realIndex].description
    if (text) {
      setOverlineText(text)
    }
  }

  const goToActiveSlide = activeGalleryItemId ? list.findIndex((el) => el.id === activeGalleryItemId) : null

  return list && list.length > 0 ? (
    <>
      <div className={"gallery mb-8" + (isSmall ? " gallery--fixed-width" : "")}>
        {list.map((item) => {
          return (
            <div className="gallery__item" onClick={() => setActiveGalleryItemId(item.id)} key={item.id}>
              <img src={item.img} alt={item.description || "gallery img"} />
            </div>
          )
        })}
      </div>
      <LightBox isOpened={activeGalleryItemId !== null} onClose={() => setActiveGalleryItemId(null)}>
        <GalleryCarousel
          list={list}
          overlineText={overlineText}
          onSwiperChange={onSwiperChange}
          goToActiveSlide={goToActiveSlide}
        />
      </LightBox>
    </>
  ) : null
}

export default Gallery
