import { IoBagOutline, IoPersonSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../App.css";
import { useCheckout } from "../components/useCheckout.js";

function Navbar() {
  const { itemCount } = useCheckout();

  return (
    <header className="parent-container">
      <Link className="navbar-title" to="/">
        The Gallery
      </Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/#featured-artwork">Featured Artwork</Link>
        <Link to="/#shipping-process">Shipping</Link>
        <Link to="/#customer-reviews">Reviews</Link>
      </nav>

      <div className="nav-images">
        <button type="button" aria-label="Search">
          <IoSearch />
        </button>
        <button type="button" aria-label="Account">
          <IoPersonSharp />
        </button>
        <Link className="cart-nav-link" to="/checkout" aria-label="Checkout">
          <IoBagOutline />
          {itemCount > 0 && <span>{itemCount}</span>}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
