import React from 'react';
import { useProductContext } from '../context/Productcontext';
import '../FeatureProducts/FeatureProducts.css';
import Product from '../Product/Product';

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>.........Loading</div>;
  }

  return (
    <>
      <div className='feature'>
        <div className='feature-container'>
          <div className='intro-data'>Check Now!</div>
          <div className='common-heading'>Our Feature Services</div>
          <div className='featur-products'>
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
