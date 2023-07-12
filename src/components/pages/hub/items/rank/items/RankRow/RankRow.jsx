import { useEffect, useState } from "react"
import CircleChart from "../../../../../../reusable/assets/charts/circleChart/CircleChart.jsx"

const getData = async (setData) => {
  try {
    //TODO get data from server
    const data = {
      progress: 35,
      currentRank: {
        name: "Buzz Rookie",
        image: {
          src: "/images/moc/buzz-rookie.svg",
        },
      },
      nextRank: {
        name: "Social Butterfly",
        image: {
          src: "/images/moc/social-butterfly.svg",
        },
      },
    }

    setData(data)
  } catch (e) {
    console.error(e)
  }
}

const RankRow = ({ withAvatar }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    getData(setData)
  }, [])

  return (
    <div className="rank-row">
      <div className="rank-row__label">
        <div className="text-r">Your current rank</div>
        <div>
          <img className="rank-row__img" src={data?.currentRank?.image?.src} alt="current rank icon" />
        </div>
        <div className="h6">{data?.currentRank?.name}</div>
      </div>
      <div>
        <CircleChart progress={data.progress} withAvatar={withAvatar} />
      </div>
      <div className="rank-row__label">
        <div className="text-r">Next Rank</div>
        <div>
          <img className="rank-row__img" src={data?.nextRank?.image?.src} alt="current rank icon" />
        </div>
        <div className="h6">{data?.nextRank?.name}</div>
      </div>
    </div>
  )
}

export default RankRow
