import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import { NavList } from "./NavigationStyled";


const Navigation = () => (
  <NavList className="navagationList">
    {mainRoutes.map(({ path, name, exact }) => (
      <li key={path} className="navagationListItem">
        <NavLink
          to={path}
          exact={exact}
          className="navagationLink"
          activeClassName="activeLink"
        >
          {name}
        </NavLink>
      </li>
    ))}
  </NavList>
);

export default Navigation;
