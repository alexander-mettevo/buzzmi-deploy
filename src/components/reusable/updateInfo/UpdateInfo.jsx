import React from "react";

const UpdateInfo = ({text, onBtnClick}) => {
    return(
        <div className="update-info mb-4 pt-2 d-flex justify-content-between">
            <span className="update-info__text">{text}</span>
            {onBtnClick && <button className="update-info__btn" onClick={onBtnClick}>
                <i className="fa-regular fa-arrow-rotate-right"/>
            </button>}
        </div>
    )
}

export default UpdateInfo;