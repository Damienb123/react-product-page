import React from 'react'
import { Carousel } from 'antd'
import { FaStar, FaRegStar, FaTruck, FaShieldAlt, FaSyncAlt, FaBox } from "react-icons/fa";
import '../App.css'
import  artwork_1  from "../assets/artwork_1.png";
import  artwork_2  from "../assets/artwork_2.png";
import Navbar from './Navbar.jsx'
import Footer from './footer.jsx'


const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {

  return (
    <>
    <Navbar />
      <h3 className="featured-artwork" id="featured-artwork">Featured Artwork</h3>
      
<div className="child-container-artwork-1">
  <img src={ artwork_1 } />

  <div className="child-container-artwork-description-1">
    <h4>Artwork 2</h4>

    <div className="star-rating-reviews">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
      <p>47 reviews</p>
    </div>


    <p>$86.00</p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua...
    </p>

    <button className="cart-button">Add to Cart</button>
  </div>
</div>

        <div className="child-container-artwork-2">
  <img src={ artwork_2 } />

  <div className="child-container-artwork-description-2">
    <h4>Artwork 2</h4>

    <div className="star-rating-reviews">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
      <p>47 reviews</p>
    </div>

    <p>$86.00</p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua...
    </p>

    <button className="cart-button">Add to Cart</button>
  </div>
</div>



     <div className="shipping-parent-container">
      <h3 id="shipping-process">Shipping Process</h3>
            {/* Top icons */}
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

      {/* Tabs */}
      <div className="shipping-tabs">
        <span className="active">Shipping</span>
        <span>Warranty</span>
        <span>Care Instructions</span>
      </div>

      {/* Content */}
      <div className="shipping-content">
        <h3>Shipping Information</h3>
        <p>
          We offer free standard shipping on all orders over $75. Orders are
          typically processed within 1–2 business days and delivered within
          5–7 business days.
        </p>

        <ul>
          <li>Standard Shipping (5–7 days): Free on orders over $75, otherwise $8.95</li>
          <li>Express Shipping (2–3 days): $14.95</li>
          <li>Next Day Delivery: $24.95 (order before 2pm)</li>
        </ul>

        <p>
          International shipping is available to select countries. Rates are
          calculated at checkout.
        </p>
      </div>
     </div>

     <div className="customer-reviews-parent-container">
      <h3 id="customer-reviews">What Our Customers Think</h3>
       <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
     </div>
      <Footer />
    </>
  )
}

export default App
