import Avatar from "../../../../reusable/assets/avatar/Avatar"
import CustomLink from "../../../../reusable/btns/links/CustomLink"
import Rank from "../../../hub/items/rank/Rank"
import InfoBio from "../../items/InfoBio"
import InfoHeaderMobile from "./items/infoHeaderMobile/InfoHeaderMobile"
import { Link } from "react-router-dom"

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
      <div className="mt-5">
        <Rank />
      </div>
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <CustomLink to="/" className="alt-btn button_m">
          Edit profile
        </CustomLink>
        <Link to="/" className="text-alt-primary info__edit-profile-m">
          Profile preview
        </Link>
      </div>
    </>
  )
}

export default InfoMainMobile
