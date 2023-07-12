import { useEffect, useState } from "react"
import CustomRating from "../../../reusable/assets/customRating/CustomRating"
import Verified from "../../../reusable/bio/verified/Verified"
import cn from "classnames"

const InfoBio = () => {
  const [user, setUser] = useState({})

  const getData = () => {
    //TODO: get data
    const data = {
      avatar: {
        src: "/images/moc/avatar-big.png",
        alt: "avatar",
      },
      rating: {
        count: 123,
        value: 4,
      },
      nickname: "janedoe",
      name: "John Doe",
      isVerified: true,
    }
    setUser(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleShare = () => {}

  return (
    <div>
      <div className="plan-bio__info info-top__bio">
        <div className="h3">
          {user?.name} <Verified isVerified={user?.isVerified} />
        </div>
        <div className="info-top__row">
          <span className="text-b">@{user?.nickname}</span>
          <button onClink={handleShare} className="text-r text-alt-primary">
            Share
          </button>
        </div>
        <div className="d-flex align-items-center">
          <CustomRating initialValue={user?.rating?.value} readonly />
          <span
            className={cn("text-r ms-2 mt-1", {
              "text-secondary": user?.rating?.count === 0,
            })}
          >
            {user?.rating?.count} reviews
          </span>
        </div>
      </div>
    </div>
  )
}

export default InfoBio
