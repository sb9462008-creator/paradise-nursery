import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';

const plantsData = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Spider Plant', price: 12.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.jpg/800px-Chlorophytum_comosum_0001.jpg', description: 'Great air purifier, easy to grow.' },
      { name: 'Peace Lily', price: 14.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/800px-Spathiphyllum_cochlearispathum_RTBG.jpg', description: 'Elegant white flowers, purifies air.' },
      { name: 'Boston Fern', price: 11.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Boston_fern_on_display.jpg/800px-Boston_fern_on_display.jpg', description: 'Lush green fronds, removes toxins.' },
      { name: 'Rubber Plant', price: 16.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_26022012.jpg/800px-Ficus_elastica_26022012.jpg', description: 'Bold leaves, excellent air cleaner.' },
      { name: 'Aloe Vera', price: 9.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/800px-Aloe_vera_flower_inset.png', description: 'Medicinal plant, purifies air.' },
      { name: 'Bamboo Palm', price: 19.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Livistona_chinensis_2.jpg/800px-Livistona_chinensis_2.jpg', description: 'Tropical feel, removes formaldehyde.' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', price: 13.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bloeiende_lavendel.jpg/800px-Bloeiende_lavendel.jpg', description: 'Calming scent, beautiful purple blooms.' },
      { name: 'Jasmine', price: 15.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/White_Jasmine_Flowers.jpg/800px-White_Jasmine_Flowers.jpg', description: 'Sweet fragrance, white flowers.' },
      { name: 'Rosemary', price: 8.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rosemary_bush.jpg/800px-Rosemary_bush.jpg', description: 'Aromatic herb, great for cooking.' },
      { name: 'Mint', price: 6.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mintleaf_edit.jpg/800px-Mintleaf_edit.jpg', description: 'Fresh scent, versatile herb.' },
      { name: 'Gardenia', price: 17.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Gardenia_jasminoides.jpg/800px-Gardenia_jasminoides.jpg', description: 'Intensely fragrant white blooms.' },
      { name: 'Lemon Balm', price: 7.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-092.jpg/800px-Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-092.jpg', description: 'Citrus scent, calming properties.' },
    ],
  },
  {
    category: 'Foliage Plants',
    plants: [
      { name: 'Monstera', price: 24.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Monstera_deliciosa3.jpg/800px-Monstera_deliciosa3.jpg', description: 'Iconic split leaves, tropical look.' },
      { name: 'Pothos', price: 8.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Epipremnum_aureum_31082012.jpg/800px-Epipremnum_aureum_31082012.jpg', description: 'Trailing vines, very easy to care for.' },
      { name: 'Snake Plant', price: 13.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/800px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg', description: 'Upright leaves, nearly indestructible.' },
      { name: 'ZZ Plant', price: 18.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/thirty/Zamioculcas_zamiifolia.jpg/800px-Zamioculcas_zamiifolia.jpg', description: 'Glossy leaves, drought tolerant.' },
      { name: 'Philodendron', price: 14.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Philodendron_hederaceum_var._oxycardium_02.jpg/800px-Philodendron_hederaceum_var._oxycardium_02.jpg', description: 'Heart-shaped leaves, easy grower.' },
      { name: 'Calathea', price: 21.99, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Calathea_ornata1.jpg/800px-Calathea_ornata1.jpg', description: 'Stunning patterned leaves, unique beauty.' },
    ],
  },
];

function ProductList({ onCartClick, onHome }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="#" onClick={onHome}>Paradise Nursery</a>
        <ul className="navbar-links">
          <li><a href="#" onClick={onHome}>Home</a></li>
          <li><a href="#">Plants</a></li>
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

      <div className="product-list-container">
        <h1>Our Plants</h1>
        {plantsData.map((category) => (
          <div key={category.category} className="category-section">
            <h2>{category.category}</h2>
            <div className="plants-grid">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-card-info">
                    <h3>{plant.name}</h3>
                    <p>\</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedItems[plant.name]}
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