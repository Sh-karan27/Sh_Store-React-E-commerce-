import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { useProductContext } from '../context/Productcontext';

const About = () => {
  const {myName} = useProductContext();

  const head = {
    heading: 'About Us',
  };

  return (
    <>
      {myName}
      <HeroSection myHeading={head} />
    </>
  );
};

export default About;
