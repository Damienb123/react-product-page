import { UseState } from 'react'
{/* Uses 3 icons from imported from react-icons */}
import { IoPersonSharp, IoSearch, IoBagOutline } from "react-icons/io5";

{/* global css */}
import '../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        {/* Header layout focused on links throughout the product page */}
        <div className="parent-container bg-slate-50 flex justify-between items center">
            <h3 className="navbar-title">
                The Gallery
            </h3>
            <div className="nav-links">
             <a href="#featured-artwork">Featured Artwork</a>
             <a href="#shipping-process">Shipping</a>
             <a href="#customer-reviews">Reviews</a>

            </div>

            <div className="nav-images">
             <IoSearch />
             <IoPersonSharp />
             <IoBagOutline />
            </div>

        </div>
        </>
    )
}

export default Navbar