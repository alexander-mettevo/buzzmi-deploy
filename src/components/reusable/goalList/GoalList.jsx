import React from "react";

const textColor = (type) => {
    if(!type) {
        return;
    }
    if(type === "uncompleted") {
        return "goal-list__cell--red-text"
    }
    if(type === "completed") {
        return "goal-list__cell--green-text"
    }
}

const GoalList = ({list}) => {

    return (
        <div className="goal-list">
            <div className="goal-list__head row">
                <div className="col-6"/>
                <div className="col-2 text-center">GOAL</div>
                <div className="col-2 text-center">ACHIEVED</div>
                <div className="col-2 text-center">ACTIVE DAYS</div>
            </div>
            <div className="goal-list__body">
                {list.map(row => {
                    return (
                        <div className="goal-list__row row" key={row.id}>
                            <div className="col-6 goal-list__row-name goal-list__cell">{row.name}</div>
                            <div className="col-2 text-center goal-list__cell">{row.goal}</div>
                            <div className={"col-2 text-center goal-list__cell goal-list__cell--bold " + textColor(row.type)}>{row.achieved}</div>
                            <div className="col-2 text-center goal-list__cell">{row.countActiveDays}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GoalList;