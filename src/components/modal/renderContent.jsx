import OtherServicesModal from "./modals/otherServicesModal/OtherServicesModal.jsx"
import Report from "./modals/report/Report.jsx"
import ChoseImageModal from "./modals/choseImageModal/ChoseImageModal.jsx"
import VideoModal from "./modals/videoModal/VideoModal.jsx"

const renderContent = (name, props) => {
  const contentMap = {
    OtherServicesModal,
    Report,
    ChoseImageModal,
    VideoModal,
  }

  const Component = contentMap[name]
  if (!Component) return null
  return <Component {...props} />
}

export default renderContent
