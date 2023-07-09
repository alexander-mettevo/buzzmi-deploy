import Avatar from "../../../../reusable/assets/avatar/Avatar"
import Box from "../../../../reusable/cards/box/Box"
import CustomLink from "../../../../reusable/btns/links/CustomLink"
import InfoBio from "../../items/InfoBio"
import InfoDesktopTabs from "../../items/infoDesktopTabs/InfoDesktopTabs"
import InfoContentTabs from "../../items/infoContentTabs/InfoContentTabs"

const InfoMainDesktop = () => {
  return (
    <>
      <Box paddingMode="big" className="info-top__desktop-wrap">
        <div>
          <Avatar />
        </div>
        <InfoBio />
        <div className="info-top__btns-d">
          <CustomLink className="_fw button_primary button_s" to="/hub/add-activity">
            Add activity
          </CustomLink>
          <CustomLink className="_fw button_secondary  button_s" to="/info/edit-profile">
            Edit profile
          </CustomLink>
        </div>
      </Box>
      <InfoDesktopTabs />
      <InfoContentTabs />
    </>
  )
}

export default InfoMainDesktop
