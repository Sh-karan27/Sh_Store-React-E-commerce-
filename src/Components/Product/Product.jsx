import React from 'react';
import '../Product/Product.css';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`} className='feature-product'>
      <figure>
        <img src={image} alt={name} className='feature-product-img' />
        <figcaption className='caption'>{category}</figcaption>
      </figure>

      <div className='card-data'>
        <div className='card-data-flex'>
          <h3>{name}</h3>
          <p className='card-data-price'>{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;



// thapaserialnoa;