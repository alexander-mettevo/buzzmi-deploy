import { useState } from "react"
import Badge from "../../../../../../reusable/badge/Badge.jsx"
import cn from "classnames"

const FilterTags = ({ tags, wrapMode = false }) => {
  const [selectedTags, setSelectedTags] = useState([])

  const onTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
      //TODO code for removing tag from url or another logic
    } else {
      setSelectedTags([...selectedTags, tag])
      //TODO code for adding tag to url or another logic
    }
  }

  return (
    <div
      className={cn("badge__row", {
        badge__row_wrap: wrapMode,
      })}
    >
      {tags?.length > 0 &&
        tags.map((tag, index) => (
          <Badge active={selectedTags.includes(tag)} type={tag} key={index} onClick={() => onTagClick(tag)} />
        ))}
    </div>
  )
}

export default FilterTags
