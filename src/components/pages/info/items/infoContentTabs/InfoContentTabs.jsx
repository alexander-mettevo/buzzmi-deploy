import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const InfoContentTabs = () => {
  return (
    <Tabs className="info-section">
      <TabList>
        <Tab>Posts</Tab>
        <Tab>Reel</Tab>
        <Tab disabled>Premium Members</Tab>
        <Tab disabled>Exclusive</Tab>
      </TabList>

      <TabPanel>
        <h2>Posts content</h2>
      </TabPanel>
      <TabPanel>
        <h2>Reel content</h2>
      </TabPanel>
      <TabPanel>
        <h2>Premium Members content</h2>
      </TabPanel>
      <TabPanel>
        <h2>Exclusive content</h2>
      </TabPanel>
    </Tabs>
  )
}

export default InfoContentTabs
