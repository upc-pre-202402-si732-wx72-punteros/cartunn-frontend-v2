"use client";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import NextImage from "next/image";
import toast, { Toaster } from "react-hot-toast";

import favorite from "@/assets/icons/heart.svg";
import favoriteFilled from "@/assets/icons/heart-filled.svg";

import Product from "@/interfaces/Product";
import postFavoriteProduct from "@/logic/postFavoriteProduct";
import deleteFavoriteProductById from "@/logic/deleteFavoriteProductById";
import postOrder from "@/logic/postOrder";
import postProductRefund from "@/logic/postProductRefund";

const ProductClientCard = (props: Product) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const favoriteProductHandler = async () => {
        try {
            if (!isFavorite) {
                await postFavoriteProduct(props.id);
                setIsFavorite(true);
                toast.success("Añadido a favoritos");
            } else {
                await deleteFavoriteProductById(props.id);
                setIsFavorite(false);
                toast.success("Elemento borrado de favoritos");
            }
        } catch (error) {
            toast.error("Error al actualizar favoritos");
        }
    };

    const productRefundHandler = () => {
        toast.promise(
            postProductRefund(props.id, props.title, props.description), {
                loading: "Ordenando reembolso...",
                success: "Rembolso ordenado",
                error: "Error: No se reembolsó 😔",
            }
        );
    };

    const orderHandler = () => {
        toast.promise(
            postOrder(props.id, props.title, props.description), {
                loading: "Ordenando...",
                success: "Orden creada",
                error: "Error: No se creo la orden 😔",
            }
        );
    };

    return (
        <section className="flex flex-col w-[15%] mt-4 px-6 py-4 border rounded-xl">
            <Toaster />
            <section className="flex justify-between mt-2 mb-4">
                <h2 className="text-xl font-extrabold tracking-tighter">{`Id product: #${props.id}`}</h2>
                <button onClick={favoriteProductHandler}>
                    <NextImage
                        src={isFavorite ? favoriteFilled : favorite}
                        alt="favorites"
                    />
                </button>
            </section>
            <Image
                src={props.image}
                fallbackSrc="https://via.placeholder.com/200"
                alt={props.title}
                height={200}
                objectFit="cover"
                className="w-full rounded-lg"
            />
            <section className="flex flex-col mt-4">
                <span className="font-bold tracking-tighter italic">{props.title}</span>
                <span className="text-xs">{props.description}</span>
                <section className="flex justify-between my-1">
                    <span className="font-bold tracking-tighter">Price</span>
                    <span className="font-bold tracking-tighter">${props.price}</span>
                </section>
                <button
                    className="mt-2 py-3 bg-gray-50 hover:bg-gray-200 font-semibold rounded-sm border"
                    onClick={productRefundHandler}
                >
                    Product refund
                </button>
                <button
                    className="c-button mt-2 py-3 font-semibold"
                    onClick={orderHandler}
                >
                    Order
                </button>
            </section>
        </section>
    );
};

export default ProductClientCard;