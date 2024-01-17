import React from 'react';
import { useCartContext } from '../context/cart_context';
import '../Cart/Cart.css';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import FormatPrice from '../Helpers/FormatPrice';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { isAuthenticated, user } = useAuth0();

  if (cart.length === 0) {
    return (
      <div className='empty_cart'>
        <h3>
          Cart is empty
          <MdOutlineRemoveShoppingCart />
        </h3>
      </div>
    );
  }
  return (
    <>
      <div className='cart-container'>
        {isAuthenticated && (
          <div className='userinfo'>
            <img src={user.profile} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        )}
        <div className='cart_heading'>
          <h2>Item</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
          <h2>Remove</h2>
        </div>
        <hr className='cart_hr' />
        <div className='cart_item'>
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr className='cart_hr' />
        <div className='cart-two-button'>
          <NavLink to='/products'>
            <button className='btn'>Continue Shopping</button>
          </NavLink>
          <button className='btn clear_cart_btn' onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <div className='oder_total_amount'>
          <div className='oder-toal-subdata'>
            <div>
              <p>Subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>Shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>Order Total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
