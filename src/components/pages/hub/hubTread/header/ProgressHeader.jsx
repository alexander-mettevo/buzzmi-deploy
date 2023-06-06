import React from "react";

const ProgressHeader = ({text}) => {
    return(
        <div className="progress-header">
            <span className="progress-header__text">{text}</span>
        </div>
    )
}

export default ProgressHeader;