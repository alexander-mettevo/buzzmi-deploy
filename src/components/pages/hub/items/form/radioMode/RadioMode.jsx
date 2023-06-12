import React from "react"
import cn from "classnames"

const RadioMode = ({ variants, name, value, setValue }) => {
  const handleChange = (event) => {
    setValue(name, event.target.value)
  }

  return (
    <div className="radio-mode">
      {variants.map((item) => (
        <label
          className={cn("react-tabs__tab", {
            "react-tabs__tab--selected": item.value === value,
          })}
          key={item.value}
        >
          <span>{item.title}</span>

          <input onChange={handleChange} type="radio" value={item.value} name={name} />
        </label>
      ))}
    </div>
  )
}

export default RadioMode
