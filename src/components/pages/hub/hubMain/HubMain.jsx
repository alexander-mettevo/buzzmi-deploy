import React from "react";
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx";

const HubMain = () => {

  return (
    <MainLayoutContent
      rightColumnContent={
        <>
          <h2>Welcome to the Right Column</h2>
          <p>Классический текст Lorem Ipsum, используемый с XVI века
          </p>
        </>
      }
    >
      <h1>Hub Main</h1>
    </MainLayoutContent>
  )
}

export default HubMain;