import React from 'react';
import {Link} from "react-router-dom";
import MainLayoutFooterSelect from "./MainLayoutFooterSelect.jsx";

const MainLayoutFooter = () => {
  return (
    <div className="main-layout__footer">
      <ul>
        <li className={'text-s'}>© 2023 Buzzmi</li>
        <li><Link to="/about" className={'text-s'}>About Buzzmi</Link></li>
        <li><Link to="/support" className={'text-s'}>Support</Link></li>
        <li><Link to="/privacy" className={'text-s'}>Privacy Policy</Link></li>
        <li><Link to="/terms" className={'text-s'}>Terms of Service</Link></li>
        <li className={'text-s'}>
          <MainLayoutFooterSelect />
        </li>
      </ul>
    </div>
  );
};

export default MainLayoutFooter;