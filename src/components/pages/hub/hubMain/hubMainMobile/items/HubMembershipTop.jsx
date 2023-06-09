import { Link } from "react-router-dom"

const HubMembershipTop = () => {
  return (
    <div className={"d-flex justify-content-between align-items-center"}>
      <h4 className="h4">Membership</h4>
      <Link to="/hub/upgrade" className="text-alt-primary">
        See my benefits
      </Link>
    </div>
  )
}

export default HubMembershipTop
