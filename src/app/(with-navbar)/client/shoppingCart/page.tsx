"use client";
import { useEffect, useState } from "react";

import ShoppingClientCard from "@/components/ShoppingClientCard";

import Product from "@/interfaces/Product";
import getProducts from "@/logic/getProducts";

const ShoppingCartPage = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const getData = async () => {
        const response = await getProducts();
        setProducts(response);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Shopping cart</span>
            <article className="flex">
                <article className="flex flex-wrap gap-4 w-5/6">

                    <ShoppingClientCard/>

                </article>
                <section className="flex flex-col w-1/6">
                    <span className="text-2xl font-extrabold tracking-tighter">Resumen de pedido</span>
                    <span className="my-2">Total: $225.00</span>
                    <button className="c-button mt-2 py-3 font-semibold">Pagar el pedido</button>
                </section>
            </article>
        </article>
    );
}

export default ShoppingCartPage;