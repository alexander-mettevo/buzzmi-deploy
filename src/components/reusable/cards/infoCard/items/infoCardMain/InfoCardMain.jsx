import React, {useState} from 'react';
import Badge from "../../../../badge/Badge.jsx";
import InfoCardMenu from "../infoCardMenu/InfoCardMenu.jsx";

const InfoCardMain = ({image, badges, info, type, id}) => {
  const [showMenu, setShowMenu] = useState(false);



  return (
    <div className={`d-flex info-card ${showMenu ? 'show-menu' : ''}`}>
      <div className='me-21'>
        <img className={'info-card__image'} src={image.src} alt={image?.alt}/>
      </div>
      <div className={`d-flex info-card__content flex-column ${!badges?.length > 0 ? 'justify-content-center' : ''}`}>
        <div className={'info-card__badges'}>
          {badges?.length > 0 && badges.map((badge, index) => (
            <span className={'me-2'}>
               <Badge type={badge.type} key={index + `${badge.type}`}/>
            </span>
          ))}
        </div>
        <div>
          <div className={'h4 my-2'}>{info.title}</div>
          <div className={'info-card__text text-r'}>{info.text}</div>
        </div>
      </div>
        {type === 'menu' && <InfoCardMenu showMenu={showMenu} setShowMenu={setShowMenu} id={id}/> }
    </div>
  );
};

export default InfoCardMain;