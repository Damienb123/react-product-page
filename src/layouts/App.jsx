import { Routes, Route } from "react-router-dom";
import {
  FaBox,
  FaRegStar,
  FaShieldAlt,
  FaStar,
  FaSyncAlt,
  FaTruck,
} from "react-icons/fa";
import { Carousel } from "antd";
import "../App.css";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import person_1 from "../assets/person-image.png";
import CheckoutSummary from "../components/CheckoutSummary.jsx";
import { artworkProducts } from "../data/artworkProducts.js";
import { useCheckout } from "../components/useCheckout.js";

function Feature({ icon, title, subtitle }) {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCheckout();

  return (
    <div className="artwork-product-card">
      <img className="art-assets" src={product.image} alt={product.title} />

      <div className="artwork-product-description">
        <h4>{product.title}</h4>

        <div className="star-rating-reviews">
          <div className="review-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        </div>

        <p id="price-text">${product.price.toFixed(2)}</p>

        <p>{product.description}</p>

        <button
          className="cart-button"
          type="button"
          onClick={() => addItem(product)}
        >
          Add to Cart
        </button>
        <p className="reviews-link">47 Reviews</p>
      </div>
    </div>
  );
}

function ProductPage() {
  return (
    <>
      <Navbar />
      <h3 className="featured-artwork" id="featured-artwork">
        Featured Artwork
      </h3>

      {artworkProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <div className="shipping-parent-container">
        <h3 id="shipping-process">Shipping Process</h3>
        <div className="shipping-features">
          <Feature
            icon={<FaTruck />}
            title="Free Shipping"
            subtitle="On orders over $75"
          />
          <Feature
            icon={<FaShieldAlt />}
            title="2 Year Warranty"
            subtitle="Full Coverage"
          />
          <Feature
            icon={<FaSyncAlt />}
            title="Easy Shipping"
            subtitle="30 day returns"
          />
          <Feature
            icon={<FaBox />}
            title="Secure Package"
            subtitle="Care packaging"
          />
        </div>

        <div className="shipping-tabs">
          <span className="active">Shipping</span>
          <span>Warranty</span>
          <span>Care Instructions</span>
        </div>

        <div className="shipping-content">
          <h3>Shipping Information</h3>
          <p>
            We offer free standard shipping on all orders over $75. Orders are
            typically processed within 1-2 business days and delivered within
            5-7 business days.
          </p>

          <ul>
            <li>
              Standard Shipping (5-7 days): Free on orders over $75, otherwise
              $8.95
            </li>
            <li>Express Shipping (2-3 days): $14.95</li>
            <li>Next Day Delivery: $24.95 (order before 2pm)</li>
          </ul>

          <p>
            International shipping is available to select countries. Rates are
            calculated at checkout.
          </p>
        </div>
      </div>

      <div className="customer-reviews-parent-container">
        <h3 id="customer-reviews">What Our Customers Say</h3>

        <Carousel autoplay dots>
          <div className="review-slide">
            <div className="review-card">
              <img
                src={person_1}
                alt="Stephan Louis"
                className="review-avatar"
              />

              <h4 className="review-name">Stephan Louis</h4>

              <div className="review-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>

              <p className="review-text">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo."
              </p>
            </div>
          </div>
        </Carousel>

        <button className="review-button" type="button">
          Write A Review
        </button>
      </div>

      <div className="newsletter-parent-container">
        <div className="newsletter-text-content">
          <h3 id="newsletter-title">Join Our Newsletter</h3>
          <p id="newsletter-text-content">
            Curated artwork drops, framing ideas, and collection notes sent
            straight to your inbox.
          </p>
          <div className="newsletter-interations">
            <div className="email-input">
              <input
                type="email"
                placeholder="Enter your email"
                id="newsletter-email-input"
                size="50"
                required
              />
            </div>
            <button className="sign-up-btn" type="button">
              Subscribe Now
            </button>
            <p id="subscribe-policy-txt">
              By subscribing, you agree to our Privacy Policy. Unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutSummary />} />
    </Routes>
  );
}

export default App;
