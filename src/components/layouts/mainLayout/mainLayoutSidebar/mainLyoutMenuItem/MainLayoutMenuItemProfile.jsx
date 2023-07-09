import { NavLink } from "react-router-dom"

const MainLayoutMenuItemProfile = ({ src }) => {
  return (
    <li className="main-layout__menu-item menu-item menu-item_mobile-hide">
      <NavLink to={"/info/profile"} className="menu-item__link">
        <img className="menu-item__avatar" src={src} alt={"menu-icon"} />
        <span className="menu-item__name text-s">Profile</span>
      </NavLink>
    </li>
  )
}

export default MainLayoutMenuItemProfile
