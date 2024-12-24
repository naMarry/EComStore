import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__logo">
                                <Link className='nav-link p-0 fs-3 fw-bold d-flex align-items-end text-white' to='/'>Liheng Shop <div className='bg-danger mb-2 ms-1' style={{ width: '5px', height: '5px' }}></div></Link>
                            </div>
                            <p>The customer is at the heart of our unique business model, which includes design.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6>Shopping</h6>
                            <ul>
                                <li><Link to="#">Clothing Store</Link></li>
                                <li><Link to="#">Trending Shoes</Link></li>
                                <li><Link to="#">Accessories</Link></li>
                                <li><Link to="#">Sale</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className="footer__widget">
                            <h6>Shopping</h6>
                            <ul>
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Payment Methods</Link></li>
                                <li><Link to="#">Delivery</Link></li>
                                <li><Link to="#">Return & Exchanges</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Newsletter</h6>
                            <div className="footer__newslatter">
                                <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                                <form action="#">
                                    <input type="text" placeholder="Your email" />
                                    <button type="submit">
                                        <span className="icon_mail_alt"></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="footer__copyright__text">
                            <p>
                                Copyright © {new Date().getFullYear()} All rights reserved | This template is made
                                with <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                                <Link to="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                                    Colorlib
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
