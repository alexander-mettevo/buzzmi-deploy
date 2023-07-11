import { Link } from "react-router-dom"
import LogoSVG from "../LogoSVG"

const SmallHeaderLogo = () => {
  return (
    <Link to="/" className="small-header-logo">
      <LogoSVG />
      <span className="h5">BUZZMI</span>
    </Link>
  )
}

export default SmallHeaderLogo
