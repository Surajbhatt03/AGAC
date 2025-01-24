import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Research Forum</h1>
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="active">
        Create Thread
      </NavLink>
    </nav>
  </header>
);

export default Header;
