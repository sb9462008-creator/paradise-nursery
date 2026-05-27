import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Spider Plant',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400',
        description: 'Great air purifier, easy to grow. Perfect for beginners.',
      },
      {
        name: 'Peace Lily',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400',
        description: 'Elegant white flowers, purifies indoor air effectively.',
      },
      {
        name: 'Boston Fern',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        description: 'Lush green fronds, removes toxins from the air.',
      },
      {
        name: 'Rubber Plant',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=400',
        description: 'Bold glossy leaves, excellent natural air cleaner.',
      },
      {
        name: 'Aloe Vera',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400',
        description: 'Medicinal succulent plant, purifies air naturally.',
      },
      {
        name: 'Bamboo Palm',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400',
        description: 'Tropical feel, removes formaldehyde from the air.',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400',
        description: 'Calming scent, beautiful purple blooms, stress relief.',
      },
      {
        name: 'Jasmine',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1587530842249-e7a5c4a8e8e8?w=400',
        description: 'Sweet fragrance, delicate white flowers.',
      },
      {
        name: 'Rosemary',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400',
        description: 'Aromatic culinary herb, great for cooking and fragrance.',
      },
      {
        name: 'Mint',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400',
        description: 'Fresh cooling scent, versatile culinary herb.',
      },
      {
        name: 'Gardenia',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400',
        description: 'Intensely fragrant white blooms, elegant appearance.',
      },
      {
        name: 'Lemon Balm',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400',
        description: 'Citrus scent, calming and stress-relieving properties.',
      },
    ],
  },
  {
    category: 'Foliage Plants',
    plants: [
      {
        name: 'Monstera',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400',
        description: 'Iconic split leaves, dramatic tropical statement plant.',
      },
      {
        name: 'Pothos',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400',
        description: 'Trailing vines, very easy to care for, great for shelves.',
      },
      {
        name: 'Snake Plant',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1593691512429-cf965a9a9b5e?w=400',
        description: 'Upright architectural leaves, nearly indestructible.',
      },
      {
        name: 'ZZ Plant',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400',
        description: 'Glossy dark leaves, extremely drought tolerant.',
      },
      {
        name: 'Philodendron',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400',
        description: 'Heart-shaped leaves, fast and easy grower.',
      },
      {
        name: 'Calathea',
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1566907225472-514215c9e6e4?w=400',
        description: 'Stunning patterned leaves, unique living artwork.',
      },
    ],
  },
];

function ProductList({ onCartClick, onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#" onClick={(e) => { e.preventDefault(); onHome(); }}>
          Paradise Nursery
        </a>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); onHome(); }}>Home</a>
          </li>
          <li>
            <a href="#">Plants</a>
          </li>
          <li>
            <div className="cart-icon" onClick={onCartClick} role="button" aria-label="Shopping Cart">
              <span>&#128722;</span>
              {totalCartCount > 0 && (
                <span className="cart-count">{totalCartCount}</span>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div className="product-list-container">
        <h1>Our Plants</h1>
        {plantsData.map((categoryData) => (
          <div key={categoryData.category} className="category-section">
            <h2>{categoryData.category}</h2>
            <div className="plants-grid">
              {categoryData.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-info">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">${plant.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedItems[plant.name]}
                    >
                      {addedItems[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;