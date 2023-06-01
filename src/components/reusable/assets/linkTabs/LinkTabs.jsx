import React from 'react';
import {NavLink} from "react-router-dom";

const LinkTabs = ({list}) => (
  <ul className="react-tabs__tab-list" role="tablist">
    {list.length > 0 && list.map((item, index) => (
      <NavLink
        className={({isActive}) =>
          isActive ? "react-tabs__tab react-tabs__tab--selected" : "react-tabs__tab"
        }
        to={item.href}
        key={index + 'linkTabs'}
      >
        {item.title}
      </NavLink>
    ))}
  </ul>
)


export default LinkTabs;