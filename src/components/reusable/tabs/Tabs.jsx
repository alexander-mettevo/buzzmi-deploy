import React from "react";


const Tabs = ({items}) => {
    return items || items.length > 0 ? (
        <div className="tabs">
            <div className="tabs__nav">

            </div>
        </div>
    ) : null
}

export default Tabs;