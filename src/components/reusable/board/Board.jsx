import React from "react";
import {Link} from "react-router-dom";

const Board = ({items}) => {
    return items && items.length > 0 ? (
        <div className="board">
            {items.map(item => {
                const itemContent = <>
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
                </>
                return item.link ? (
                    <Link to={item.link} className={"board__item " + (item.itemBgColor ? item.itemBgColor : "")} key={item.id}>{itemContent}</Link>
                ) :  (
                    <div className={"board__item " + (item.itemBgColor ? item.itemBgColor : "")} key={item.id}>{itemContent}</div>
                )
            })}

        </div>
    ) : null;
}

export default Board;
