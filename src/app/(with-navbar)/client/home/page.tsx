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
            <section className="flex justify-between">
                <div className="flex flex-col px-6 py-4 border rounded-xl mt-4 w-1/6">
                    <img
                        src="https://www.diariomotor.com/imagenes/2019/06/motor-v8-ford-mustang-shelby-gt500-0619-01-1280x854.webp"
                        alt="motor"
                        width={200}
                        height={200}
                        className="w-full rounded-lg"
                    />
                    <section className="flex flex-col mt-4">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-extrabold tracking-tighter">Id order #123</h2>
                            {
                                isFavorite
                                    ? <Image src={favorite} alt="favorites" onClick={isFavoriteHandler}/>
                                    : <Image src={favoriteFilled} alt="favorites" onClick={isFavoriteHandler}/>
                            }
                        </div>
                        <span className="italic">Motor v8 de Audi R8 SVJ</span>
                        <span className="font-bold tracking-tighter">$12000.02</span>
                        <button className="c-button mt-2 py-3 font-semibold">Order</button>
                    </section>
                </div>
            </section>
        </article>
    );
};

export default HomePage;