import React, {useState} from 'react';
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SmallCardList from "../../../reusable/cards/smallCard/SmallCardList.jsx";
import InfoCardList from "../../../reusable/cards/infoCard/InfoCardList.jsx";
import Badge from "../../../reusable/badge/Badge.jsx";
import FilterTags from "../items/filterList/items/filterTags/FilterTags.jsx";
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx";
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx";
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx";
import HubTasksDesktop from "../hubTasks/hubTasksDesktop/HubTasksDesktop.jsx";
import HubTasksMobile from "../hubTasks/hubTasksMobile/HubTasksMobile.jsx";
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx";

const mockItems = [
    {
        "type": "link",
        "to": "/hub/add-activity",
        "image": {
            "src": "/images/hub/main/gym.png",
            "alt": "Placeholder"
        },
        "badges": [
            {
                "type": "workouts"
            },
        ],
        "info": {
            "title": "Strength Traning",
            "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
        }
    },
    {
        "type": "link",
        "to": "/hub/add-activity",
        "image": {
            "src": "/images/hub/main/list.png",
            "alt": "Placeholder"
        },
        "badges": [
            {
                "type": "program"
            },
        ],
        "info": {
            "title": "Strength Traning",
            "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
        }
    },
    {
        "type": "link",
        "to": "/hub/add-activity",
        "image": {
            "src": "/images/hub/main/drink.png",
            "alt": "Placeholder"
        },
        "badges": [
            {
                "type": "challenges"
            },
        ],
        "info": {
            "title": "Strength Traning",
            "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
        }
    }
]
const presetList = mockItems.map(el => ({
    "type": "link",
    "to": el.to,
    "image": el.image,
    "info": el.info
}))
const mockTags = ['all', 'presets', 'workouts', 'habits', 'program', 'challenges']
const tabsLast = [
    {
        title: 'All',
        id: 0
    }, {
        title: 'Preset',
        id: 1
    }, {
        title: 'My Preset',
        id: 2
    }
]

const HubAddActivityContent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const currentList = {
        0: mockItems,
        1: presetList,
        2: [...presetList, presetList[0]]
    }

    return (
        <div className='small-container'>
            <BackBtnWithTitlePage title="Add Task" btnText="Back"/>
            <div className="pb-6">
                <LinkTabs list={tabsLast}
                      activeTabId={activeTab}
                      onChange={setActiveTab}/>
            </div>
            <FilterTags tags={mockTags}/>
            <InfoCardList infoList={currentList[activeTab]}/>
        </div>
    )
}

const HubAddActivity = () => {
    const additionalInfo = <AdditionalInformation onPresetBtn={() => null} onMyTaskBtn={() => null} />
    return (
        <MainLayoutContent rightColumnContent={additionalInfo}>
            <HubAddActivityContent/>
        </MainLayoutContent>
    );
};

export default HubAddActivity;