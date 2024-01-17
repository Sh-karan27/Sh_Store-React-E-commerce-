import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

const ProductList = ({ products }) => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
