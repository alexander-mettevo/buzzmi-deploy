import { Rating } from "react-simple-star-rating"
import { FullStar } from "./FullStar"
import EmptyStar from "./EmptyStar"

const CustomRating = (props) => {
  return <Rating {...props} fillIcon={<FullStar />} className="rating" emptyIcon={<EmptyStar />} />
}

export default CustomRating
