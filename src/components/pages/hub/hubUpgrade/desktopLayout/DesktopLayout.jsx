import React from "react";
import SubscriptionOpener from "../subscriptionOpener/subscriptionOpener.jsx";
import DescriptionList from "../../../../reusable/descriptionList/DescriptionList.jsx";
import Button from "../../../../reusable/btns/buttons/Button.jsx";
import Discount from "../../../../reusable/assets/discount/Discount.jsx";

const DesktopLayout = ({openers, descriptionCases, current, setCurrent}) => {
    return(
        <>
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
                        <Discount discount="40" specialOffer="And Special offer"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopLayout;