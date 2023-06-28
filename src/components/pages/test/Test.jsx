import React, { useState } from "react"
import ValidationSchema from "../../../../form-validator/ValidationSchema.js"
import { useFormValidator } from "../../../../form-validator/hooks/index.js"
import MobileSelect from "../../reusable/multiSelect/items/mobileSelect/MobileSelect.jsx"

const options = {
  title: ["Mr.", "Mrs.", "Ms.", "Dr."],
  firstName: ["John", "Micheal", "Elizabeth"],
  secondName: ["Lennon", "Jackson", "Jordan", "Legend", "Taylor"],
}

const Test = () => {
  const [valueGroups, setValueGroups] = useState({
    title: "Mr.",
    firstName: "Micheal",
    secondName: "Jordan",
  })

  const onChange = (name, value) => {
    setValueGroups({
      ...valueGroups,
      [name]: value,
    })
  }

  return <MobileSelect optionGroups={options} valueGroups={valueGroups} onChange={onChange} />
}

export default Test
