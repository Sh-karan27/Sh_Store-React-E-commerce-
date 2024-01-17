import React, { useState } from 'react';
import '../AddToCart/AddToCart.css';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColors] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div className='colors'>
      <p>
        Colors:
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? 'btn_style active' : 'btn_style'}
              onClick={() => {
                setColors(curColor);
              }}>
              {color === curColor ? <FaCheck className='check' /> : null}
            </button>
          );
        })}
      </p>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <NavLink to='/cart' onClick={() => addToCart(id, color, amount, product)}>
        <button className='btn'>Add to Cart</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
