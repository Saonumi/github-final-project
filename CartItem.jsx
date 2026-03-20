import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cart.map(item => (
        <div key={item.name}>
          <img src={item.image} alt={item.name} />
          <div>{item.name} - ${item.cost}</div>
          <div>Total: ${item.cost * item.quantity}</div>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity - 1}))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}
      <button onClick={onContinueShopping}>Continue Shopping</button>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
};

export default CartItem;
