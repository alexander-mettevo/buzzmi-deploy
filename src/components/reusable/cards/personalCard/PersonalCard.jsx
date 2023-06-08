import React from "react";

const PersonalCard = ({
    name,
    nickName,
    info,
    values,
    img
}) => {
    return (
        <div className="personal-card">
            <div className="personal-card__img">
                <img src={img} alt={name}/>
            </div>
            <div className="personal-card__description">
                <div className="personal-card__description-holder">
                    <div className="personal-card__description-row">
                        <span className="personal-card__name">{name}</span>
                        <span className="personal-card__nick-name">{nickName}</span>
                    </div>
                    {info && <p className="personal-card__info">{info}</p>}
                </div>
                {values && values.length > 0 && <div className="personal-card__values">
                    {values.map((valuesItem, index) => {
                        return(
                            <div className="personal-card__values-item" key={valuesItem.value + index}>
                                <span className="personal-card__values-item-text">{valuesItem.value}</span>
                                <div className="personal-card__values-item-icon">
                                    <img src={valuesItem.img} alt="icon"/>
                                </div>
                            </div>
                        )
                    })}
                </div>}
            </div>
        </div>
    )
}

export default PersonalCard;
