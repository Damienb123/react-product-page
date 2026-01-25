import { UseState } from 'react'
import { } from "react-icons/fa"
{/* global css */}
import '/app.css'

function footer() {
    return (
        <>
        <footer className="footer p-10 bg-slate-40">
            <div className="footer-title">
            <h3>
                The Gallery
            </h3>
            </div>
            
            <nav>
                {/* Navigational links */}
                <h6>Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Our Story</a>
                <a className="link link-hover">Sustainability</a>
                <a className="link link-hover">Careers</a>
            </nav>
             <nav>
                {/* Navigational links */}
                <h6>Support</h6>
                <a className="link link-hover"> Contact Us</a>
                <a className="link link-hover">FAQs</a>
                <a className="link link-hover">Shipping</a>
                <a className="link link-hover">Returns</a>
            </nav>
             <nav>
                {/* Navigational links */}
                <h6>Legal</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms of Service</a>
                <a className="link link-hover">Cookie Policy</a>
            </nav>
        </footer>
        </>
    )
}