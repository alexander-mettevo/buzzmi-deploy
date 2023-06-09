import React from 'react';
import ShowMore from "../../../../reusable/assets/showMore/ShowMore.jsx";
import Discount from "./Discount.jsx";

const SubscriptionCard = ({title, icon, discount, text, onShowMore, content, specialOffer, current, hideBtn}) => {
    return (
        <div className="subscription-card">
            <div className="subscription-card__top">
                <div className="subscription-card__top_left">
                    <div className="subscription-card__icon">
                        <img className='subscription-card__icon' src={icon} alt="icon"/>
                    </div>
                    <div className="h5 text-alt-primary">{title}</div>
                </div>
                {discount && <Discount discount={discount} specialOffer={specialOffer}/>}
            </div>
            <ShowMore
                onShowMore={onShowMore}
                text={text}
                hideBtn={hideBtn}
                labelText="current"
                current={current}
                content={content}
            />
        </div>
    );
};

export default SubscriptionCard;