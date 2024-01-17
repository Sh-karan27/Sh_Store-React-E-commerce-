import React from 'react';
import '../HeroSection/HeroSection.css';
import heroImg from '../Image/hero-img.jpeg';
import { NavLink } from 'react-router-dom';

const HeroSection = ({ myHeading }) => {
  const { heading } = myHeading;

  return (
    <div className='hero-section'>
      <div className='hero-container'>
        <div className='heading'>
          <h3>Welcome to</h3>
          <h1>{heading}</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
            praesentium architecto ipsum labore deserunt nulla sint dolores
            repudiandae ad.
          </span>

          <NavLink to='/products'>
            <button className='btn'>Shop Now</button>
          </NavLink>
        </div>
        <div className='hero-img'>
          <img src={heroImg} alt='' className='hero-img' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
