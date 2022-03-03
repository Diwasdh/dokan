import React from "react";
import ProductCard from "./productcard";

const ProdctContainer = (props) => {
    return (
        <div className="product-container-wrapper my-5">
            <div className="product-container-header">
                <h2>{props.title}</h2>
            </div>
            <div className="product-container">{props.children}</div>
        </div>
    );
};

export default ProdctContainer;
