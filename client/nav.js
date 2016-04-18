import React from 'react';
import Search from './search.jsx';

const Nav = ({handleSearch}) => (

  <nav className="navBar">
    <Search handleSearch = {handleSearch} />
  </nav>
);

export default Nav;
