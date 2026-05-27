import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

function CartItem({ onContinueShopping, onHome, onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#" onClick={onHome}>Paradise Nursery</a>
        <ul className="navbar-links">
          <li><a href="#" onClick={onHome}>Home</a></li>
          <li><a href="#" onClick={onContinueShopping}>Plants</a></li>
          <li>
            <div className="cart-icon" onClick={onCartClick}>
              ðŸ›’
              {totalCartCount > 0 && (
                <span className="cart-count">{totalCartCount}</span>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Start shopping!</p>
            <button className="continue-shopping-btn" onClick={onContinueShopping} style={{marginTop: '1rem'}}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Unit Price: \</p>
                  <p>Total: \</p>
                </div>
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => handleDecrement(item)}>-</button>
                  <span className="qty-display">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
                  <button className="delete-btn" onClick={() => handleDelete(item.name)}>Delete</button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <h2>Total Amount: \</h2>
              <div className="cart-actions">
                <button className="continue-shopping-btn" onClick={onContinueShopping}>
                  Continue Shopping
                </button>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;