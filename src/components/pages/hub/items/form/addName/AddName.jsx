import { useEffect, useState } from "react"
import Box from "../../../../../reusable/cards/box/Box.jsx"
import Input from "../../../../../reusable/form/items/inputs/Input.jsx"
import Badge from "../../../../../reusable/badge/Badge.jsx"
import AssetsCards from "../../../../../reusable/cards/assetsCards/AssetsCards.jsx"

const AddName = ({
  title,
  register,
  placeholder,
  name,
  setValue,
  value,
  initPopularNames = [],
  showSuggestedTask = false,
}) => {
  const [popularNames, setPopularNames] = useState(initPopularNames)
  const [selectedNames, setSelectedNames] = useState("")
  const [suggestTasks, setSuggestTasks] = useState([])

  const onBadgeClick = (name) => {
    if (selectedNames.includes(name)) {
      setSelectedNames("")
      setValue("name", "")
    } else {
      setSelectedNames(name)
      setValue("name", name)
    }
  }

  useEffect(() => {
    if (!!value) {
      //TODO get suggested tasks

      const getedSuggestTasks = [
        {
          id: 1,
          title: "Task 1",
          link: "https://picsum.photos/200/300",
          img: "https://picsum.photos/200/300",
        },
        {
          id: 2,
          title: "Task 2",
          link: "https://picsum.photos/200/300",
          img: "https://picsum.photos/200/300",
        },
        {
          id: 3,
          title: "Task 3",
          link: "https://picsum.photos/200/300",
          img: "https://picsum.photos/200/300",
        },
      ]

      setSuggestTasks(getedSuggestTasks)
    } else if (!value && suggestTasks?.length > 0) {
      setSuggestTasks([])
    }
  }, [value])

  return (
    <Box className="hub-form-box">
      <h4 className="h4 mb-3 mb-lg-4">{title}</h4>
      <div className="mb-3 mb-lg-4">
        <Input placeholder={placeholder} name={name} register={register} />
      </div>
      {showSuggestedTask && suggestTasks?.length > 0 && (
        <div className="mb-3">
          <h6 className="h6 mb-3 mb-lg-4">Suggested Tasks</h6>
          <AssetsCards list={suggestTasks} />
        </div>
      )}
      {popularNames?.length > 0 && (
        <>
          <h6 className="h6 mb-3 mb-lg-4">Popular names</h6>
          <div className="badge__row badge__row_in-block">
            {popularNames?.length > 0 &&
              popularNames.map((name, index) => (
                <Badge
                  key={index}
                  onClick={() => onBadgeClick(name)}
                  title={name}
                  type={"secondary"}
                  active={selectedNames.includes(name)}
                />
              ))}
          </div>
        </>
      )}
    </Box>
  )
}

export default AddName
