import Box from "../box/Box.jsx"
import { Link } from "react-router-dom"

const SmallCard = ({ id, link, info, image, dnd, checkbox }) => {
  const handleCheckbox = (e) => {
    e.stopPropagation()
  }

  return (
    <Link to={link}>
      <Box className={"box_hover small-card " + (dnd ? "" : "mb 2")}>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            {checkbox && (
              <>
                <input
                  type="checkbox"
                  id={id + "_card"}
                  name={id}
                  onClick={handleCheckbox}
                  className="small-card__checkbox"
                />
                <label htmlFor={id + "_card"} onClick={handleCheckbox} className="small-card__label fa-solid" />
              </>
            )}
            <div className="small-card__img">
              <img src={image?.src} alt={image?.alt} />
            </div>
            <div className="h5">{info?.title}</div>
          </div>
          <div className="d-flex align-items-center  text-secondary">
            {!dnd && <span className="text-s small-card__helper">View details</span>}
            <i className="fa-solid fa-chevron-right small-card__arrow"></i>
          </div>
        </div>
      </Box>
    </Link>
  )
}

export default SmallCard
