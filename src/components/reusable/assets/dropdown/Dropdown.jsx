import React, {useState, useRef, useEffect} from 'react';
import './Dropdown.scss';

const DefaultIcon = () => <i className="fa-solid fa-angle-down"></i>;
const Dropdown = ({ title, Icon, Content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const IconComponent = Icon || DefaultIcon;


  return (
    <div className='dropdown'>
      <button className='dropdown__button' onClick={() => setIsOpen(!isOpen)}>
        <span className='h4'>{title}</span>
        <div className={`dropdown__arrow ${isOpen ? "dropdown__arrow-open" : ""}`}>
          <IconComponent/>
        </div>
      </button>
      <div
        className={`dropdown__content ${isOpen ? 'dropdown__content--open' : ''}`}
        style={{'--content-height': isOpen ? `${contentRef.current?.children[0]?.scrollHeight}px` : 0}}
        ref={contentRef}
      >
        {isOpen && <Content/>}
      </div>
    </div>
  );
}

export default Dropdown;
