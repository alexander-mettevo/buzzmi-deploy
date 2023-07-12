import { useEffect, useState } from "react"
import Button from "../../../../reusable/btns/buttons/Button"
import MobileCustomSelect from "../../../../reusable/multiSelect/items/mobileSelect/MobileCustomSelect"
import { ampm, hours, minutes } from "../form/hubReminder/data"

const SpecificTime = ({ values, setValues }) => {
  const [showSpecificTime, setShowSpecificTime] = useState(false)

  const onChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleShowSpecificTime = () => setShowSpecificTime(!showSpecificTime)

  useEffect(() => {
    if (showSpecificTime && !values) {
      setValues({
        hours: "12",
        minutes: "00",
        ampm: "AM",
      })
    }
  }, [showSpecificTime])

  return (
    <div>
      {!showSpecificTime && (
        <Button onClick={handleShowSpecificTime} className="alt-btn button_s d-lg-none specific-time mt-3">
          Specific time
        </Button>
      )}

      {!!values && showSpecificTime && (
        <div className="mt-3">
          <div className="specific-time__row">
            <div className="specific-time__header">
              <div>
                <img src="/images/hub/form/clock.png" alt="icon" className="multi-box__icon" />
              </div>
              <div className="h4">Set specific time</div>
            </div>
            <button onClick={handleShowSpecificTime} className="specific-time__link text-alt-primary">
              Edit
            </button>
          </div>
          <MobileCustomSelect
            optionGroups={{
              hours,
              minutes,
              ampm,
            }}
            valueGroups={values}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  )
}

export default SpecificTime
