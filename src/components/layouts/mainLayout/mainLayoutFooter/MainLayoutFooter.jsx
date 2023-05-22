import React from 'react';
import {Link} from "react-router-dom";
import MainLayoutFooterSelect from "./mainLayoutFooterSelect/MainLayoutFooterSelect.jsx";

const MainLayoutFooter = () => {
  return (
    <footer className="main-layout__footer">
      <ul>
        <li className={'text-s'}>© 2023 Buzzmi</li>
        <li><a href="/about" className={'text-s'}>About Buzzmi</a></li>
        <li><a href="/support" className={'text-s'}>Support</a></li>
        <li><a href="/privacy" className={'text-s'}>Privacy Policy</a></li>
        <li><a href="/terms" className={'text-s'}>Terms of Service</a></li>
        <li className={'text-s'}>
          <MainLayoutFooterSelect />
        </li>
      </ul>
    </footer>
  );
};

export default MainLayoutFooter;