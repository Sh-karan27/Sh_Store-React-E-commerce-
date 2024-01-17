import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import logo from '../Image/logo.png';
import '../Header/Header.css';

const Header = () => {
  return (
    <div className='main-header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='logo' />
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;
