import { useState } from "react"
import Badge from "../../../../badge/Badge.jsx"
import InfoCardMenu from "../infoCardMenu/InfoCardMenu.jsx"
import { useSwipeable } from "react-swipeable"

const InfoCardMain = ({ image, badges, info, type, id }) => {
  const [showMenu, setShowMenu] = useState(false)

  const swipeLeft = () => {
    setShowMenu(true)

    //create handler if click outside show-menu area then setShowMenu(false)
    window.addEventListener("click", function (e) {
      if (!e.target.closest(".show-menu")) {
        setShowMenu(false)
      }
    })

    //create this for swipe another card
    window.addEventListener("touchstart", function (e) {
      if (!e.target.closest(".show-menu")) {
        setShowMenu(false)
      }
    })
  }

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => swipeLeft(),
    onSwipedRight: (eventData) => setShowMenu(false),
  })

  return (
    <div {...handlers} className={`d-flex info-card ${showMenu ? "show-menu" : ""}`}>
      {image && image?.src && (
        <div className="me-21">
          <img className="info-card__image" src={image.src} alt={image?.alt} />
        </div>
      )}
      <div className={`d-flex info-card__content flex-column ${!badges?.length > 0 ? "justify-content-center" : ""}`}>
        <div className={"info-card__badges"}>
          {badges?.length > 0 &&
            badges.map((badge, index) => (
              <span className={"me-2"} key={index + `${badge.type}`}>
                <Badge type={badge.type} />
              </span>
            ))}
        </div>
        <div>
          <div className={"h4 my-2"}>{info?.title}</div>
          <div className={"info-card__text"}>{info.text}</div>
        </div>
      </div>
      {type !== null && (
        <>
          {type === "menu" && <InfoCardMenu showMenu={showMenu} setShowMenu={setShowMenu} id={id} />}
          {type === "link" && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="/images/assets/info-card/arrow-r.svg" alt="arrow-right" />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default InfoCardMain
