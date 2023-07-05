import { useNavigate } from "react-router-dom"

const BackBtnMobile = () => {
  const navigate = useNavigate()

  return (
    <div className="back-btn back-btn_m">
      <button className="back-btn__content" onClick={() => navigate(-1)}>
        <i className="back-btn__icon fa-solid fa-arrow-left"></i>
      </button>
    </div>
  )
}

export default BackBtnMobile
