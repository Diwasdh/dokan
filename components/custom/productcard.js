/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductCard = (props) => {
    return (
        <div className="product-card m-5">
            <div className="product-card-image">
                <img src={props.image} alt="product" />
            </div>
            <div className="product-card-text py-2 px-5">
                <h3 className="py-1">{props.title}</h3>
                <p>{props.description}</p>
                <p className="py-1">{props.price}</p>
                <button className="btn-dark py-1 my-2">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
