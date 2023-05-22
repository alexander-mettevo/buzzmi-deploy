import React from "react";
import MainLayoutContent from "../../../layouts/mainLayout/MainLayoutContent.jsx";

const HubMain = () => {

  return (
    <MainLayoutContent
      rightColumnContent={
        <>
          <h2>Welcome to the Right Column</h2>
          <p>This is the content for the right column.</p>
        </>
      }
    >
      <h1>Hub Main</h1>
    </MainLayoutContent>
  )
}

export default HubMain;