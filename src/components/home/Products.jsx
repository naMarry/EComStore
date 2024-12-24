import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Card from '../Card';

export default function Products() {
    const { products, loading, error } = useContext(ProductContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="filter__controls">
                            <li className="active" data-filter="*">Best Sellers</li>
                        </ul>
                    </div>
                </div>
                <div className="row product__filter">
                    {
                        products.slice(0, 8).map((product, index) =>
                            <Card product={product} index={index} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}
