import LinkTabs from "../../../../reusable/assets/linkTabs/LinkTabs"
import { Link } from "react-router-dom"

const tabs = [
  {
    href: "/info/profile",
    title: "Profile",
  },
  {
    href: "/info/main",
    title: "Information",
  },
  {
    href: "/info/about",
    title: "About",
  },

  {
    href: "/info/photos",
    title: "Photos",
  },
  {
    href: "/info/videos",
    title: "Videos",
  },
]

const InfoDesktopTabs = () => {
  return (
    <div className="info-tabs">
      <LinkTabs list={tabs} />
      <div className="info-tabs__select">
        <div className="info-tabs__select-title">More</div>
        <ul className="info-tabs__select-list">
          <li>
            <Link to="/">Link 1</Link>
          </li>
          <li>
            <Link to="/">Link 2</Link>
          </li>
          <li>
            <Link to="/">Link 3</Link>
          </li>
          <li>
            <Link to="/">Link 4</Link>
          </li>
          <li>
            <Link to="/">Link 5</Link>
          </li>
          <li>
            <Link to="/">Link 6</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InfoDesktopTabs
