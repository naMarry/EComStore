import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/images/assets';
import ToggleCart from './navbar/ToggleCart';
import { ProductContext } from '../context/ProductContext';

export default function Navbar() {

    const { totalPrice } = useContext(ProductContext);

    return (
        <>
            <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasCart" aria-labelledby="My Cart">
                <div class="offcanvas-header justify-content-center">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                   <ToggleCart/>
                </div>
            </div>

            <header>
                <div class="container-fluid">
                    <div class="row py-3 border-bottom">

                        <div class="col-sm-4 col-lg-3 text-center text-sm-start">
                            <div class="main-logo">
                                <a href="index.html">
                                    <img src={assets.logo} alt="logo" class="img-fluid" style={{ width: "50px" }} />
                                </a>
                            </div>
                        </div>

                        <div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                            <div class="search-bar row bg-light p-2 my-2 rounded-4">
                                <div class="col-md-4 d-none d-md-block">
                                    <select class="form-select border-0 bg-transparent">
                                        <option>All Categories</option>
                                        <option>Men Clothes</option>
                                        <option>Women Clothes</option>
                                        <option>Jewelrry</option>
                                        <option>Electronics</option>
                                    </select>
                                </div>
                                <div class="col-11 col-md-7">
                                    <form id="search-form" class="text-center" action="index.html" method="post">
                                        <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                                    </form>
                                </div>
                                <div class="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                            <div class="support-box text-end d-none d-xl-block">
                                <span class="fs-6 text-muted">For Support?</span>
                                <h5 class="mb-0">+980-34984089</h5>
                            </div>

                            <ul class="d-flex justify-content-end list-unstyled m-0">
                                <li>
                                    <Link href="#" class="rounded-circle bg-light p-2 mx-1">
                                        <i class="bi bi-person text-black"></i>
                                        {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#user"></use></svg> */}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" class="rounded-circle bg-light p-2 mx-1">
                                        <i class="bi bi-heart text-black"></i>
                                        {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#heart"></use></svg> */}
                                    </Link>
                                </li>
                                <li class="d-lg-none">
                                    <Link href="#" class="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                        <i class="bi bi-list text-black "></i>
                                        {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#cart"></use></svg> */}
                                    </Link>
                                </li>
                                <li class="d-lg-none">
                                    <Link href="#" class="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                        {/* <svg width="24" height="24" viewBox="0 0 24 24"><use xlink:href="#search"></use></svg> */}
                                    </Link>
                                </li>
                            </ul>

                            <div class="cart text-end d-none d-lg-block dropdown">
                                <button class="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                    <span class="fs-6 text-muted dropdown-toggle">Your Cart</span>
                                    <span class="cart-total fs-5 fw-bold">{totalPrice}$</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row py-3">
                        <div class="d-flex  justify-content-center justify-content-sm-between align-items-center">
                            <div class="main-menu d-flex navbar navbar-expand-lg">

                                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                                    aria-controls="offcanvasNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                                    <div class="offcanvas-header justify-content-center">
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div class="offcanvas-body">

                                        <select class="filter-categories border-0 mb-0 me-5">
                                            <option>Shop by Departments</option>
                                            <option>Groceries</option>
                                            <option>Drinks</option>
                                            <option>Chocolates</option>
                                        </select>

                                        <ul class="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                            {/* <li class="nav-item active">
                                                <Link href="#women" class="nav-link">Women</Link>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <Link href="#men" class="nav-link">Men</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link href="#kids" class="nav-link">Electronics</Link>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#accessories" class="nav-link">Accessories</a>
                                            </li> */}
                                            <li class="nav-item">
                                                <Link href="#blog" class="nav-link">Products</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link href="#blog" class="nav-link">About</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link href="#blog" class="nav-link">Contact</Link>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
