import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

export default function Navbar() {
    const { totalPrice } = useContext(ProductContext);
    
    const [activeMenu, setActiveMenu] = useState('home');

    const handleMenuClick = (menuItem) => {
        setActiveMenu(menuItem);
    };

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="header__top__left">
                                <p>Free shipping, 30-day return or refund guarantee.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="header__top__right">
                                <div className="header__top__links">
                                    <Link to='/signin'>Sign in</Link>
                                    <Link>FAQs</Link>
                                </div>
                                <div className="header__top__hover">
                                    <span>USD <i className="arrow_carrot-down"></i></span>
                                    <ul>
                                        <li>USD</li>
                                        <li>EUR</li>
                                        <li>USD</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo py-2">
                            <Link className='px-0 nav-link fs-3 fw-bold d-flex align-items-end' to='/'>Liheng Shop <div className='bg-danger mb-2 ms-1' style={{ width: '5px', height: '5px' }}></div></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className={activeMenu === 'home' ? 'active' : ''}>
                                    <Link to='/' onClick={() => handleMenuClick('home')}>Home</Link>
                                </li>
                                <li className={activeMenu === 'shop' ? 'active' : ''}>
                                    <Link to='/shop' onClick={() => handleMenuClick('shop')}>Shop</Link>
                                </li>
                                <li className={activeMenu === 'pages' ? 'active' : ''}>
                                    <Link onClick={() => handleMenuClick('pages')}>Pages</Link>
                                    <ul className="dropdown">
                                        <li><Link to='/error'>About Us</Link></li>
                                        <li><Link to='/error'>Shop Details</Link></li>
                                        <li><Link to='/error'>Shopping Cart</Link></li>
                                        <li><Link to='/error'>Check Out</Link></li>
                                    </ul>
                                </li>
                                <li className={activeMenu === 'contact' ? 'active' : ''}>
                                    <Link to='/contact' onClick={() => handleMenuClick('contact')}>Contacts</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option py-3">
                            <Link className="search-switch nav-link p-0"><i className="bi bi-search"></i></Link>
                            <Link to='/cart' className='nav-link'><i className="bi bi-cart"></i></Link>
                            <div className="price">${totalPrice}</div>
                        </div>
                    </div>
                </div>
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div>
        </header>
    );
}
