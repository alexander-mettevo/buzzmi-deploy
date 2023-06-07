import React from "react";

const Board = ({items}) => {
    return items && items.length > 0 ? (
        <div className="board">
            {items.map(item => {
                return (
                    <div className={"board__item " + (item.itemBgColor ? item.itemBgColor : "")}>
                        {item.img && <div className={"board__item-img " + (item.iconBgColor ? item.iconBgColor : "")}>
                            <img src={item.img} alt={item.text}/>
                        </div>}
                        <div className="board__item-holder">
                            <span className="board__item-text">{item.text}</span>
                            {item.imgList && item.imgList.length > 0 && <div className="board__item-additional">
                                {item.imgList.map((img, index) => {
                                    return (
                                        <div className="board__item-additional-img" key={index}>
                                            <img src={img} alt="img"/>
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                    </div>
                )
            })}

        </div>
    ) : null;
}

export default Board;
