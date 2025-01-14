import logo from './logo.svg';
import './App.css';


function App() {
  const handleBuyClick = () => {
    alert('상품을 장바구니에 추가했습니다!');
  };

  return (
    <div className="App">
      <div className="product-card">
        <img
          src="/sh1.jpg"
          alt="상품 이미지"
          className="product-image"
        />
        <div className="product-details">
          <div className="product-title">멋진 상품</div>
          <div className="product-price">₩25,000</div>
          <button className="product-button" onClick={handleBuyClick}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;