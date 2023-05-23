import React from 'react';
import Box from "../../../../../../reusable/cards/box/Box.jsx";
import PlanSearch from "./items/planSearch/PlanSearch.jsx";

const AdditionalInformationPlan = () => {
  return (
    <Box bottomComponent={<PlanSearch/>} paddingMode='big'>
      content
    </Box>
  );
};

export default AdditionalInformationPlan;