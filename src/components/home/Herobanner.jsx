import React from 'react';
import { Link } from 'react-router-dom';

export default function Herobanner() {
    return (
        <section className="home-hero">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-7 col-md-8">
                        <div className='pt-5 mt-5'>
                            <h6 className='text-danger fw-meduim'>Summer Collection</h6>
                            <h2>Fall - Winter Collections 2030</h2>
                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                            <Link to='shop' className="primary-btn">Shop now <span className="arrow_right"></span></Link>
                            <div className="hero__social" style={{ marginTop: '160px', marginBottom: '30px' }}>
                                <Link ><i className="fa fa-facebook"></i></Link>
                                <Link><i className="fa fa-twitter"></i></Link>
                                <Link><i className="fa fa-pinterest"></i></Link>
                                <Link ><i className="fa fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
