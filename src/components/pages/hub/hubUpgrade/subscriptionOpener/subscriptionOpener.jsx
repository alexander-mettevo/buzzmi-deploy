import React from "react";
import cn from "classnames";

const SubscriptionOpener = ({img, active, name, id, onChange, isCurrent}) => {
    return(
        <div className={cn("subscription-opener", {"subscription-opener--active": active})} onClick={() => onChange(id)}>
            <div className="subscription-opener__holder">
                {isCurrent && <span className="subscription-opener__label">Your Current Level</span>}
                <div className="subscription-opener__img">
                    <img src={img} alt={name}/>
                </div>
                <span className="subscription-opener__name">{name}</span>
                {!active && <span className="subscription-opener__more">Learn more</span>}
                {active && <em className="subscription-opener__marker"/>}
            </div>
        </div>
    )
}

export default SubscriptionOpener;
