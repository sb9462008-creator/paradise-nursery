import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleGetStarted = () => {
    setShowLanding(false);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowCart(true);
    setShowLanding(false);
  };

  const handleShowProducts = () => {
    setShowCart(false);
    setShowLanding(false);
  };

  const handleHome = () => {
    setShowLanding(true);
    setShowCart(false);
  };

  return (
    <Provider store={store}>
      {showLanding && (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      )}
      {!showLanding && !showCart && (
        <ProductList onCartClick={handleShowCart} onHome={handleHome} />
      )}
      {!showLanding && showCart && (
        <CartItem
          onContinueShopping={handleShowProducts}
          onHome={handleHome}
          onCartClick={handleShowCart}
        />
      )}
    </Provider>
  );
}

export default App;