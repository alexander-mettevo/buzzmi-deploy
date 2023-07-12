import { Link } from "react-router-dom"

const InfoCardMenuDesktop = ({ id, handleCompleteTask, handleDeleteTask }) => {
  return (
    <ul className={"info-desktop-menu "}>
      <li className={"mb-3"}>
        <button onClick={handleCompleteTask} className="d-flex align-items-center ">
          <img className="me-2" src="/images/assets/info-card/subtract_s.svg" alt="" />
          <span>Complete Task</span>
        </button>
      </li>
      <li className={"mb-3"}>
        <Link to={"/hub/edit-task/" + id} className="d-flex align-items-center ЕУЧЕ-">
          <img className="me-2" src="/images/assets/info-card/edit_s.svg" alt="" />
          <span>Edit Task</span>
        </Link>
      </li>
      <li>
        <button onClick={handleDeleteTask} className="d-flex align-items-center">
          <img className="me-2" src="/images/assets/info-card/delete_s.svg" alt="" />
          <span>Delete Task</span>
        </button>
      </li>
    </ul>
  )
}

export default InfoCardMenuDesktop
