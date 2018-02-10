import React from 'react';
import { Link } from 'react-router-dom';
import MdGoat from 'react-icons/lib/md/goat';
import SearchBar from './SearchBar';

const Navbar = () => (
  <header id="navbar-container">
    <ul id="navbar-list">
      <li id="brand"><Link to="/"><MdGoat id="brand-logo" /> GOAT TV</Link></li>
      <li><Link to="/movies">MOVIES</Link></li>
      <li><Link to="/tv">TV SHOWS</Link></li>
      <li><Link to="/people">PEOPLE</Link></li>
      <SearchBar />
    </ul>
  </header>
);

export default Navbar;
