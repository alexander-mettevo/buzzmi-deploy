import React, {useState} from "react";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import {useParams} from "react-router-dom";
import PeriodList from "../../../reusable/periodList/PeriodList.jsx";
import PersonalCard from "../../../reusable/cards/personalCard/PersonalCard.jsx";

//mocks


const periodList = [
    {
        id: 0,
        text: "Last week"
    },
    {
        id: 1,
        text: "This week"
    },
    {
        id: 2,
        text: "Last Month"
    },
    {
        id: 3,
        text: "This month"
    },
    {
        id: 4,
        text: "Year"
    },
]

const persons = [
    {
        img: "/images/creators/1.jpg",
        name: "Jane",
        nickName: "@janedoe",
        info: "Elite creator",
        id: "1",
        values: [
            {
                value: "100, 500",
                img: "/images/hub/wallet/diamond.svg"
            },
            {
                value: "100, 500",
                img: "/images/hub/wallet/energy.svg"
            },
        ]
    },
    {
        img: "/images/creators/2.jpg",
        name: "Kate",
        nickName: "@katedoe",
        info: "Elite creator",
        id: "2",
        values: [
            {
                value: "100, 500",
                img: "/images/hub/wallet/diamond.svg"
            },
            {
                value: "100, 500",
                img: "/images/hub/wallet/energy.svg"
            },
        ]
    },
    {
        img: "/images/creators/3.jpg",
        name: "John",
        nickName: "@johndoe",
        info: "Elite creator",
        id: "3",
        values: [
            {
                value: "100, 500",
                img: "/images/hub/wallet/diamond.svg"
            },
            {
                value: "100, 500",
                img: "/images/hub/wallet/energy.svg"
            },
        ]
    },
    {
        img: "/images/creators/4.jpg",
        name: "Jane",
        nickName: "@janedoe",
        info: "Elite creator",
        id: "4",
        values: [
            {
                value: "100, 500",
                img: "/images/hub/wallet/diamond.svg"
            },
            {
                value: "100, 500",
                img: "/images/hub/wallet/energy.svg"
            },
        ]
    },
    {
        img: "/images/creators/1.jpg",
        name: "John",
        nickName: "@johndoe",
        info: "Elite creator",
        id: "5",
        values: [
            {
                value: "100, 500",
                img: "/images/hub/wallet/diamond.svg"
            },
            {
                value: "100, 500",
                img: "/images/hub/wallet/energy.svg"
            },
        ]
    },
]

const leaders = {
    0: persons[0],
    1: persons[1],
    2: persons[2],
};

const HubLeaders = () => {
    const {type} = useParams();
    const [period, setPeriod] = useState(0);

    return (
        <div className="hub">
            <div className="hub__content">
                <BackBtnWithTitlePage title="Leaderboard" btnText="Back "/>
                <div className="hub__leaders">
                    <div className="hub__leaders-item hub__leaders-item--first">
                        <div className="hub__leaders-item-img">
                            <img src={leaders[0].img} alt={leaders[0].name}/>
                        </div>
                        <div className="hub__leaders-item-text">{leaders[0].nickName}</div>
                    </div>
                    <div className="hub__leaders-item hub__leaders-item--second">
                        <div className="hub__leaders-item-img">
                            <img src={leaders[1].img} alt={leaders[1].name}/>
                        </div>
                        <div className="hub__leaders-item-text">{leaders[1].nickName}</div>
                    </div>
                    <div className="hub__leaders-item hub__leaders-item--third">
                        <div className="hub__leaders-item-img">
                            <img src={leaders[2].img} alt={leaders[2].name}/>
                        </div>
                        <div className="hub__leaders-item-text">{leaders[2].nickName}</div>
                    </div>
                    <span className="hub__leaders-text">{type.replaceAll("-", " ")} leaders</span>
                </div>
                <PeriodList items={periodList} value={period} onClick={setPeriod}></PeriodList>
                <div className="personal-card__list">
                    {persons.map(person => {
                        return (
                            <PersonalCard {...person} key={person.id}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HubLeaders;
