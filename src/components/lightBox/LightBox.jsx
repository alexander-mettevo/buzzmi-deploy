import React from "react";

const LightBox = ({children, isOpened, onClose}) => {
    return isOpened ? (
        <div className="light-box">
            <span className="light-box__overlay" onClick={onClose}/>
            <div className="light-box__body">
                {children}
            </div>
            <button className="light-box__close" onClick={onClose}>
                <img src="/images/assets/close-icon.svg" alt="close icon"/>
            </button>
        </div>
    ) : null
}

export default LightBox;