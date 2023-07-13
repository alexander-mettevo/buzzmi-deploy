import FilterTags from "./items/filterTags/FilterTags.jsx"
import FilterItems from "./items/filterItems/FilterItems.jsx"

//todo mockData
const mockTags = [
  {
    title: "all",
    count: 5,
  },
  {
    title: "workouts",
    count: 3,
  },
  {
    title: "habits",
    count: 2,
  },
]

const FilterList = ({ data }) => {
  return (
    <div>
      <FilterTags defaultValue={["all"]} tags={mockTags} />
      {data.length > 0 &&
        data.map((item, index) => <FilterItems items={item} isFirst={index === 0} key={index + "FilterList"} />)}
    </div>
  )
}

export default FilterList
