import Button from "../../../../../reusable/btns/buttons/Button.jsx"
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

  const handleAddNew = () => {}

  return (
    <div className="check-tags">
      {tags?.length > 0 &&
        tags.map((tag) => <CheckTag value={value} key={tag.value} tag={tag} onChange={onTagClick} />)}
      <Button className="alt-btn button_s check-tags__add-btn" onClick={handleAddNew}>
        + Add new
      </Button>
    </div>
  )
}

export default CheckTags
