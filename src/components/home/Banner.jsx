import React from 'react';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets'

export default function Banner() {
    return (
        <section className="banner spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-4">
                        <div className="banner__item">
                            <div className="banner__item__pic">
                                <img src={assets.banner1} alt="" />
                            </div>
                            <div className="banner__item__text">
                                <h2>Men Clothes</h2>
                                <Link to='/shop'>Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner__item banner__item--middle">
                            <div className="banner__item__pic">
                                <img src={assets.jewel} alt="" className='object-fit-cover' style={{height: '500px', width: '500px'}}/>
                            </div>
                            <div className="banner__item__text">
                                <h2>Accessories</h2>
                                <Link to='/shop'>Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="banner__item banner__item--last">
                            <div className="banner__item__pic">
                                <img src={assets.girl} alt="" className='object-fit-cover' style={{height: '500px', width: '500px'}} />
                            </div>
                            <div className="banner__item__text">
                                <h2>Women Clothes</h2>
                                <Link to='/shop'>Shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
