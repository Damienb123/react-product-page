import { UseState } from 'react'
{/* Uses 3 icons from imported from react-icons */}
import { } from "react-icons/fa"
{/* global css */}
import '/app.css'

function Navbar() {
    return (
        <>
        {/* Header layout focused on links throughout the product page */}
        <div className="parent-container bg-slate-50 flex justify-between items center">
            <h3 className="navbar-title">
                The Gallery
            </h3>
            <div className="nav-links">
                <link to="/">
                    Featured Artwork
                </link>
                <link to="/">
                    Shipping
                </link>
                <link to="/">
                    Reviews
                </link>
                <link to="/">
                    Newsletter
                </link>
            </div>

        </div>
        </>
    )
}