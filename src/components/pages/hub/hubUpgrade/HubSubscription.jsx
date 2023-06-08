import React, {useState} from "react";
import BackBtnWithTitlePage from "../../../reusable/btns/backBtn/BackBtnWithTitlePage.jsx";
import SubscriptionOpener from "./subscriptionOpener/subscriptionOpener.jsx";
import DescriptionList from "../../../reusable/descriptionList/DescriptionList.jsx";
import Button from "../../../reusable/btns/buttons/Button.jsx";

// mocks
const openers = [
    {
        name: "Free User",
        id: "free",
        img: "/images/hub/subscription/free.png",
        isCurrent: true
    },
    {
        name: "Premium Member",
        id: "premium",
        img: "/images/hub/subscription/premium.png"
    },
    {
        name: "Elite Creator",
        id: "elite",
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
    const descriptionCases = {
        "free": descriptionList.slice(-2),
        "premium": descriptionList.slice(0, 4),
        "elite": descriptionList.slice(0, 7),
    }
    return(
        <div className="hub">
            <div className="hub__content">
                <BackBtnWithTitlePage title="Membership Level"/>
                <div className="hub__subscription">
                    <p className="hub__subscription-text text-center">Take your Buzzmi journey to new heights! Upgrade to Premium and access all the best content, tools, and perks the app has to offer.</p>
                    <div className="hub__subscription-openers">
                            {openers.map(subscription => {
                              return(
                                  <div className="hub__subscription-opener" key={subscription.id}>
                                    <SubscriptionOpener
                                        active={current === subscription.id}
                                        onChange={setCurrent}
                                        {...subscription}/>
                                  </div>
                              )
                            })}
                    </div>
                    <div className="hub__subscription-info">
                        <DescriptionList items={descriptionCases[current]}/>
                        <div className="hub__subscription-bottom">
                            <Button className="button_primary button_m double-secondary px-6 px-lg-14">Subscribe</Button>
                            <div className="hub__subscription-discount">
                                <span className="hub__subscription-discount-text text-alt-primary">And Special offer</span>
                            </div>
                        </div>
                    </div>
                    <span className="hub__subscription-sub-text">Your subscription will automatically renew in 23 days. You can cancel it anytime </span>
                </div>
            </div>
        </div>
    )
}

export default HubSubscription;
