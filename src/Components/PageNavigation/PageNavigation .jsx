import React from 'react';
import { NavLink } from 'react-router-dom';
import "../PageNavigation/Navigation.css"

const PageNavigation = ({ title }) => {
  return (
    <div className='page_navigation'>
      <NavLink to='/'className="page_name">Home</NavLink>
      /{title}
    </div>
  );
};

export default PageNavigation;
