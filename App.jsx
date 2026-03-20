import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  return (
    <div className="landing-page">
      {!showProductList ? (
        <div>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}
export default App;
