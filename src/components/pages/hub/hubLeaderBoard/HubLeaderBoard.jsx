import React from "react";
import AdditionalInformation from "../../../reusable/assets/additionalInformation/AdditionalInformation.jsx";
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx";
import HubTasksDesktop from "../hubTasks/hubTasksDesktop/HubTasksDesktop.jsx";
import HubTasksMobile from "../hubTasks/hubTasksMobile/HubTasksMobile.jsx";
import MainLayoutContent from "../../../layouts/mainLayout/mainLayoutContent/MainLayoutContent.jsx";
import Rank from "../items/rank/Rank.jsx";
import LinkTabs from "../../../reusable/assets/linkTabs/LinkTabs.jsx";
import Board from "../../../reusable/board/Board.jsx";

const tabsLast = [
    {
        href: '/hub/tasks',
        title: 'Tasks'
    }, {
        href: '/hub/stats',
        title: 'Stats'
    }, {
        href: '/hub/leaderboard',
        title: 'Leaderboard'
    }
]

const boardItems = [
    {
        img: "/images/hub/board/01.svg",
        text: "Personal Plan Leaders",
        imgList: [
            "/images/creators/1.jpg",
            "/images/creators/2.jpg",
            "/images/creators/3.jpg",
        ],
        id: 0,
        itemBgColor: "light-pink",
        iconBgColor: "pink"
    },
    {
        img: "/images/hub/board/02.svg",
        text: "Habits Leaders",
        imgList: [
            "/images/creators/4.jpg",
            "/images/creators/5.jpg",
            "/images/creators/6.jpg",
        ],
        id: 1,
        itemBgColor: "sky",
        iconBgColor: "light-green"
    },
    {
        img: "/images/hub/board/03.svg",
        text: "Workouts Leaders",
        imgList: [
            "/images/creators/7.jpg",
            "/images/creators/8.jpg",
            "/images/creators/9.jpg",
        ],
        id: 2,
        itemBgColor: "sky",
        iconBgColor: "light-blue"
    },
    {
        img: "/images/hub/board/04.svg",
        text: "Challenges Leaders",
        imgList: [
            "/images/creators/10.jpg",
            "/images/creators/11.jpg",
            "/images/creators/12.jpg",
        ],
        id: 3,
        itemBgColor: "light-yellow",
        iconBgColor: "yellow"
    },
    {
        img: "/images/hub/board/05.svg",
        text: "Programs Leaders",
        imgList: [
            "/images/creators/1.jpg",
            "/images/creators/2.jpg",
            "/images/creators/3.jpg",
        ],
        id: 4,
        itemBgColor: "blue",
        iconBgColor: "dark-blue"
    },
]

const HubLeaderBoard = () => {
    return (
        <MainLayoutContent
            rightColumnContent={<AdditionalInformation/>}
        >
            <>
                <div className='mb-7'>
                    <Rank withAvatar/>
                </div>
                <div className="mb-2">
                    <LinkTabs list={tabsLast}/>
                </div>
                <div className="hub__cup">
                    <img src="/images/assets/cup.png" alt="cup -img"/>
                </div>
                <Board items={boardItems}/>
            </>
        </MainLayoutContent>
    )
}

export default HubLeaderBoard;
