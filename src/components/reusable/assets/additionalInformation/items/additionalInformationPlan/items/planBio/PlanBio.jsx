import { useEffect, useState } from "react"
import Verified from "../../../../../../bio/verified/Verified.jsx"
import styles from "./plan-bio.module.scss"

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
    <div className={styles["plan-bio"]}>
      <div className={styles["plan-bio__avatar"]}>
        <img src={user?.avatar?.src} alt={user?.avatar?.alt} />
      </div>
      <div className={styles["plan-bio__info"]}>
        <div className={"h4"}>
          {user?.name} <Verified isVerified={user?.isVerified} />
        </div>

        <div className={styles["plan-bio__verified"]}></div>
      </div>
    </div>
  )
}

export default PlanBio
