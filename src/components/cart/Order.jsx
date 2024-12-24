import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

export default function Order() {

    const { totalPrice, selectedProducts } = useContext(ProductContext);

    return (
        <div>
            <h4>Cart Total</h4>
            <hr className='my-4 bg-dark' />
            <div>
                {selectedProducts.map((product, index) =>
                    <div className="d-flex justify-content-between">
                        <p>{product.title}</p>
                        <p>{product.price}$</p>
                    </div>
                )}
            </div>
            <hr className='my-4 bg-dark' />
            <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>{totalPrice}$</h5>
            </div>
            <Link to='/checkout'>
                <button className='btn btn-dark w-100 py-2 mt-5'>Checkout</button>
            </Link>
        </div>
    )
}