import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Application Name</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> &nbsp;
    <NavLink to="/Credentials" activeClassName="is-active" exact={true}>Login Credentials</NavLink> &nbsp;
  </header>
);

export default Header;
