import OtherServicesModal from "./modals/otherServicesModal/OtherServicesModal.jsx";
import Report from "./modals/report/Report.jsx";
import ChoseImageModal from "./modals/choseImageModal/ChoseImageModal.jsx";

const renderContent = (name, props) => {

  const contentMap = {
    OtherServicesModal,
    Report,
    ChoseImageModal
  }

  const Component = contentMap[name];
  if (!Component) return null;
  return <Component {...props}/>
}

export default renderContent;