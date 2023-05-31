import React from 'react';
import {Link, useLocation} from "react-router-dom";

const LinkTabs = ({list}) => {
  const location = useLocation();

  return (
    <ul className="react-tabs__tab-list" role="tablist">
      {list.length > 0 && list.map((item, index) => (
        <Link
          className={`react-tabs__tab
          ${location.pathname.includes(item.href) ? 'react-tabs__tab--selected' : ''}
          `}
          to={item.href}
          key={index + 'linkTabs'}
        >
          {item.title}
        </Link>
        ))}
    </ul>
  );
};

export default LinkTabs;