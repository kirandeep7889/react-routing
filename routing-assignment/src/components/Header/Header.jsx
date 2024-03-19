import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link" activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className="nav-link" activeClassName="active">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" className="nav-link" activeClassName="active">
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
