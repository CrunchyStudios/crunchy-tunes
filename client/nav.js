import React from 'react';
import Search from './search.jsx';

const Nav = ({handleSearch, searching}) => (

  <nav className="navBar">
    <Search handleSearch = {handleSearch} searching={searching} />
  </nav>
);

export default Nav;
