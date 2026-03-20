import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
    { category: "Air Purifying", plants: [{name: "Snake Plant", cost: 15, image: "..."}, {name: "Spider Plant", cost: 12, image: "..."}, /* Thêm đủ 6 cây */] },
    { category: "Aromatic", plants: [{name: "Lavender", cost: 20, image: "..."}, {name: "Rosemary", cost: 18, image: "..."}, /* Thêm đủ 6 cây */] },
    { category: "Low Light", plants: [{name: "Peace Lily", cost: 25, image: "..."}, {name: "Pothos", cost: 10, image: "..."}, /* Thêm đủ 6 cây */] }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav>
        <a href="/">Home</a> <a href="#">Plants</a> 
        <span>Cart Icons ({totalItems})</span>
      </nav>
      {plantsArray.map(cat => (
        <div key={cat.category}>
          <h2>{cat.category}</h2>
          {cat.plants.map(plant => (
            <div key={plant.name}>
              <img src={plant.image} alt={plant.name} />
              <p>{plant.name} - ${plant.cost}</p>
              <button 
                disabled={cartItems.some(item => item.name === plant.name)}
                onClick={() => dispatch(addItem(plant))}>
                {cartItems.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default ProductList;
