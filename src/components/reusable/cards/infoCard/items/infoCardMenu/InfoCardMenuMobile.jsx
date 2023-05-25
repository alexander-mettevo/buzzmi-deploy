import React, {useEffect, useRef, useState} from 'react';

const InfoCardMenuMobile = ({id}) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = (event) => {
    event.stopPropagation();
    if (!menuRef.current.contains(event.target)) {
      setShow(!show);
    }
  }

  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleMenu);
    } else {
      document.removeEventListener('click', handleMenu);
    }
    return () => {
      document.removeEventListener('click', handleMenu);
    }
  }, [show])

  const handleCompleteTask = () => {}

  const handleEditTask = () => {}

  const handleDeleteTask = () => {}

  return (
      <ul className={'info-mobile-menu'}>
        <li className={'me-2'}>
          <button className={'text-center info-mobile-menu__item'}>
            <img src="/images/assets/info-card/subtract.svg" alt=""/>
            <div>Complete</div>
          </button>
        </li>
        <li className={'me-2'}>
          <button className={'text-center info-mobile-menu__item'}>
            <img src="/images/assets/info-card/edit.svg" alt=""/>
            <div>Edit</div>
          </button>
        </li>
        <li className={'me-2'}>
          <button className={'text-center info-mobile-menu__item'}>
            <img src="/images/assets/info-card/delete.svg" alt=""/>
            <div>Delete</div>
          </button>
        </li>
      </ul>
  );
};

export default InfoCardMenuMobile;