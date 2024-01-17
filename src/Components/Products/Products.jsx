import React from 'react';
import FilterSection from '../FilterSection/FilterSection';
import Sort from '../Sort/Sort';
import ProductList from '../ProductList/ProductList';
// import { useFilterContext } from '../context/FilterContext';
import '../Products/Products.css';

const Products = () => {
  return (
    
    <div className='product-container'>
      <div className='filter-section'>
        <FilterSection />
      </div>
      <section className='product-view-sort'>
        <div className='sort-filter'>
          <Sort />
        </div>
        <div className='main-product'>
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Products;
