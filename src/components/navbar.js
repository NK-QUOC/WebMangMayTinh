import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import logo from "../Book-Store-Logo.svg";
function Navbar() {
    const { amount } = useGlobalContext();
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/Books">
                    <img src={logo} alt='Book store' className='logo' />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/Books">Book Menu</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                        <div className='nav-container'>
                            <div className="cart-btn">
                                <i className="cart-icon ti-shopping-cart"></i>
                            </div>
                            <div className='amount-container'>
                                <p className='total-amount'>{amount}</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );    
}

export default Navbar;