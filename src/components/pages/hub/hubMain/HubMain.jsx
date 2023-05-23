import React from "react";
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx";
import HubMainDesktop from "./hubMainDesktop/HubMainDesktop.jsx";
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx";
import AdditionalInformation from "../items/additionalInformation/AdditionalInformation.jsx";

const HubMain = () => {


  return (
    <MainLayoutContent
      rightColumnContent={<AdditionalInformation/>}
    >
      <ResizeComponent
        desktopComponent={<HubMainDesktop/>}
        mobileComponent={<h1>Mobile</h1>}
      />
    </MainLayoutContent>
  )
}

export default HubMain;