import React from 'react';
import '../Sort/Sort.css';
import { IoGridSharp } from 'react-icons/io5';
import { FaThList } from 'react-icons/fa';
import { useFilterContext } from '../context/FilterContext';

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } =
    useFilterContext();
  return (
    <div className='sort-container'>
      <div className='sort-button'>
        <button
          className={grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}>
          <IoGridSharp className='gridview-icon' />
        </button>
        <button
          className={!grid_view ? ' active sort-btn' : '  sort-btn'}
          onClick={setListView}>
          <FaThList className='listview-icon' />
        </button>
      </div>

      <div className='total-products'>
        <p>{`${filter_products.length} Products Available`}</p>
      </div>
      <div className='filter-products'>
        <form action='#'>
          <label htmlFor='sort'></label>
          <select name='sort' id='sort' className='sort-selection'onClick={sorting}>
            <option value='lowest'>Price(lowest)</option>
            <option value='#' disabled></option>
            <option value='highest'>Price(highest)</option>
            <option value='#' disabled></option>
            <option value='a-z'>Price(a-z)</option>
            <option value='#' disabled></option>
            <option value='z-a'>Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
