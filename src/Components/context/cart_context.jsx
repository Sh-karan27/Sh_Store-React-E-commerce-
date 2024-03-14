import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem('sh_store');

  // if (localCartData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parsedData = json.PARSE(localCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: '',
  total_price: '',
  shipping_fee: 50000,
};

const CartPorvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };

  // to remove individual items from cart
  const removeProduct = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };

  // icrease and decrease quantity

  const setDecrement = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  // to clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // add data in local storeage

  useEffect(() => {
    // dispatch({type:"CART_TOTAL"})
    // dispatch({ type: "CART_TOTAL_ITEM" });

    dispatch({ type: 'CART_PRICE_TOTAL' });
    localStorage.setItem('sh_store', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
        clearCart,
        setDecrement,
        setIncrement,
      }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartPorvider, useCartContext };
