import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Nav.css';
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
   const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();

  return (
    <div className='navbar'>
      <ul className={menuIcon ? 'navbar-list active' : 'navbar-list'}>
        <li>
          <NavLink to='/' className='navbar-link home-link'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='navbar-link'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' className='navbar-link'>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='navbar-link'>
            Contact
          </NavLink>
        </li>
        {isAuthenticated && <p className='user_name'>{user.name}</p>}
        {isAuthenticated ? (
          <li>
            <button
              className='login_btn'
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }>
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button className='login_btn' onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </li>
        )}

        <li>
          <NavLink to='/cart' className='navbar-link cart'>
            <i class='fa-solid fa-cart-shopping'></i>
            <span className='cart-total-item'>{total_item}</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className='navbar-link close'
            onClick={() => setMenuIcon(false)}>
            <i class='fa-solid fa-x'></i>
          </NavLink>
        </li>
      </ul>

      <div className='mobile-navbar-btn' onClick={() => setMenuIcon(true)}>
        <i class='fa-solid fa-bars '></i>
      </div>
    </div>
  );
};

export default Nav;
