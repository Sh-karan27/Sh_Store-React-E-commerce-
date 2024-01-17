const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let { id, color, amount, product } = action.payload;

    // tackel multiple same products in cart

    let multpleProducts = state.cart.find((curElem) => {
      return curElem.id === id + color;
    });

    if (multpleProducts) {
      let updateProductQuantity = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newQuantity = curElem.amount + amount;
          if (newQuantity >= curElem.max) {
            newQuantity = curElem.max;
          }

          return {
            ...curElem,
            amount: newQuantity,
          };
        } else {
          return {
            curElem,
          };
        }
      });
      return {
        ...state,
        cart: updateProductQuantity,
      };
    } else {
      let cartProduct;

      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }
  // to set quantity

  if (action.type === 'SET_DECREMENT') {
    let updateProductQuantity = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updateProductQuantity,
    };
  }

  // to remove item from cart
  if (action.type === 'REMOVE_PRODUCT') {
    let updatedCart = state.cart.filter((curItem) => {
      return curItem.id !== action.payload;
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }
  // to empty or to clear car
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: [],
    };
  }
  // if (action.type === 'CART_TOTAL_ITEM') {
  //   let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
  //     let { amount } = curElem;
  //     initialVal = initialVal + amount;
  //     return initialVal;
  //   }, 0);
  //   return {
  //     ...state,
  //     total_item: updatedItemVal,
  //   };
  // }
  if (action.type === 'DECREASE_QUANTITY') {
    // set quantityy of items

    let updateProductQuantity = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);

        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updateProductQuantity };
  }

  if (action.type === 'INCREASE_QUANTITY') {
    let updateProductQuantity = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        // console.log(curElem);

        let incAmount = curElem.amount + 1;
        if (incAmount >= 6) {
          incAmount = 6;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updateProductQuantity };
  }
  // if (action.type === 'CART_TOTAL') {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, amount } = curElem;
  //     initialVal = initialVal + price * amount;

  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }

  if (action.type === 'CART_PRICE_TOTAL') {
    let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;

        accum.total_item += amount;
        accum.total_price += price * amount;
        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );
    return {
      ...state,
      total_item,
      total_price,
    };
  }
  return state;
};

export default cartReducer;
