import { useEffect, useState } from "react"
import Verified from "../../../../../../bio/verified/Verified.jsx"

const PlanBio = () => {
  const [user, setUser] = useState({})

  const getData = () => {
    //TODO: get data
    const data = {
      avatar: {
        src: "/images/moc/avatar-big.png",
        alt: "avatar",
      },
      name: "John Doe",
      isVerified: true,
    }
    setUser(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="plan-bio">
      <div className="plan-bio__avatar">
        <img src={user?.avatar?.src} alt={user?.avatar?.alt} />
      </div>
      <div className="plan-bio__info">
        <div className="h4">
          {user?.name} <Verified isVerified={user?.isVerified} />
        </div>

        <div className="plan-bio__verified"></div>
      </div>
    </div>
  )
}

export default PlanBio
