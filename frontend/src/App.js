import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">

          <a href="index.html"> <img className="logo" src="/Images/Bargain_Land_Logo.png" alt="Bargain land logo" />
          </a>
          <button className="brand-button" onclick="openMenu()">
            &#9776;
                    </button>
        </div>

        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>

      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onclick="closeMenu()">x</button>
        <ul>
          <li href="index.html">Pants</li>
          <li href="">T-shirts</li>
          <li></li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/Images/t1.JPG" alt="product1" />
                <div className="product-name">
                  <a href="product.html">Slim T-shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>

              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/Images/t2.JPG" alt="product2" />
                <div className="product-name">
                  <a href="product.html">Slim T-shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>

              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/Images/t3.JPG" alt="product3" />
                <div className="product-name">
                  <a href="product.html">Slim T-shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>

              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/Images/t4.JPG" alt="product4" />
                <div className="product-name">
                  <a href="product.html">Slim T-shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>

              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/Images/t5.JPG" alt="product5" />
                <div className="product-name">
                  <a href="product.html">Slim T-shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>

              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/Images/t6.JPG" alt="product6" />
                <div className="product-name">
                  <a href="product.html">Slim T-shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 stars (10 reviews)</div>

              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        All rights reserved. Caroline Ho ©.
      </footer>
    </div>
      
  );
}

export default App;
