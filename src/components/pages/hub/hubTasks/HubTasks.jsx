import React from 'react';
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx";
import HubTasksDesktop from "./hubTasksDesktop/HubTasksDesktop.jsx";
import HubTasksMobile from "./hubTasksMobile/HubTasksMobile.jsx";
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx";
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx";

const HubTasks = () => {
  return (
    <MainLayoutContent
      rightColumnContent={<AdditionalInformation/>}
    >
      <ResizeComponent
        desktopComponent={<HubTasksDesktop/>}
        mobileComponent={<HubTasksMobile/>}
      />
    </MainLayoutContent>
  );
};

export default HubTasks;