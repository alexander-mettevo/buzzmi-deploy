import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx"
import HubMainDesktop from "./hubMainDesktop/HubMainDesktop.jsx"
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx"
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx"
import HubMainMobile from "./hubMainMobile/HubMainMobile.jsx"

const HubMain = () => {
  return (
    <MainLayoutContent rightColumnContent={<AdditionalInformation />}>
      <ResizeComponent desktopComponent={<HubMainDesktop />} mobileComponent={<HubMainMobile />} />
    </MainLayoutContent>
  )
}

export default HubMain
