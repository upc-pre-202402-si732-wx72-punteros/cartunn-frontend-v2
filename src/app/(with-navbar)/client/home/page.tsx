"use client"
import { useState } from "react";
import Image from "next/image";

import favorite from "@/assets/icons/heart.svg"
import favoriteFilled from "@/assets/icons/heart-filled.svg"

const HomePage = () => {
    const [isFavorite, setIsFavorite] = useState(true);

    const isFavoriteHandler = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <article>
            <span className="text-2xl font-extrabold tracking-tighter">Products list</span>
            <article className="flex flex-wrap gap-8">
                <section className="flex flex-col w-[15%] mt-4 px-6 py-4 border rounded-xl">
                    <section className="flex justify-between mt-2 mb-4">
                        <h2 className="text-xl font-extrabold tracking-tighter">Id product: #123</h2>
                        {
                            isFavorite
                                ? <Image src={favorite} alt="favorites" onClick={isFavoriteHandler}/>
                                : <Image src={favoriteFilled} alt="favorites" onClick={isFavoriteHandler}/>
                        }
                    </section>
                    <img
                        src="https://www.diariomotor.com/imagenes/2019/06/motor-v8-ford-mustang-shelby-gt500-0619-01-1280x854.webp"
                        alt="motor"
                        width={200}
                        height={200}
                        className="w-full rounded-lg"
                    />
                    <section className="flex flex-col mt-4">
                        <span className="font-bold tracking-tighter italic">Motor v8 de Audi R8 SVJ</span>
                        <span className="text-xs">Se ofrece motor nuevo de Lamborghini que puede ser usado en Audi R8</span>
                        <section className="flex justify-between my-1">
                            <span className="font-bold tracking-tighter">Price</span>
                            <span className="font-bold tracking-tighter">$12,500.50</span>
                        </section>
                        <button className="mt-2 py-3 bg-gray-50 hover:bg-gray-200 font-semibold rounded-sm border">Product refund</button>
                        <button className="c-button mt-2 py-3 font-semibold">Order</button>
                    </section>
                </section>
            </article>
        </article>
    );
};

export default HomePage;