import React, {useState} from "react";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import InfoCard from "../../../reusable/cards/infoCard/InfoCard.jsx";
import SmallCardList from "../../../reusable/cards/smallCard/SmallCardList.jsx";
import Gallery from "../../../reusable/gallary/Gallery.jsx";
import AudioPlayer from "../../../reusable/audioPlayer/AudioPlayer.jsx";

// mock data
const infoCardData = {
    "image": {
        "src": "/images/hub/main/gym.png",
        "alt": "Placeholder"
    },
    "info": {
        "title": "Strength Traning",
        "text": "Place your feet and hips apart, and grab a pair of dumbbells. Bend your knees slightly, and hinge at the"
    },
    "type": null
}

const galleryList = [
    {
        img: "/images/gallery/01.jpg",
        id: 0,
        description: "Energetic Morning Image Description"
    },
    {
        img: "/images/login/intro.png",
        id: 1,
        description: "Energetic Morning Image Description 1"
    },
    {
        img: "/images/gallery/01.jpg",
        id: 2,
        description: "Energetic Morning Image Description 2"
    },
    {
        img: "/images/login/intro.png",
        id: 3,
        description: "Energetic Morning Image Description 3"
    },
];

const tasksData = [
    {
        link: "",
        title: "Yoga",
        img: {
            "src": "/images/hub/main/drink.png",
            "alt": "Placeholder"
        },
        id: 0
    },
    {
        link: "",
        title: "Cycling",
        img: {
            "src": "/images/hub/main/gym.png",
            "alt": "Placeholder"
        },
        id: 1
    },
    {
        link: "",
        title: "Drink water",
        img: {
            "src": "/images/hub/main/drink.png",
            "alt": "Placeholder"
        },
        id: 2
    },
    {
        link: "",
        title: "Coffee with family",
        img: {
            "src": "/images/hub/main/gym.png",
            "alt": "Placeholder"
        },
        id: 3
    },
    {
        link: "",
        title: "Brush teeth",
        img: {
            "src": "/images/hub/main/drink.png",
            "alt": "Placeholder"
        },
        id: 4
    },
    {
        link: "/",
        title: "Take medicine",
        img: {
            "src": "/images/hub/main/gym.png",
            "alt": "Placeholder"
        },
        id: 5
    },
]

const HubPresetPreview = () => {
    return(
        <div className="preset-preview">
            <div className="preset-preview__content">
                <BackBtnWithTitlePage title="Energetic Morning" btnText="Cancel"/>

                <div className="mb-4">
                    <InfoCard item={infoCardData} />
                </div>
                <div className="preset-preview__holder">
                    <Gallery list={galleryList} isSmall/>
                    <div className="preset-preview__media">
                        <div className="preset-preview__video">

                        </div>
                        <div className="preset-preview__audio">
                            <AudioPlayer src="/sounds/test-track.mp3"/>
                        </div>
                    </div>
                </div>
                <div className="present-preview__cards">
                    <h2 className="h4 mb-2">Tasks</h2>
                    <SmallCardList list={tasksData} dnd={true}/>
                </div>
            </div>
        </div>
    )
}

export default HubPresetPreview;
