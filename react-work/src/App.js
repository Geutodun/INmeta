import logo from './logo.svg';
import './App.css';

function App() {
  const handleBuyClick = (itemName) => {
    alert(`${itemName}을(를) 장바구니에 추가했습니다!`);
  };

  const products = [
    { id: 1, name: '상품 1', price: '₩25,000', image: '/sh1.jpg' },
    { id: 2, name: '상품 2', price: '₩30,000', image: '/sh1.jpg' },
    { id: 3, name: '상품 3', price: '₩15,000', image: '/sh1.jpg' },
    { id: 4, name: '상품 4', price: '₩20,000', image: '/sh1.jpg' },
  ];

  return (
    <div className="App">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <div className="product-title">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <button
                className="product-button"
                onClick={() => handleBuyClick(product.name)}
              >
                구매하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;