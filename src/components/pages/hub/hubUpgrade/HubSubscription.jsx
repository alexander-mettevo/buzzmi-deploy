import React, {useState} from "react";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SubscriptionOpener from "./subscriptionOpener/subscriptionOpener.jsx";
import DescriptionList from "../../../reusable/descriptionList/DescriptionList.jsx";
import Button from "../../../reusable/btns/buttons/Button.jsx";
import Discount from "../../../reusable/assets/discount/Discount.jsx";
import DesktopLayout from "./desktopLayout/DesktopLayout.jsx";
import ResizeComponent from "../../../reusable/assets/resizeComponent/ResizeComponent.jsx";
import SubscriptionCard from "../../sales/subscription/items/SubscriptionCard.jsx";

// mocks
const openers = [
    {
        name: "Free User",
        id: "free",
        img: "/images/hub/subscription/free.png",
        discount: null,
        isCurrent: true
    },
    {
        name: "Premium Member",
        id: "premium",
        discount: 20,
        img: "/images/hub/subscription/premium.png"
    },
    {
        name: "Elite Creator",
        id: "elite",
        discount: 40,
        img: "/images/hub/subscription/elite.png"
    },
]

const descriptionList = [
    {
        id: 0,
        img: "/images/hub/subscription/description/01.png",
        text: "<strong>Premium Access</strong> videos, blogs and photos from independent creators."
    },
    {
        id: 1,
        img: "/images/hub/subscription/description/02.png",
        text: "<strong>Receive an elite badge</strong> - Get a badge on your channel to increase your reputation and stand out."
    },
    {
        id: 2,
        img: "/images/hub/subscription/description/03.png",
        text: "<strong>Hide boosted content</strong> - Remove all boosted content from your feeds to keep your experience ad-free."
    },
    {
        id: 3,
        img: "/images/hub/subscription/description/04.png",
        text: "<strong>Verify your channel</strong> - Request to verify your digital identity and let people know you are real."
    },
    {
        id: 4,
        img: "/images/hub/subscription/description/05.png",
        text: "Create different subscription tier level"
    },
    {
        id: 5,
        img: "/images/hub/subscription/description/06.png",
        text: "Publish content specific to premier members"
    },
    {
        id: 6,
        img: "/images/hub/subscription/description/07.png",
        text: "Access to free content"
    },
    {
        id: 7,
        img: "/images/hub/subscription/description/08.png",
        text: "Be part of the Diamond Pool"
    },
    {
        id: 8,
        img: "/images/hub/subscription/description/09.png",
        text: "Earn scores for engagement on the app"
    },
];

const HubSubscription = () => {
    const [current, setCurrent] = useState("free");
    const [expanded, setExpanded] = useState(null);
    const descriptionCases = {
        "free": descriptionList.slice(-2),
        "premium": descriptionList.slice(0, 4),
        "elite": descriptionList.slice(0, 7),
    }
    const desktopLayout = <DesktopLayout openers={openers}
                                         current={current}
                                         setCurrent={setCurrent}
                                         descriptionCases={descriptionCases}/>
    return (
        <div className="hub">
            <div className="hub__content">
                <BackBtnWithTitlePage title="Membership Level"/>
                <div className="hub__subscription">
                    <p className="hub__subscription-text text-center">Take your Buzzmi journey to new heights! Upgrade
                        to Premium and access all the best content, tools, and perks the app has to offer.</p>
                    <ResizeComponent
                        desktopComponent={desktopLayout}
                        mobileComponent={
                            <>
                                {openers.map(el => {
                                    return (
                                        <div className="hub__subscription-item" key={el.id}>
                                            <SubscriptionCard title={el.name}
                                                              icon={el.img}
                                                              discount={el.discount}
                                                              hideBtn={descriptionCases[el.id].length < 4}
                                                              current={current === el.id}
                                                              specialOffer={el.id === "elite" ? "And Special offer" : null}
                                                              onShowMore={() => setExpanded(expanded === el.id ? null : el.id)}
                                                              content={<DescriptionList
                                                                  items={expanded === el.id ? descriptionCases[el.id] : descriptionCases[el.id].slice(0, 3)}/>}
                                            />
                                        </div>
                                    )
                                })}
                            </>
                        }/>

                    <span className="hub__subscription-sub-text">Your subscription will automatically renew in 23 days. You can cancel it anytime </span>
                </div>
            </div>
        </div>
    )
}

export default HubSubscription;
