import React from "react";
import ProductCard from "../components/custom/productcard";
import ProdctContainer from "../components/custom/productcontainer";

const Products = () => {
    return (
        <ProdctContainer>
            <ProductCard
                image="/logo.ico"
                title="Doko"
                description="Handmade"
                price="Rs. 400"
            />
            <ProductCard
                image="/logo.ico"
                title="Doko"
                description="Handmade"
                price="Rs. 400"
            />
        </ProdctContainer>
    );
};

export default Products;
