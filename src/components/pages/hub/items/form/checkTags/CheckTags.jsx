import React from "react"
import CheckTag from "./CheckTag.jsx"

const CheckTags = ({ tags, value, setValue, valueName }) => {
  const onTagClick = (tag) => {
    if (value.includes(tag)) {
      setValue(
        valueName,
        value.filter((t) => t !== tag),
      )
    } else {
      setValue(valueName, [...value, tag])
    }
  }

  return (
    <div className="check-tags">
      {tags?.length > 0 &&
        tags.map((tag) => <CheckTag value={value} key={tag.value} tag={tag} onChange={onTagClick} />)}
    </div>
  )
}

export default CheckTags
