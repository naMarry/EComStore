import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section class="breadcrumb-option">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb__text">
                            <h4>Checkout</h4>
                            <div class="breadcrumb__links">
                                <Link to='/'>Home</Link>
                                <Link to='/shop'>Shop</Link>
                                <Link to='/cart'>Cart</Link>
                                <span>Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
