import { Outlet } from "react-router-dom"
import MainLayoutSidebar from "./mainLayoutSidebar/MainLayoutSidebar.jsx"
import MainLayoutFooter from "./mainLayoutFooter/MainLayoutFooter.jsx"

const MainLayout = () => {
  return (
    <div className="main-layout main-layout__container">
      <div className="main-layout__wrapper">
        <MainLayoutSidebar />
        <div className="main-layout__content">
          <Outlet />
        </div>
      </div>

      <MainLayoutFooter />
    </div>
  )
}

export default MainLayout
