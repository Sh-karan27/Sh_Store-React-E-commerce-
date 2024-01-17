import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { MdDeleteForever } from 'react-icons/md';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, name, color, price, image, amount }) => {
  // const setDecrease = () => {
  //   //  amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };
  // const setIncrease = () => {
  //   //  amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  const { removeProduct, setDecrement, setIncrement } = useCartContext();

  return (
    <div className='cart_item_container'>
      <div className='cart-imgae-name'>
        <div className='cart-img'>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div className='color-name'>
          <p>{name}</p>
          <div className='color-div'>
            <p>Color:</p>
            <div
              className='color-style'
              style={{ backgroundColor: color, color: color }}></div>
          </div>
        </div>
      </div>

      {/* price  */}
      <div className='price-div'>
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* quantity */}
      <div className='quantity-div'>
        <CartAmountToggle
          amount={amount}
          setDecrease={()=>setDecrement(id)}
          setIncrease={()=>setIncrement(id)}
        />
      </div>
      {/* subtotal */}
      <div className='subtotal-div'>
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div className='price-div'>
        <p>
          <MdDeleteForever
            className='delete-cart-item'
            onClick={() => removeProduct(id)}
          />
        </p>
      </div>
    </div>
  );
};

export default CartItem;
