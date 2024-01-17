import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Trusted from '../Trusted/Trusted';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import '../Home/Home.css';

const Home = () => {
  const head = {
    heading: 'Sh_Store',
  };

  return (
    <>
      <HeroSection myHeading={head} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
