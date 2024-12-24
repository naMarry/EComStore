import React, { useContext } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext'

export default function Card({ product, index }) {
    const { handleAddToCart } = useContext(ProductContext);

    //lead to product detail page
    const navigate = useNavigate();

    const handleViewProductDetail = () => {
        if (product && product.id) {
            navigate(`/product/${product.id}`);
        } else {
            console.error('Product not found or ID is missing');
        }
    }

    return (
        <div className="col-lg-3 mb-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
            <div className="product__item">
                <div className="product__item__pic set-bg" data-setbg={product.image}>
                    <span className="label">New</span>
                    <li><Link to="#"><img src={product.image} alt="" className='object-fit-cover' style={{ width: '220px', height: '280px' }} /></Link></li>
                </div>
                <div className="product__item__text mt-5">
                    <h6>{product.title}</h6>
                    <Link to="#" className="add-cart" onClick={() => handleAddToCart(product.id)}>+ Add To Cart</Link>
                    <div className="rating">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                    </div>
                    <h5>{product.price}$</h5>
                    <div className="product__color__select">
                        <label htmlFor="pc-1">
                            <input type="radio" id="pc-1" />
                        </label>
                        <label className="active black" htmlFor="pc-2">
                            <input type="radio" id="pc-2" />
                        </label>
                        <label className="grey" htmlFor="pc-3">
                            <input type="radio" id="pc-3" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
