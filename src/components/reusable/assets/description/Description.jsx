import { useState } from "react"
import InfoCard from "../../cards/infoCard/InfoCard"

const Description = ({ item }) => {
  const [data, setData] = useState({
    image: {
      ...item?.image,
    },
    info: {
      title: "Description",
      text: item?.info?.text,
    },
    type: null,
  })

  return (
    <>
      <div className="d-none d-md-block">
        <InfoCard item={data} />
      </div>
      <div className="description__mobile">
        <div className="description__img-m">
          <img src={item.image.src} alt={item.image.alt} />
        </div>
        <div className="description__column-m">
          <div className="description__title-m">Description</div>
          <div className="description__text-m">
            <div>{item.info.text}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Description
