import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './Productcontext';
import reducer from '../reducer/filter.Reducer';

const FilterContext = createContext();

const initiaalState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initiaalState);

  // to set grid view

  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };

  // to set list view
  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
  };

  // update the filter value
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
  };

  // clear filter
  const clearFilters = () => {
    return dispatch({ type: 'CLEAR_FILTERS' });
  };

  // to sort the products
  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORTING_PRODUCTS' });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
