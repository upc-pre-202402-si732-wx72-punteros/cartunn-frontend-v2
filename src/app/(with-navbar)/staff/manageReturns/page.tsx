"use client"
import { useState, useEffect } from "react";

import RefundStaffCard from "@/components/RefundStaffCard";

import ProductRefund from "@/interfaces/ProductRefund";
import getProductRefunds from "@/logic/getProductRefunds";

const manageReturns = () => {
    const [products, setProducts] = useState<ProductRefund[]>([]);

    const getData = async () => {
        const response = await getProductRefunds();
        setProducts(response);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Manage returns</span>
            <article className="flex flex-wrap gap-x-4">
                {
                    products.map((product) => (
                        <RefundStaffCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            status={product.status}
                        />
                    ))
                }
            </article>
        </article>
    );
}

export default manageReturns;