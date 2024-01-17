import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../Helpers/FormatPrice';

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    clearFilters,
    all_products,
  } = useFilterContext();

  // TO GET THE UNIQUE DATA OF EACH FIELD
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === 'colors') {
      // return ['all', ...new Set([].concat(...newVal))];
      newVal = newVal.flat();
    }
    return (newVal = ['all', ...new Set(newVal)]);

    // console.log(newVal);
  };

  // we need unique data

  const categoryData = getUniqueData(all_products, 'category');
  const comnpanyData = getUniqueData(all_products, 'company');
  const colorsData = getUniqueData(all_products, 'colors');

  return (
    <>
      <div className='filter-container'>
        <div className='filter-seach'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type='text'
              name='text'
              value={text}
              onChange={updateFilterValue}
              placeholder='Search'
            />
          </form>
        </div>

        <div className='category-filter '>
          <h2>Category</h2>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type='button'
                name='category'
                value={curElem}
                onClick={updateFilterValue}
                className={
                  curElem === category ? 'active category-btn' : 'category-btn'
                }>
                {curElem}
              </button>
            );
          })}
        </div>
        <div className='company-filter'>
          <h2>Company</h2>
          <form action='#'>
            <select
              className='sort-selection '
              name='company'
              id='company'
              onClick={updateFilterValue}>
              {comnpanyData.map((curElem, index) => {
                return (
                  <option value={curElem} name='company' key={index}>
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className='colors-filter'>
          <h2>Colors</h2>
          <div className='filter-color-style'>
            {colorsData.map((curColor, index) => {
              if (curColor === 'all') {
                return (
                  <button
                    key={index}
                    value={curColor}
                    name='color'
                    className='all-color-btn'
                    onClick={updateFilterValue}>
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  value={curColor}
                  name='color'
                  onClick={updateFilterValue}
                  className={
                    color === curColor ? 'btn_style active' : 'btn_style'
                  }
                  style={{ background: curColor }}>
                  {color === curColor ? <FaCheck className='check' /> : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className='filter-price'>
          <h2>Price</h2>
          <p>
            <FormatPrice price={price} />
          </p>
          <input
            name='price'
            type='range'
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
          />
        </div>
        <div className='filter-clear'>
          <button className='btn' onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
