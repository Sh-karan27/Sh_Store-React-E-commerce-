import React from 'react';
import Product from '../Product/Product';
import '../GridView/GridView.css';

const GridView = ({ products }) => {
  return (
    <div className='grid-view'>
      {products.map((curElem, index) => {
        return <Product key={curElem.id} {...curElem} />;
      })}
    </div>
  );
};

export default GridView;
