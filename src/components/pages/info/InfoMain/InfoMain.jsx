import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent"
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent"
import InfoMainDesktop from "./InfoMainDesktop/InfoMainDesktop"
import InfoMainMobile from "./infoMainMobile/InfoMainMobile"

const InfoMain = () => {
  return (
    <MainLayoutContent>
      <ResizeComponent desktopComponent={<InfoMainDesktop />} mobileComponent={<InfoMainMobile />} />
    </MainLayoutContent>
  )
}

export default InfoMain
