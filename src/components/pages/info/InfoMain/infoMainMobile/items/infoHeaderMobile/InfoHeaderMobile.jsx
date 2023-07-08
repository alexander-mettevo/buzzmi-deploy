import { Link } from "react-router-dom"

const InfoHeaderMobile = () => {
  return (
    <div className="info-top__header-row">
      <Link to="/">
        <img src="/images/info/small-header-logo.svg" alt="logo" />
      </Link>

      <div className="info-top__header-btns">
        <Link className="info-top__header-link" to="/">
          <img src="/images/info/message.svg" alt="logo" />
        </Link>
        <Link className="info-top__header-link" to="/">
          <img src="/images/info/notification.svg" alt="logo" />
        </Link>
        <Link className="info-top__header-link" to="/">
          <img src="/images/info/add.svg" alt="logo" />
        </Link>
        <Link className="info-top__header-link" to="/">
          <img src="/images/info/search.svg" alt="logo" />
        </Link>
      </div>
    </div>
  )
}

export default InfoHeaderMobile
