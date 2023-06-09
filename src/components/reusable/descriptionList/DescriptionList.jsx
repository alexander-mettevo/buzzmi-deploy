import React from "react";

const DescriptionList = ({items}) => {
    return items && items.length > 0 ? (
        <div className="description-list">
            {items.map((item) => {
                return(
                    <div className="description-list__item" key={item.id}>
                        <div className="description-list__item-img">
                            <img src={item.img} alt="icon"/>
                        </div>
                        {item.text && <div className="description-list__item-text" dangerouslySetInnerHTML={{__html: item.text}}/>}
                    </div>
                )
            })}

        </div>
    ) : null
}

export default DescriptionList;
