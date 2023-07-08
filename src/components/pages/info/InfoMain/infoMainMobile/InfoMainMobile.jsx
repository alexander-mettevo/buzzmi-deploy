import Avatar from "../../../../reusable/assets/avatar/Avatar"
import CustomLink from "../../../../reusable/btns/links/CustomLink"
import InfoBio from "../../items/InfoBio"
import InfoHeaderMobile from "./items/infoHeaderMobile/InfoHeaderMobile"

const InfoMainMobile = () => {
  return (
    <>
      <InfoHeaderMobile />
      <div className="info-top__mobile-wrap">
        <Avatar mode="border" />
        <div className="info-top__mobile-right">
          <InfoBio />
          <CustomLink to="/" className="alt-btn button_m">
            about me
          </CustomLink>
        </div>
      </div>
    </>
  )
}

export default InfoMainMobile
