import React, { Component } from "react"
import "./mobile-select.scss"
import PickerColumn from "./PickerColumn.jsx"
import PropTypes from "prop-types"

export default class MobileSelect extends Component {
  static propTyps = {
    optionGroups: PropTypes.object.isRequired,
    valueGroups: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    itemHeight: PropTypes.number,
    height: PropTypes.number,
    wheel: PropTypes.oneOf(["off", "natural", "normal"]),
  }

  static defaultProps = {
    onClick: () => {},
    itemHeight: 36,
    height: 216,
    wheel: "off",
  }

  renderInner() {
    const { optionGroups, valueGroups, itemHeight, height, onChange, onClick, wheel } = this.props
    const highlightStyle = {
      height: itemHeight,
      marginTop: -(itemHeight / 2),
    }
    const columnNodes = []
    for (let name in optionGroups) {
      columnNodes.push(
        <PickerColumn
          key={name}
          name={name}
          options={optionGroups[name]}
          value={valueGroups[name]}
          itemHeight={itemHeight}
          columnHeight={height}
          onChange={onChange}
          onClick={onClick}
          wheel={wheel}
        />,
      )
    }
    return (
      <div className="picker-inner">
        {columnNodes}
        <div className="picker-highlight" style={highlightStyle}></div>
      </div>
    )
  }

  render() {
    const style = {
      height: this.props.height,
    }

    return (
      <div className="picker-container" style={style}>
        {this.renderInner()}
      </div>
    )
  }
}
