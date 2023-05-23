import React from 'react';
import PlanSearch from "./items/planSearch/PlanSearch.jsx";
import Box from "../../../../cards/box/Box.jsx";
import PlanBio from "./items/planBio/PlanBio.jsx";
import PlanInfo from "./items/planInfo/PlanInfo.jsx";

const AdditionalInformationPlan = () => {
  return (
    <Box
      topComponent={<PlanBio/>}
      bottomComponent={<PlanSearch/>}
      paddingMode='big'>
      <PlanInfo/>
    </Box>
  );
};

export default AdditionalInformationPlan;