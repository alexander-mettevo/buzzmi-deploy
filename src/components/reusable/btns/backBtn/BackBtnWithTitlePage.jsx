import React from 'react';
import {useNavigate} from "react-router-dom";

const BackBtnWithTitlePage = ({title}) => {
  const navigate = useNavigate();

  return (
    <div className='back-btn back-btn_with-title' >
      <button className="back-btn__content" onClick={() => navigate(-1)}>
        <i className="back-btn__icon fa-solid fa-arrow-right"></i>
      </button>
      <span className='h3'>{title}</span>
      <span></span>
    </div>
  );
};

export default BackBtnWithTitlePage;