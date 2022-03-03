/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import HeroBanner from "../components/custom/herobanner";
import ProductContainer from "../components/custom/productcontainer";
import ProductCard from "../components/custom/productcard";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Dokan</title>

                <link rel="icon" href="/logo.ico" />
            </Head>
            <HeroBanner />
            <ProductContainer title="Featured Products">
                <ProductCard
                    image="/logo.ico"
                    title="Doko"
                    description="Handmade"
                    price="Rs. 400"
                />{" "}
                <ProductCard
                    image="/logo.ico"
                    title="Doko"
                    description="Handmade"
                    price="Rs. 400"
                />{" "}
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
            </ProductContainer>
        </div>
    );
}
