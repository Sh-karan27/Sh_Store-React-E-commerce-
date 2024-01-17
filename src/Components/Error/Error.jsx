import React from 'react';
import '../Error/Error.css';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
      <div className='error-container'>
        <h1>404!</h1>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <NavLink to='/'>
          <button className='btn'>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
