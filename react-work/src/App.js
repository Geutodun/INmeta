import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';

function App() {
  const [cart, setCart] = useState([]); // 장바구니 상태

  const handleBuyClick = (product) => {
    setCart([...cart, product]); // 장바구니에 상품 추가
    alert(`${product.name}을(를) 장바구니에 추가했습니다!`);
  };

  const products = [
    { id: 1, name: '상품 1', price: '₩25,000', image: "/sh1.jpg" },
    { id: 2, name: '상품 2', price: '₩30,000', image: '/sh2.jpg' },
    { id: 3, name: '상품 3', price: '₩15,000', image: '/sh2.jpg' },
    { id: 4, name: '상품 4', price: '₩20,000', image: '/sh1.jpg' },
  ];

  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <Link to="/" className="nav-link">홈</Link>
          <Link to="/cart" className="nav-link">장바구니 ({cart.length})</Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="product-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-details">
                      <div className="product-title">{product.name}</div>
                      <div className="product-price">{product.price}</div>
                      <button
                        className="product-button"
                        onClick={() => handleBuyClick(product)}
                      >
                        구매하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function CartPage({ cart }) {
  return (
    <div>
      <h2>장바구니</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;