import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Card from '../Card';
import { Link } from 'react-router-dom';

export default function Content() {

    const {
        products
    } = useContext(ProductContext);

    const filterJewelery = products.filter(pro => pro.category === "jewelery");
    const filterMenClothes = products.filter(pro => pro.category === "men's clothing");
    const filterWomenClothes = products.filter(pro => pro.category === "women's clothing");

    return (
        <div class="col-lg-9">
            <div class="row">
                {
                    products.map((product, index) =>
                        <Card product={product} index={index} />
                    )}
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="product__pagination">
                        <a class="active" href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <span>...</span>
                        <a href="#">21</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
