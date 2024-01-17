import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import '../ListView/ListView.css';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <div className='list_container'>
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div className='list-view-card'>
            <div className='listview-product'key={curElem.id}>
              <figure>
                <img src={image} alt={name} className='listview-product-img' />
              </figure>
            </div>
            <div className='listview-card-data'>
              <h3>{name}</h3>
              <p>
                <FormatPrice price={price} />
              </p>
              <p>{description.slice(0, 90)}...</p>

              <NavLink to={`/singleproduct/${id}`}>
                <button className='btn'>Read More</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
