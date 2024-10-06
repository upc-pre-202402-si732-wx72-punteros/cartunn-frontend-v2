"use client";
import { useEffect, useState } from "react";
import ProductClientCard from "@/components/ProductClientCard";

import Product from "@/interfaces/Product";
import getProducts from "@/logic/getProducts";

const HomePage = () => {
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
            <span className="text-2xl font-extrabold tracking-tighter">Products list</span>
            <article className="flex flex-wrap gap-x-8">
                {products && products.map((el) => (
                    <ProductClientCard
                        id={el.id}
                        title={el.title}
                        description={el.description}
                        image={el.image}
                        price={el.price}
                        key={el.id}
                    />
                ))}
            </article>
        </article>
    );
};

export default HomePage;