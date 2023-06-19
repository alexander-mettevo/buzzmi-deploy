import React, { useEffect, useState } from "react"
import Badge from "../../../../../reusable/badge/Badge.jsx"

const CheckTag = ({ value, tag, onChange }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!value) return
    setChecked(value.includes(tag.value))
  }, [value])

  return (
    <label>
      <input className="check-tags__checkbox" type="checkbox" checked={checked} onChange={() => onChange(tag.value)} />
      <Badge type="secondary" active={checked} title={tag.title} />
    </label>
  )
}

export default CheckTag
