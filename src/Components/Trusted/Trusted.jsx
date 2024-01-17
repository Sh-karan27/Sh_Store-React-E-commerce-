import React from 'react';
import '../Trusted/Trusted.css';
import { SiLogitech } from 'react-icons/si';
import { SiRazer } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { SiOneplus } from 'react-icons/si';


const Trusted = () => {
  return (
    <div className='trusted'>
      <div className='trusted-container'>
        <span>Trusted By 100+ Companies</span>
        <div>
          <SiLogitech className='logitech icons'/>
          <SiRazer className='razer icons'/>
          <FaApple className='apple icons' />
          <SiOneplus  className='oneplus icons'/>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
