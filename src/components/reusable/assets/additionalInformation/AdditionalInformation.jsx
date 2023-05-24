import React from 'react';
import AdditionalInformationPlan from "./items/additionalInformationPlan/AdditionalInformationPlan.jsx";
import HubWallet from "../../../pages/hub/hubMain/items/hubWallet/HubWallet.jsx";

const AdditionalInformation = () => {
  return (
    <div>
      <AdditionalInformationPlan/>
      <HubWallet/>
    </div>
  );
};

export default AdditionalInformation;