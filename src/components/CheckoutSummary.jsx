// Problem solved: gives the artwork store a dedicated checkout page where
// customers can review cart contents, adjust quantities, remove items, choose a
// payment option, and see a live order total before placing an order.
// Purpose: keep checkout UI concerns in one component while relying on
// useCheckout for cart state so the product page and checkout page stay synced.
// Development approach: render the cart from shared context, derive all prices
// from provider totals, and use local state only for the selected payment method.
import { useState } from "react";
import {
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaMinus,
  FaPlus,
  FaRegTrashAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";
import { artworkProducts } from "../data/artworkProducts.js";
import { useCheckout } from "./useCheckout.js";
import Navbar from "../layouts/Navbar.jsx";
import Footer from "../layouts/footer.jsx";

const paymentOptions = [
  { id: "card", label: "Card", icon: <FaCcVisa /> },
  { id: "paypal", label: "PayPal", icon: <FaCcPaypal /> },
  { id: "installments", label: "Installments", icon: <FaCcMastercard /> },
  { id: "express", label: "Express", icon: <FaCcAmex /> },
];

// Keeps all checkout totals formatted consistently anywhere the summary renders.
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function CheckoutSummary() {
  const {
    addItem,
    cartItems,
    decreaseQuantity,
    increaseQuantity,
    removeItem,
    shipping,
    subtotal,
    tax,
    total,
    updateQuantity,
  } = useCheckout();
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <>
      <Navbar />
      <main className="checkout-page">
        <section className="checkout-heading">
          <p>Secure checkout</p>
          <h1>Checkout Summary</h1>
          <Link className="continue-shopping-link" to="/">
            Continue shopping
          </Link>
        </section>

        <section className="checkout-layout">
          <div className="checkout-cart-panel">
            <div className="checkout-section-header">
              <h2>Your Cart</h2>
              <span>{cartItems.length} selected</span>
            </div>

            {cartItems.length > 0 ? (
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <article className="checkout-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="checkout-item-details">
                      <h3>{item.title}</h3>
                      <p>{item.artist}</p>
                      <strong>{formatCurrency(item.price)}</strong>
                    </div>

                    <div className="quantity-controls" aria-label="Quantity">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.title} quantity`}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <FaMinus />
                      </button>
                      <input
                        aria-label={`${item.title} quantity`}
                        min="1"
                        type="number"
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(item.id, event.target.value)
                        }
                      />
                      <button
                        type="button"
                        aria-label={`Increase ${item.title} quantity`}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <button
                      className="remove-item-button"
                      type="button"
                      aria-label={`Remove ${item.title}`}
                      onClick={() => removeItem(item.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add a piece below to rebuild your checkout.</p>
              </div>
            )}

            <div className="checkout-add-more">
              <h3>Add More Artwork</h3>
              <div className="add-more-grid">
                {/* Reuses the same catalog data as the product page so new checkout additions remain consistent. */}
                {artworkProducts.map((product) => (
                  <button
                    className="add-more-item"
                    key={product.id}
                    type="button"
                    onClick={() => addItem(product)}
                  >
                    <img src={product.image} alt="" />
                    <span>{product.title}</span>
                    <strong>{formatCurrency(product.price)}</strong>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="checkout-summary-panel">
            <div className="checkout-section-header">
              <h2>Payment</h2>
              <span>
                <FaShieldAlt /> Protected
              </span>
            </div>

            <div
              className="payment-options"
              role="radiogroup"
              aria-label="Payment method"
            >
              {paymentOptions.map((option) => (
                <button
                  className={paymentMethod === option.id ? "active" : ""}
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={paymentMethod === option.id}
                  onClick={() => setPaymentMethod(option.id)}
                >
                  {option.icon}
                  <span>{option.label}</span>
                </button>
              ))}
            </div>

            <form className="payment-form">
              <label>
                Name on card
                <input type="text" placeholder="Avery Stone" />
              </label>
              <label>
                Card number
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="4242 4242 4242 4242"
                />
              </label>
              <div className="payment-form-row">
                <label>
                  Expiration
                  <input type="text" placeholder="MM / YY" />
                </label>
                <label>
                  CVC
                  <input type="text" inputMode="numeric" placeholder="123" />
                </label>
              </div>
            </form>

            <div className="order-totals">
              <div>
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div>
                <span>Shipping</span>
                <strong>
                  {shipping === 0 ? "Free" : formatCurrency(shipping)}
                </strong>
              </div>
              <div>
                <span>Estimated tax</span>
                <strong>{formatCurrency(tax)}</strong>
              </div>
              <div className="order-total-line">
                <span>Total</span>
                <strong>{formatCurrency(total)}</strong>
              </div>
            </div>

            <button
              className="checkout-submit-button"
              type="button"
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CheckoutSummary;
